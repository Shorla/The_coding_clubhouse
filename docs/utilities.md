# Utilities Documentation

This file documents all **custom Tailwind utility classes** created for this project.

It serves as:
- A **single source of truth** for custom styles
- A **reference guide** for current and future developers
- A way to **avoid duplicate or conflicting utilities**
- A requirement for code review and merging

If a utility is not documented here, **it should not be used in the project**.

---

## How Developers Should Use This File

Whenever you create a **custom utility class** in `input.css` (for example: buttons, cards, spacing helpers, colors, etc.), you must:

1. Add the class in `input.css` inside `@layer components`
2. Add a row for the class in the **Utilities Table** below
3. Fill out the **Utility Documentation Template** for that class
4. Commit both the CSS change **and** the documentation together

This file is **manually maintained**.
Nothing here auto-updates.

---

## Utilities Table (Quick Reference)

Use this table to quickly search and understand available utilities.

| Class Name | Category | Description | File |
|----------|--------|------------|------|
| `.btn-primary` | Button | Primary action button | input.css |
| `.btn-secondary` | Button | Secondary action button | input.css |

> ⚠️ Every new utility **must** be added to this table.

---

## Why the Table Does NOT Auto-Fill

- Markdown files cannot update themselves
- GitHub does not auto-generate documentation from CSS
- This is intentional — it forces developers to **think about usage**

The table is a **summary**, not the full explanation.

The detailed explanation lives in the template below.

---

## 📝 Utility Documentation Template (Copy & Paste)

> Use this template whenever you create a new custom utility or component.
> paste it **below this section**, then fill it in, before opening a PR.

```md
### Utility Name
- **Class name:** `.`
- **Layer:** components | base | utilities
- **Category:** Button | Card | Layout | Form | Typography | Other
- **Used for:** 
- **Do NOT use for:** 
- **Tailwind utilities applied:**
  - 
  - 
- **HTML example:**
```html
<!-- Example usage -->

---
## 🧱 Buttons

### Utility Name
- **Class name:** `.btn-primary`
- **Layer:** components
- **Category:** Button
- **Used for:** Primary call-to-action buttons
- **Do NOT use for:** Secondary or destructive actions
- **Tailwind utilities applied:**
  - `px-4`
  - `py-2`
  - `rounded-lg`
  - `text-brand-white`
- **HTML example:**
```html
<button class="btn-primary">Donate</button>

---




