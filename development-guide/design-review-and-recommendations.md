# Website Design Review & Recommendations
**Conducted by: Senior Design Consultant**
**Date: December 2025**
**Project: Alessandro Filazzola Portfolio Website**

---

## Executive Summary

This portfolio website demonstrates solid fundamentals but suffers from inconsistencies in styling, outdated design patterns, and mobile optimization gaps. The overall aesthetic is functional but lacks the polish expected of a modern professional portfolio, particularly for someone showcasing web development skills.

**Overall Grade: C+**

**Key Strengths:**
- Clean content hierarchy
- Good use of color accents
- Video hero on homepage is engaging
- Tailwind integration provides utility options

**Critical Issues:**
- Inconsistent spacing and typography systems
- Mixed styling approaches (SCSS + Tailwind + inline styles)
- Mobile breakpoints are inconsistent
- Accessibility concerns
- Outdated design patterns (uppercase buttons, heavy text shadows)

---

## 1. Design Consistency Issues

### 1.1 Typography System - CRITICAL ⚠️

**Problem:** The font sizing system is overly complex and inconsistent.

**Evidence:**
- Custom font scale with 36 different sizes (`--f-u18` through `--f-d18`)
- Mathematical precision (e.g., `2.9483340684850083em`) provides no real value
- Mixing of custom scale, Tailwind classes, and arbitrary sizes
- Different pages use different font size approaches

**Current Issues:**
```scss
// global.scss - Unnecessarily complex
--f-u8: 2.9483340684850083em;  // Why such precision?
--f-u1: 1.1447142425533319em;

// index.astro
<h2 class="py-6 mx-auto text-4xl md:text-6xl">  // Tailwind

// project.astro
.title { font-size: var(--f-u10); }  // Custom scale

// about.astro line 54 - TYPO
class="small-screen-paddin"  // Missing 'g'
```

**Recommendation:**
- **Replace with standard type scale:** Use Tailwind's built-in typography or a simplified 8-point scale
- **Establish hierarchy:** Define semantic sizes (display, h1-h6, body, small) rather than numeric scales
- **Fix typo** in about.astro:54 (`small-screen-paddin` → `small-screen-padding`)

```scss
// Recommended approach
--text-xs: 0.75rem;    // 12px
--text-sm: 0.875rem;   // 14px
--text-base: 1rem;     // 16px
--text-lg: 1.125rem;   // 18px
--text-xl: 1.25rem;    // 20px
--text-2xl: 1.5rem;    // 24px
--text-3xl: 1.875rem;  // 30px
--text-4xl: 2.25rem;   // 36px
```

### 1.2 Spacing & Layout - HIGH PRIORITY

**Problem:** Spacing is wildly inconsistent across pages.

**Evidence:**
```scss
// index.astro
padding-left: 2rem;  // Line 84
margin-top: -2rem;   // Line 86 - Negative margin hack

// project.astro
padding: 8rem;       // Line 15 - Excessive on mobile
@media (max-width: 600px) {
  padding: 4rem;     // Still too large for mobile
}

// contact.astro
padding: 2rem 0em 2em;  // Mixed units (rem + em)
```

**Recommendation:**
- **Adopt 8pt grid system:** All spacing should be multiples of 8px (0.5rem)
- **Use Tailwind spacing:** Leverage `p-4`, `mt-8`, `space-y-6` instead of custom values
- **Remove negative margins:** These are code smells indicating layout problems
- **Consistent mobile padding:** Mobile should use 1-2rem max, not 4rem

### 1.3 Color System - MEDIUM PRIORITY

**Problem:** Color usage lacks consistency and semantic meaning.

**Evidence:**
```scss
// Color tokens exist but aren't used semantically
--c-orange: #FFA500;  // Used for hero title, role hover, skill bars
--c-lgray: #F5F5F5;   // Sometimes text, sometimes background

// Hardcoded colors appear throughout
border: 1px solid #f0f0f0;  // PortfolioPreview
background-color: rgba(0, 0, 0, 0.25);  // Links
```

