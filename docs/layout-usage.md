# LayoutSite Component Usage

The `LayoutSite` component is the main layout component for the Anik von Rohr website. It provides a consistent structure for all pages, including the navbar and footer.

## Props

The `LayoutSite` component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Anik von Rohr \| Systemische Beratung" | The title of the page |
| `backgroundColor` | string | "air-superiority-blue-100" | The background color of the page |

## Examples

### Default Usage

```astro
---
import LayoutSite from "@layouts/LayoutSite.astro";
---

<LayoutSite>
  <p>Your content here</p>
</LayoutSite>
```

### Custom Title

```astro
---
import LayoutSite from "@layouts/LayoutSite.astro";
---

<LayoutSite title="Custom Page Title">
  <p>Your content here</p>
</LayoutSite>
```

### Custom Background Color

```astro
---
import LayoutSite from "@layouts/LayoutSite.astro";
---

<LayoutSite backgroundColor="primary-100">
  <p>Your content here with a primary-100 background</p>
</LayoutSite>
```

### Custom Title and Background Color

```astro
---
import LayoutSite from "@layouts/LayoutSite.astro";
---

<LayoutSite 
  title="Custom Page Title" 
  backgroundColor="secondary-200"
>
  <p>Your content here with a secondary-200 background</p>
</LayoutSite>
```

## Available Background Colors

You can use any of the color variables defined in the `global.css` file. Here are some examples:

- `air-superiority-blue-100` (default)
- `primary-100`, `primary-200`, etc.
- `secondary-100`, `secondary-200`, etc.
- `background-100`, `background-200`, etc.
- `bone-100`, `bone-200`, etc.
- `silver-100`, `silver-200`, etc.
- `ash-gray-100`, `ash-gray-200`, etc.
- `cadet-gray-100`, `cadet-gray-200`, etc.

Each color has variants from 50 to 900, with 50 being the lightest and 900 being the darkest.
