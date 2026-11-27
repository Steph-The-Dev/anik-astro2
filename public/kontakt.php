<?php
/**
 * Kontaktformular – verschickt Anfragen direkt vom eigenen Webspace per E-Mail.
 * Kein Drittanbieter, es wird nichts gespeichert (ausser einem kurzlebigen, gehashten
 * Zähler gegen Spam-Fluten).
 *
 * Konfiguration: kontakt-config.php wird beim Build aus .env erzeugt (siehe astro.config.mjs).
 * Antwortet mit JSON, wenn per fetch() aufgerufen, sonst mit einer Weiterleitung (ohne JavaScript).
 */
declare(strict_types=1);

const KONTAKT = true;
const MIN_SECONDS = 3;        // schneller ausgefüllte Formulare gelten als Bot
const RATE_LIMIT = 5;         // max. Anfragen ...
const RATE_WINDOW = 3600;     // ... pro Stunde und IP

$wantsJson = str_contains($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json');

function respond(bool $ok, string $message, int $status = 200): never
{
    global $wantsJson;
    http_response_code($status);
    if ($wantsJson) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['success' => $ok, 'message' => $message], JSON_UNESCAPED_UNICODE);
    } else {
        header('Location: /?kontakt=' . ($ok ? 'ok' : 'fehler') . '#kontakt', true, 303);
    }
    exit;
}

/** Entfernt Zeilenumbrüche und Steuerzeichen (verhindert Header-Injection). */
function clean_line(string $value, int $max): string
{
    $value = preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $value) ?? '';
    return mb_substr(trim($value), 0, $max);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(false, 'Methode nicht erlaubt.', 405);
}

$config = @include __DIR__ . '/kontakt-config.php';
if (!is_array($config) || empty($config['to'])) {
    error_log('kontakt.php: kontakt-config.php fehlt oder ist unvollständig');
    respond(false, 'Das Formular ist gerade nicht verfügbar.', 500);
}

// Nur Anfragen von der eigenen Website annehmen
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && parse_url($origin, PHP_URL_HOST) !== ($_SERVER['HTTP_HOST'] ?? '')) {
    respond(false, 'Ungültige Anfrage.', 403);
}

// Honeypot ausgefüllt oder Formular zu schnell abgeschickt: Bot – Erfolg vortäuschen
$elapsedMs = (int) ($_POST['elapsed'] ?? 0);   // leer bei Absenden ohne JavaScript -> keine Prüfung
if (!empty($_POST['botcheck']) || ($elapsedMs > 0 && $elapsedMs < MIN_SECONDS * 1000)) {
    respond(true, 'Vielen Dank!');
}

// Einfaches Rate-Limit pro IP (nur Hash + Zeitstempel, verfällt nach einer Stunde)
$bucket = sys_get_temp_dir() . '/kontakt_' . hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? '') . __FILE__);
$hits = array_filter(
    (array) json_decode((string) @file_get_contents($bucket), true),
    fn($ts) => is_int($ts) && $ts > time() - RATE_WINDOW
);
if (count($hits) >= RATE_LIMIT) {
    respond(false, 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.', 429);
}

$name    = clean_line((string) ($_POST['name'] ?? ''), 200);
$email   = clean_line((string) ($_POST['email'] ?? ''), 254);
$phone   = clean_line((string) ($_POST['phone'] ?? ''), 50);
$message = mb_substr(trim(str_replace("\r\n", "\n", (string) ($_POST['message'] ?? ''))), 0, 5000);

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'Bitte füllen Sie Name, eine gültige E-Mail-Adresse und Ihre Nachricht aus.', 422);
}

$to      = $config['to'];
$from    = $config['from'] ?: $to;
$subject = mb_encode_mimeheader('Neue Nachricht über die Website von ' . $name, 'UTF-8');
$body    = "Name: {$name}\nE-Mail: {$email}\n"
         . ($phone !== '' ? "Telefon: {$phone}\n" : '')
         . "\nNachricht:\n{$message}\n";
$headers = [
    'From'                      => mb_encode_mimeheader('Website-Kontaktformular', 'UTF-8') . " <{$from}>",
    'Reply-To'                  => $email,
    'MIME-Version'              => '1.0',
    'Content-Type'              => 'text/plain; charset=UTF-8',
    'Content-Transfer-Encoding' => '8bit',
];

if (!mail($to, $subject, $body, $headers, '-f' . $from)) {
    error_log('kontakt.php: mail() fehlgeschlagen');
    respond(false, 'Die Nachricht konnte nicht gesendet werden.', 500);
}

$hits[] = time();
@file_put_contents($bucket, json_encode(array_values($hits)), LOCK_EX);

respond(true, 'Vielen Dank! Ihre Nachricht ist angekommen.');