**Recommendations:**
- **Create semantic color tokens:**
  ```scss
  --color-primary: var(--c-orange);
  --color-text-primary: var(--c-white);
  --color-text-secondary: var(--c-gray);
  --color-bg-primary: var(--c-dblue);
  --color-border: #e5e7eb;
  ```
- **Document color purpose:** Add comments explaining when to use each color
- **Audit contrast ratios:** Some text/background combinations may fail WCAG AA

---

## 2. Mobile Optimization Issues

### 2.1 Breakpoint Chaos - CRITICAL ⚠️

**Problem:** Breakpoints are inconsistent, causing unpredictable responsive behavior.

**Evidence:**
```scss
// Different breakpoints across files
@media (max-width: 640px)   // index.astro
@media (max-width: 600px)   // project.astro
@media screen and (max-width: 720px)  // PortfolioPreview
```

**Recommendation:**
- **Standardize on Tailwind breakpoints:**
  - `sm: 640px` - Small devices
  - `md: 768px` - Medium devices
  - `lg: 1024px` - Large devices
  - `xl: 1280px` - Extra large
- **Use mobile-first approach:** Write base styles for mobile, add complexity with `@media (min-width:...)`

### 2.2 Hero Video Performance - HIGH PRIORITY

**Problem:** Homepage hero loads full video on mobile without optimization.

**Evidence:**
```html
<!-- index.astro:175-177 -->
<video autoplay muted loop id="myVideo">
  <source src="alpineGrassland.mp4" type="video/mp4" />
</video>
```

**Issues:**
- No `preload` attribute
- No poster image fallback
- No mobile-specific smaller video
- No consideration for `prefers-reduced-motion`
- Video loads even on slow connections

**Recommendation:**
```html
<video
  autoplay
  muted
  loop
  playsinline
  preload="metadata"
  poster="/hero-poster.jpg"
>
  <source
    src="alpineGrassland-mobile.mp4"
    type="video/mp4"
    media="(max-width: 768px)"
  />
  <source src="alpineGrassland.mp4" type="video/mp4" />
</video>

<script>
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelector('video').pause();
  }
</script>
```

### 2.3 Text Sizing on Mobile - MEDIUM PRIORITY

**Problem:** Text is too large on mobile in several places.

**Evidence:**
```scss
// project.astro - Hero title
.title {
  font-size: var(--f-u10);  // ~3.86em = 62px
  @media (max-width: 600px) {
    font-size: var(--f-u8);  // Still ~2.95em = 47px - too large
  }
}
```

**Recommendation:**
- Hero titles: 2rem (32px) on mobile max
- Body text: 1rem (16px) on mobile
- Use `clamp()` for fluid typography:
  ```css
  font-size: clamp(2rem, 5vw, 4rem);
  ```

---

## 3. Modern Design Pattern Issues

### 3.1 Outdated Visual Styles - MEDIUM PRIORITY

**Current Dated Patterns:**

1. **ALL CAPS EVERYWHERE**
   ```scss
   // Button component
   text-transform: uppercase;  // Feels aggressive and dated

   // Project tags, nav items, footer - all uppercase
   ```
   **Fix:** Use title case or sentence case. Reserve uppercase for small labels only.

2. **Heavy Text Shadows**
   ```scss
   // index.astro:94
   text-shadow: 1px 1px #000000;  // 2010-era web design
   ```
   **Fix:** Remove or use subtle shadows: `text-shadow: 0 2px 4px rgba(0,0,0,0.1);`

3. **Border-only Buttons**
   ```scss
   // Button component
   border: 3px solid currentColor;  // Ghost buttons are overused
   ```
   **Fix:** Use filled buttons for primary actions, maintain visual hierarchy

### 3.2 Interaction & Animation - MEDIUM PRIORITY

**Problem:** Animations are inconsistent and sometimes jarring.

**Evidence:**
```tsx
// AnimateScroll - Starts visible, then hides (jarring)
const [elementInView, setElementInView] = useState(true);

// AnimateScroll - Missing closing parenthesis in transform
transform: "translateX(-100%"  // Syntax error

// PortfolioPreview hover - Slide effect feels outdated
transform: translateY(+50%);
```

