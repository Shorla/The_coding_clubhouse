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
| `.profile-card` | Card | Main profile card container | input.css |
| `.profile-card__avatar-wrap` | Card | Avatar wrapper with shadow | input.css |
| `.profile-card__avatar` | Card | Avatar image styling | input.css |
| `.profile-card__name` | Card | Profile name text | input.css |
| `.profile-card__role` | Card | Profile role/title text | input.css |
| `.profile-card__bio` | Card | Profile biography text | input.css |
| `.contact-form`                | Form       | Main contact form container                         | input.css |
| `.contact-title`               | Form       | Contact form heading/title                          | input.css |
| `.contact-form__field`         | Form Field | Input wrapper (label-inside + focus ring)           | input.css |
| `.contact-form__innerLabel`    | Form Field | Label text inside input/textarea wrapper            | input.css |
| `.contact-form__input`         | Form Field | The actual `<input>` element (borderless)           | input.css |
| `.contact-form__textareaField` | Form Field | Textarea wrapper (label-inside + focus ring)        | input.css |
| `.contact-form__textarea`      | Form Field | The actual `<textarea>` element (borderless, grows) | input.css |
| `.contact-form__counter`       | Form Field | Bottom-right character counter text                 | input.css |



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


### Contact Form Container

* **Class name:** `.contact-form`
* **Layer:** components
* **Category:** Form
* **Used for:** Main wrapper container for the entire contact form (card-like layout)
* **Do NOT use for:** Generic page sections that are not a form container
* **Tailwind utilities applied:**

  * `w-full`
  * `max-w-3xl`
  * `bg-brand-white`
  * `rounded-lg`
  * `shadow-md`
  * `p-8`

---

### Contact Form Title

* **Class name:** `.contact-title`
* **Layer:** components
* **Category:** Form
* **Used for:** Heading/title text at the top of the contact form
* **Do NOT use for:** Page titles or headings outside the contact form
* **Tailwind utilities applied:**

  * `text-2xl`
  * `font-bold`
  * `mb-4`
  * `text-gray-800`

---

### Contact Form Field Wrapper

* **Class name:** `.contact-form__field`
* **Layer:** components
* **Category:** Form Field
* **Used for:** Wrapper that creates the bordered “box” around label + input (label is inside the box)
* **Do NOT use for:** Standalone inputs without label-inside layout, selects, or buttons
* **Tailwind utilities applied:**

  * `h-[3.9375rem]`
  * `min-h-[2.75rem]`
  * `rounded`
  * `border-2`
  * `border-brand-neutralWhite`
  * `bg-white`
  * `flex`
  * `flex-col`
  * `justify-center`
  * `gap-2`
  * `focus-within:outline-none`
  * `focus-within:ring-2`
  * `focus-within:ring-brand-purple`

---

### Contact Form Inner Label

* **Class name:** `.contact-form__label`
* **Layer:** components
* **Category:** Form Field
* **Used for:** Label text placed inside the field wrapper (above the input/textarea value line)
* **Do NOT use for:** Labels that live outside the input wrapper or inline helper text
* **Tailwind utilities applied:**

  * `font-medium`
  * `leading-none`
  * `text-gray-800`

---

### Contact Form Label Small

* **Class name:** `.contact-form__label--sm`
* **Layer:** components
* **Category:** Form Field
* **Used for:** Small label variant for standard input fields (e.g., Full Name, Email)
* **Do NOT use for:** Section headings or large textarea labels
* **Tailwind utilities applied:**

  * `text-lg`

---

### Contact Form Label Large

* **Class name:** `.contact-form__label--lg`
* **Layer:** components
* **Category:** Form Field
* **Used for:** Large label variant for textarea fields (e.g., Message label)
* **Do NOT use for:** Small input labels or any non-label text
* **Tailwind utilities applied:**

  * `text-2xl`

---

### Contact Form Input Element

* **Class name:** `.contact-form__input`
* **Layer:** components
* **Category:** Form Field
* **Used for:** Borderless `<input>` element that sits inside `.contact-form__field`
* **Do NOT use for:** Inputs that need their own border, padding, or outer wrapper
* **Tailwind utilities applied:**

  * `w-full`
  * `border-0`
  * `bg-transparent`
  * `p-0`
  * `text-lg`
  * `text-gray-700`
  * `placeholder:text-gray-400`
  * `focus:outline-none`
  * `focus:ring-0`

---

### Contact Form Textarea Wrapper

* **Class name:** `.contact-form__textareaField`
* **Layer:** components
* **Category:** Form Field
* **Used for:** Wrapper that creates the bordered textarea box with label-inside layout
* **Do NOT use for:** Single-line inputs or short fields
* **Tailwind utilities applied:**

  * `w-full`
  * `rounded`
  * `border-2`
  * `border-brand-neutralWhite`
  * `bg-white`
  * `px-3`
  * `pt-3`
  * `pb-4`
  * `min-h-[11rem]`
  * `flex`
  * `flex-col`
  * `gap-2`
  * `focus-within:outline-none`
  * `focus-within:ring-2`
  * `focus-within:ring-brand-purple`

---

### Contact Form Textarea Element

* **Class name:** `.contact-form__textarea`
* **Layer:** components
* **Category:** Form Field
* **Used for:** Borderless `<textarea>` element that grows inside `.contact-form__textareaField`
* **Do NOT use for:** Resizable textareas or standalone textareas without the wrapper
* **Tailwind utilities applied:**

  * `w-full`
  * `flex-1`
  * `resize-none`
  * `border-0`
  * `bg-transparent`
  * `p-0`
  * `text-lg`
  * `text-gray-700`
  * `placeholder:text-gray-300`
  * `focus:outline-none`
  * `focus:ring-0`

---

### Contact Form Counter

* **Class name:** `.contact-form__counter`
* **Layer:** components
* **Category:** Form Field
* **Used for:** Right-aligned character counter text displayed under the textarea (e.g., `0/1000`)
* **Do NOT use for:** Validation errors or helper messages
* **Tailwind utilities applied:**

  * `mt-2`
  * `text-right`
  * `text-lg`
  * `text-gray-700`










