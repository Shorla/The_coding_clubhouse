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
## 🎴 Profile Card

### Profile Card Container
- **Class name:** `.profile-card`
- **Layer:** components
- **Category:** Card
- **Used for:** Main container for user profile cards displaying user information in a card layout
- **Do NOT use for:** Profile pages, profile modals, or non-card-based profile displays
- **Tailwind utilities applied:**
  - `w-full`
  - `max-w-sm`
  - `flex`
  - `flex-col`
  - `items-center`
  - `rounded-xl`
  - `border-2`
  - `pt-6`, `pb-6`, `px-5`
  - `text-center`
  - `shadow-sm`
  - `bg-brand-blue50`
  - `order-brand-gray`
- **HTML example:**
```html
<div class="profile-card">
  <div class="profile-card__avatar-wrap">
    <img src="avatar.jpg" alt="User" class="profile-card__avatar" />
  </div>
  <h2 class="profile-card__name">John Doe</h2>
  <p class="profile-card__role">Software Developer</p>
  <p class="profile-card__bio">Passionate about building great software.</p>
</div>
```

---

### Profile Card Avatar Wrapper
- **Class name:** `.profile-card__avatar-wrap`
- **Layer:** components
- **Category:** Card
- **Used for:** Container that wraps the profile avatar image with padding and shadow
- **Do NOT use for:** Other image containers or non-avatar elements
- **Tailwind utilities applied:**
  - `w-32`
  - `h-32`
  - `rounded-full`
  - `bg-brand-white`
  - `p-1.5`
  - `shadow-md`

---

### Profile Card Avatar Image
- **Class name:** `.profile-card__avatar`
- **Layer:** components
- **Category:** Card
- **Used for:** Avatar image element inside the wrapper
- **Do NOT use for:** Other images or background images
- **Tailwind utilities applied:**
  - `w-full`
  - `h-full`
  - `rounded-full`
  - `object-cover`
  - `block`

---

### Profile Card Name
- **Class name:** `.profile-card__name`
- **Layer:** components
- **Category:** Card
- **Used for:** User's name heading in the profile card
- **Do NOT use for:** Other text or headings
- **Tailwind utilities applied:**
  - `mt-6`
  - `text-2xl`
  - `font-semibold`
  - `text-brand-charcoal`

---

### Profile Card Role
- **Class name:** `.profile-card__role`
- **Layer:** components
- **Category:** Card
- **Used for:** User's role or title text in the profile card
- **Do NOT use for:** General text content or descriptions
- **Tailwind utilities applied:**
  - `mt-2`
  - `text-[18px]`
  - `font-extrabold`
  - `leading-relaxed`
  - `text-brand-blue`

---

### Profile Card Bio
- **Class name:** `.profile-card__bio`
- **Layer:** components
- **Category:** Card
- **Used for:** User's biography or description text
- **Do NOT use for:** Names, roles, or other profile data
- **Tailwind utilities applied:**
  - `mt-6`
  - `text-lg`
  - `font-medium`
  - `leading-relaxed`
  - `text-brand-purple`
  - `text-justify`

---

## Table Entries for Utilities Table

| Class Name | Category | Description | File |
|----------|--------|------------|------|
| `.profile-card` | Card | Main profile card container | input.css |
| `.profile-card__avatar-wrap` | Card | Avatar wrapper with shadow | input.css |
| `.profile-card__avatar` | Card | Avatar image styling | input.css |
| `.profile-card__name` | Card | Profile name text | input.css |
| `.profile-card__role` | Card | Profile role/title text | input.css |
| `.profile-card__bio` | Card | Profile biography text | input.css |