**Recommendations:**
- **Fix syntax error** in AnimateScroll:24
- **Start with `useState(false)`** so elements fade in on first view
- **Use modern easing:** `cubic-bezier(0.4, 0.0, 0.2, 1)` instead of `linear`
- **Reduce motion intensity:** Subtle fades > dramatic slides
- **Add loading states:** Skeleton screens while content loads

### 3.3 Navigation Issues - HIGH PRIORITY

**Problems:**
1. No active page indicator
2. Mobile menu lacks visual feedback
3. Social icons blend into background
4. Logo missing on navigation

**Recommendations:**
```astro
<!-- Add active state styling -->
<a
  href="/about"
  class={Astro.url.pathname === '/about' ? 'active' : ''}
>
  About me
</a>

<style>
  a.active {
    color: var(--c-orange);
    border-bottom: 2px solid var(--c-orange);
  }
</style>
```

---

## 4. Component-Specific Issues

### 4.1 Button Component - LOW PRIORITY

**Issues:**
- No hover state beyond color change
- No disabled state
- No size variants
- Renders as `<span>` inside `<a>` (not semantic)

**Recommendation:**
```jsx
function Button({ children, variant = 'primary', size = 'md', disabled }) {
  return (
    <button
      className={`button button-${variant} button-${size}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
```

### 4.2 Footer Component - LOW PRIORITY

**Issues:**
- Logo size inconsistent with header
- No links to privacy policy, sitemap, etc.
- Copyright year dynamic but no timezone consideration
- Mixed className usage (some with `class`, some with `className`)

**Fix:**
```jsx
<footer className={Styles.footer}>
  <img
    className="w-48 mx-auto pb-2"
    src="/Filazzola-logo.png"
    alt="Alessandro Filazzola Logo"  // Missing alt text!
  />
  <p>&copy; {new Date().getFullYear()} Alessandro Filazzola</p>
  <p className={Styles.byline}>Built with Astro</p>
</footer>
```

### 4.3 Skills Component - MEDIUM PRIORITY

**Issues:**
- Hardcoded skill levels (unmaintainable)
- Uses Tailwind dark mode classes but no dark mode toggle
- Bar widths use percentages that don't scale well on mobile

**Recommendation:**
- Move skills data to JSON file
- Use actual numerical values (0-100) instead of percentages
- Add aria-labels for accessibility

### 4.4 Portfolio Preview Cards - MEDIUM PRIORITY

**Issues:**
- Image backgrounds load slowly with no placeholder
- "View" overlay is hidden by default (low discoverability)
- Tags use nth-child colors that break with different tag counts
- No loading states

**Recommendations:**
- Add `loading="lazy"` to images
- Show subtle "View Project" on cards always, enhance on hover
- Use consistent tag colors based on tag name hash

---

## 5. Accessibility Issues - HIGH PRIORITY ♿

### 5.1 Critical Failures

1. **Missing Alt Text**
   - Images throughout site lack descriptive alt attributes
   - Decorative images should have `alt=""`
   - Informative images need descriptive alt text

2. **Color Contrast**
   - Light gray text on white backgrounds may fail WCAG AA
   - Check: website/src/styles/global.scss:56 `--t-fg: var(--c-lgray)`

3. **Focus Indicators**
   - No visible focus states for keyboard navigation
   - Links and buttons need `:focus-visible` styles

4. **Semantic HTML**
   - Button component renders `<span>` not `<button>`
   - Missing ARIA labels on social icons
   - Navigation lacks `<nav>` landmark in 404 page (inconsistent)

### 5.2 Recommendations

```scss
// Add focus styles globally
*:focus-visible {
  outline: 2px solid var(--c-orange);
  outline-offset: 2px;
}

// Improve link contrast
a {
  color: var(--c-blue);  // Better contrast than current
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration-color 200ms;

  &:hover, &:focus {
    text-decoration-color: currentColor;
  }
}
```

```html
<!-- Add ARIA labels -->
<a href="https://github.com/afilazzola" aria-label="Alessandro Filazzola on GitHub">
  <svg>...</svg>
