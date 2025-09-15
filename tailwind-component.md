# Tailwind Components Guide

This document outlines how to use and create Tailwind components in our project.

## Table of Contents
- [Introduction](#introduction)
- [Available Components](#available-components)
- [Design System](#design-system)
- [Component Usage](#component-usage)
- [Creating New Components](#creating-new-components)
- [Best Practices](#best-practices)

## Introduction

Our project uses Tailwind CSS for styling with a custom design system. This guide documents our components and how to use them effectively.

## Available Components

### 1. Navbar
- **Location**: `components/navbar.html`
- **Purpose**: Main navigation bar
- **Example**:
  ```html
  <nav class="bg-brand-purple text-white p-4">
    <h1 class="font-heading text-xl">NGO Name</h1>
  </nav>
  ```

### 2. Hero Section
- **Purpose**: Main banner/header section
- **Example**:
  ```html
  <section class="bg-brand-yellow text-white p-12 text-center">
    <h2 class="text-4xl font-heading">Page Title</h2>
    <p class="mt-2">Supporting text goes here</p>
    <button class="mt-6 px-6 py-3 bg-brand-accent text-black rounded-lg">
      Call to Action
    </button>
  </section>
  ```

### 3. Buttons
- **Purpose**: Interactive elements
- **Example**:
  ```html
  <button class="px-6 py-3 bg-brand-accent text-black rounded-lg">
    Click Me
  </button>
  ```

## Design System

### Colors
- Primary: `brand-purple` (#8C52FF)
- Secondary: `brand-violet` (#C46BE4)
- Accent: `brand-yellow` (#FFD447)
- Text: `brand-charcoal` (#2D2D2D)
- Background: `brand-gray` (#FSF7FB)
- Success: `brand-aqua` (#00C2A8)
- Error: `brand-coral` (#FF6F61)

### Typography
- **Headings**: Poppins (font-heading)
- **Body Text**: Nunito (font-body)
- **Base Font Size**: 16px

## Component Usage

1. **Import components** from the `components` directory
2. **Customize** using Tailwind's utility classes
3. **Maintain consistency** with the design system

## Creating New Components

1. **Create** a new file in `components/`
2. **Structure** with semantic HTML
3. **Style** using Tailwind utilities
4. **Document** with comments
5. **Add** to this guide

## Best Practices

1. **Responsive Design**
   - Use responsive prefixes (sm:, md:, lg:)
   - Test on multiple screen sizes

2. **Accessibility**
   - Use semantic HTML
   - Include ARIA attributes when needed
   - Ensure color contrast meets WCAG standards

3. **Performance**
   - Minimize custom CSS
   - Use Tailwind's utility classes
   - Optimize images and assets

4. **Documentation**
   - Comment complex components
   - Document props and usage
   - Include examples

---
*Last updated: 2025-09-15*
