# Code Documentation for index.html

This document provides an overview of the code structure, key functions, and implementation details of the `index.html` file for my portfolio.

---

## 1. HTML Structure

- **`<head>` section**  
  - Metadata: charset, viewport, title, and favicon link (`BM.ico`).  
  - Embedded CSS within `<style>`:  
    - Custom properties for theme colors.  
    - Layout styles for body, navigation, sections, and responsive breakpoints.  
    - Animations: typing keys, fade-in effects, and Matrix canvas container sizing.

- **`<body>` section**  
  - **`<canvas id="matrix">`**  
    - Full-screen background for Matrix rain effect.
  - **`<nav>`**  
    - Logo/title link.  
    - Language toggle button (`#lang-toggle`) showing flag icons.  
    - Navigation links anchored to internal sections.
  - **`<header>`**  
    - Profile image (`Boris.jpg`), main heading (`<h1>`).  
    - Subheading with dynamic typing effect.
  - **Content Sections**  
    - **About**: paragraph text in two languages.  
    - **Skills**: skill cards (`.skill-card`) with hover/touch reveal bars.  
    - **Projects**: project entries with titles and descriptions.
  - **`<footer>`**  
    - Social links and contact information.

- **Script Inclusions**  
  - All JavaScript is inline within a `<script>` at the end of `<body>`.

---

## 2. Matrix Canvas Animation

- **Initialization**  
  - Fetches the `<canvas>` element via `document.getElementById("matrix")`.  
  - Sets canvas dimensions to `window.innerWidth` and `window.innerHeight`.  
  - Defines `fontSize`, calculates `columns` = `width/fontSize`, and initializes an array `drops[]` with all zeros.

- **`draw()` Function**  
  - Fills the canvas with a semi-transparent black (`ctx.fillStyle = "rgba(0, 0, 0, 0.05)"`) to create trailing effect.  
  - Sets text style (`"#0F0"`, monospace).  
  - Iterates over each column: draws random characters from a string of Katakana symbols at positions determined by `drops[i]`.  
  - Increments drop positions or resets them at random when they move past the bottom.

- **Animation Loop**  
  - Utilizes `setInterval(draw, 33)` to achieve ~30fps effect.  
  - Adds a `resize` event listener to recalculate dimensions and reinitialize `drops`.

---

## 3. Language Toggle

- **Elements**  
  - Button `#lang-toggle` containing two `<img>` elements for English (`us.svg`) and German (`at.svg`).

- **Implementation**  
  - Reads `localStorage.lang` to initialize page language (`"en"` or `"de"`).  
  - Saves user selection back to `localStorage` on toggle click.  
  - Toggles visibility of elements with the `lang` attribute: shows only those matching `lang="${currentLang}"`.

---

## 4. Typing Animations

- **Subtitle Typing**  
  - Targets `<h2>` text content, splits into characters.  
  - Uses `setTimeout` in a loop to append one character at a time with a 100ms delay.

- **Terminal Command Typing**  
  - Similar approach for `<p class="terminal">` elements.  
  - Reveals lines of pseudo-command text sequentially.

---

## 5. Skill Cards Interaction

- **Structure**  
  - Each skill is a `.skill-card` containing a `.bar` with `.bar-fill`.

- **Behavior**  
  - On `mouseover` (desktop) or `touchstart` (mobile):  
    - Reads `data-level` attribute (e.g., "80%", "70%").  
    - Animates `.bar-fill` width to that percentage.  
  - On `mouseout` / `touchend`: resets fill to 0%.

---

## 6. Event Listeners & Initialization

- **`DOMContentLoaded`**  
  - Ensures all DOM elements are available before initialization.

- **Window Events**  
  - `resize` for canvas.  
  - `DOMContentLoaded` for language setup, typing effects, and skill listeners.

---

## 7. Customization Points

- **Colors and Fonts**  
  - CSS variables at top of `<style>`: adjust `--bg-color`, `--accent-color`, etc.  
  - `font-family` selectable in `body`.

- **Animation Speeds**  
  - Modify intervals in `setInterval(draw, 33)` or typing delays.

- **Add/Remove Skills & Projects**  
  - Extend HTML sections; ensure `data-level` attributes match new skills.

---

## 8. Performance Considerations

- **Canvas Redraw**  
  - Uses a full-canvas clear every frame with alpha; acceptable for modern GPUs.  
  - Could switch to `requestAnimationFrame` for optimized repaint alignment.

- **Event Throttling**  
  - For high-frequency events (e.g., `mousemove`), consider debouncing or throttling.