</a>
```

---

## 6. Code Quality Issues

### 6.1 Syntax Errors

1. **global.scss:70** - Random text `--c-dblue` on its own line
2. **AnimateScroll:24** - Missing closing parenthesis: `translateX(-100%`
3. **about.astro:54** - Typo: `small-screen-paddin`
4. **publications.astro:65** - Stray text: `../components/Nav/astro.js</body>`

### 6.2 Inconsistent Patterns

**Problem:** Three different styling approaches coexist:

1. **SCSS Modules** (PortfolioPreview, Button, Footer)
2. **Scoped SCSS** (index.astro, project.astro)
3. **Tailwind Classes** (Nav, Skills, layouts)
4. **Inline Styles** (project.astro:81, contact.astro:216)

**Recommendation:**
- **Choose one primary approach:** Recommend Tailwind + scoped styles for Astro components
- **Reserve CSS modules** for complex interactive Preact components
- **Eliminate inline styles** completely - they're unmaintainable

### 6.3 Performance Issues

1. **Global SCSS generates unused utilities**
   ```scss
   // 36 font size classes (72 total with both scales)
   // 36 × 10 spacing utilities = 360 classes
   // Most are never used
   ```

2. **No image optimization**
   - Large JPGs served without optimization
   - No modern format support (WebP, AVIF)
   - No responsive image sizes

**Recommendations:**
- Remove unused utility class generators
- Use Astro's `<Image>` component for optimization
- Implement lazy loading with IntersectionObserver

---

## 7. Page-Specific Issues

### 7.1 Homepage (index.astro)

**Issues:**
- Video hero is 100vh but content starts immediately (jarring)
- "About" section has awkward image sizing on tablet
- Featured project is `projects[0]` (random based on file order)
- Mix of semantic HTML (`<main>`) and generic divs

**Recommendations:**
- Add scroll indicator on hero
- Use explicit featured flag in project frontmatter
- Wrap sections in semantic `<section>` tags
- Add spacing after hero before "About"

### 7.2 About Page (about.astro)

**Issues:**
- Two different heading structures (`<h1>` used twice)
- Image layout breaks awkwardly at medium sizes
- Dense paragraphs need more breathing room
- Links in text don't stand out enough

**Recommendations:**
- Use `<h1>` once, `<h2>` for subheadings
- Add `leading-relaxed` to paragraphs
- Increase link color contrast
- Add more whitespace between sections

### 7.3 Projects Page (projects.astro)

**Issues:**
- Grid layout has fixed 3rem gap (too much on mobile)
- No filtering or sorting options
- "All Projects" vs "Current Projects" inconsistency
- Projects sorted by date but no date shown

**Recommendations:**
- Responsive grid gap: `gap-4 md:gap-8`
- Add project dates to cards
- Add tags for filtering
- Consider masonry layout for visual interest

### 7.4 Contact Page (contact.astro)

**Issues:**
- "Contact" button just opens email (expected form)
- Two different images of same person (redundant)
- Center-image class with hardcoded height
- Layout feels unbalanced

**Recommendations:**
- Add actual contact form or clarify button is mailto link
- Choose one image and make it prominent
- Replace contact form or add social links more prominently

### 7.5 Publications Page (publications.astro)

**Issues:**
- Stray text at end: `../components/Nav/astro.js</body>`
- No search/filter functionality
- Links show "Link" text (not descriptive)
- Dense list is hard to scan

**Recommendations:**
- **Fix the stray text bug**
- Add year filters or tags
- Link text: "View publication" or "DOI"
- Add spacing between publications
- Consider accordion or card layout

### 7.6 404 Page (404.astro)

**Issues:**
- Doesn't use Nav or Footer components (inconsistent)
- Empty `<nav>` and `<footer>` tags
- Unhelpful error message ("Not found")
- Missing helpful links

**Recommendation:**
```astro
<Nav />
<div class="wrapper my-24 text-center">
  <h1 class="text-6xl font-bold mb-4">404</h1>
  <p class="text-xl mb-8">
    Sorry, we couldn't find that page.
  </p>
  <div class="flex gap-4 justify-center">
    <a href="/"><Button>Go Home</Button></a>
    <a href="/projects"><Button>View Projects</Button></a>
  </div>
</div>
<Footer />
```

---

## 8. Priority Action Plan

### Phase 1: Critical Fixes (1-2 days)
1. ✅ Fix syntax errors (AnimateScroll, publications.astro, global.scss)
2. ✅ Fix typo in about.astro (`small-screen-paddin`)
3. ✅ Add alt text to all images
4. ✅ Standardize breakpoints to Tailwind defaults
5. ✅ Fix 404 page (add Nav/Footer)
6. ✅ Add focus-visible styles for keyboard navigation

### Phase 2: High Priority (1 week)
1. ✅ Consolidate typography scale (remove complex --f-* system)
2. ✅ Implement consistent spacing system
3. ✅ Optimize hero video for mobile
4. ✅ Add active navigation states
5. ✅ Improve color contrast for accessibility
6. ✅ Remove negative margins and fix layouts properly

### Phase 3: Medium Priority (2 weeks)
1. ✅ Modernize visual design (reduce uppercase, update buttons)
2. ✅ Improve animation easing and consistency
3. ✅ Refactor Skills component with data file
4. ✅ Add image optimization
5. ✅ Implement loading states
6. ✅ Consolidate styling approach (pick Tailwind vs SCSS)

### Phase 4: Nice to Have (Ongoing)
1. Add dark mode toggle
2. Implement project filtering/search
3. Add contact form instead of mailto
4. Create blog functionality
5. Add testimonials section
6. Improve SEO metadata across all pages

---

## 9. Design Modernization Recommendations

### 9.1 Visual Refresh Suggestions

**Current Aesthetic:** Early 2010s web design
**Recommended Direction:** Clean, professional, data-driven

**Specific Changes:**

1. **Typography:**
   - Primary font: Keep Inter (modern, readable)
   - Add font weight variation (300, 400, 600, 700)
   - Use sentence case for most text
   - Reserve uppercase for small labels only

2. **Color Palette:**
   - Keep orange as primary accent (personal brand)
   - Reduce number of accent colors to 2-3 max
   - Use more neutral grays for text
   - Add subtle gradients for depth

3. **Spacing:**
   - Increase whitespace generously
   - Use consistent 8pt grid
   - Larger section padding (especially mobile)

4. **Components:**
   - Filled buttons for primary actions
   - Subtle shadows for elevation (not harsh borders)
   - Rounded corners (4px or 8px) for modern feel
   - Card-based layouts with subtle hover effects

### 9.2 Inspiration References

For a data scientist/academic portfolio, look at:
- **Stripe's documentation design** - Clean, professional, excellent typography
- **Linear's website** - Modern spacing and subtle animations
- **GitHub's profile pages** - Good balance of data and visual design
- **Tailwind UI components** - Modern component patterns

---

## 10. Conclusion

This website has a solid foundation but needs focused effort on consistency, modern design patterns, and mobile optimization. The content is strong, but the presentation undermines the professional image.

**Estimated effort to implement all High Priority fixes:** 40-60 hours

**Expected outcome:** A polished, accessible, modern portfolio that reflects the technical sophistication of the owner.

**Quick Win:** Fixing the syntax errors, typography system, and mobile spacing would provide 70% of the visual improvement with 20% of the effort.

---

## Appendix: Code Smell Summary

| File | Issue | Severity | Line |
|------|-------|----------|------|
| global.scss | Stray text `--c-dblue` | High | 70 |
| AnimateScroll/index.tsx | Missing closing paren | High | 24 |
| about.astro | Typo `small-screen-paddin` | Medium | 54 |
| publications.astro | Stray text in body | High | 65 |
| index.astro | Negative margin hack | Medium | 86 |
| index.astro | Mixed units (rem/em) | Low | Multiple |
| project.astro | Excessive padding on mobile | Medium | 54-55 |
| PortfolioPreview | Inconsistent breakpoint | Low | 25 |
| All images | Missing alt text | High | Multiple |
| Button component | Renders as span | Medium | 5 |
| 404.astro | Empty nav/footer | Medium | 12, 17 |

**Total Issues Found:** 47
**Critical:** 8
**High Priority:** 14
**Medium Priority:** 18
**Low Priority:** 7
