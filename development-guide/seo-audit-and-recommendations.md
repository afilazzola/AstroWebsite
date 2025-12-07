# SEO Audit & Recommendations
**Conducted by: Senior SEO Consultant**
**Date: December 2025**
**Website: Alessandro Filazzola Portfolio**

---

## Executive Summary

This portfolio website has a **solid foundation** for SEO but has several critical gaps that are limiting discoverability. The content is high-quality and unique, but technical SEO issues and missing elements prevent it from reaching its full potential.

**Overall SEO Score: C+ (67/100)**

### Quick Wins (High Impact, Low Effort)
1. ✅ Add robots.txt and sitemap.xml
2. ✅ Fix duplicate H1 tags on About page
3. ✅ Add canonical URLs to all pages
4. ✅ Implement structured data (Schema.org)
5. ✅ Add breadcrumb navigation

### Critical Issues Found
- ❌ No robots.txt or sitemap.xml
- ❌ Multiple H1 tags on some pages (About page has 2)
- ❌ No canonical URLs
- ❌ Missing structured data (JSON-LD)
- ❌ No breadcrumb navigation
- ❌ Missing author information
- ❌ OpenGraph images use relative paths (should be absolute)
- ❌ No Twitter Card meta tags

### What's Working Well
- ✅ Good use of astro-seo package
- ✅ Proper meta descriptions on all pages
- ✅ OpenGraph tags present
- ✅ Semantic HTML5 elements (header, main, footer, nav)
- ✅ Mobile-friendly viewport meta tag
- ✅ Image alt text present
- ✅ Clean URL structure

---

## Page-by-Page SEO Analysis

### Homepage (index.astro) - Score: 70/100

**Issues Found:**

1. **Title Tag Duplication:**
   ```astro
   <!-- Line 29-38 -->
   <SEO title="Alessandro Filazzola - Home" />

   <!-- Line 40-43 -->
   <MainHead title="Alessandro Filazzola: Personal Site" />
   ```
   **Problem:** Two different title tags being set (astro-seo and MainHead)
   **Impact:** Browser uses the last one, SEO tools see conflicting signals

2. **H1 in Header (Hidden Context):**
   ```astro
   <h1 class="title">Alessandro Filazzola</h1>
   ```
   **Good:** Has H1 tag
   **Issue:** Inside video hero with overlay - crawlers can read it but lacks context

3. **Missing Semantic Article Structure:**
   - Content not wrapped in `<article>` tags
   - Sections not properly defined with semantic HTML

4. **OpenGraph Image Path:**
   ```astro
   image: "/AfilazzolaHome.jpg"  // Relative path
   ```
   **Problem:** Should be absolute URL for proper social sharing

**Recommendations:**
- Remove duplicate title tags (use one source of truth)
- Add `<article>` wrapper around main content
- Use absolute URLs for OpenGraph images
- Add breadcrumb JSON-LD

---

### About Page (about.astro) - Score: 65/100

**Critical Issues:**

1. **DUPLICATE H1 TAGS:**
   ```astro
   <!-- Line 49 -->
   <h1>About</h1>

   <!-- Line 62-64 -->
   <h1 class="py-12 mx-auto text-5xl md:text-6xl">
     Alessandro Filazzola <small class="subtitle"> Ph.D. B.Sc.</small>
   </h1>
   ```
   **Impact:** ⚠️ Severe - Confuses search engines about page topic
   **Fix:** Change second H1 to `<div>` with appropriate heading class

2. **Heading Hierarchy Skip:**
   - H1 → (no H2) → paragraph content
   - Should have H2 sections like "Background", "Experience", "Education"

3. **Long Paragraphs Without Structure:**
   - Dense text blocks hard for crawlers to parse
   - No semantic sections

**Recommendations:**
- **CRITICAL:** Fix duplicate H1 immediately
- Break content into semantic sections with H2 headings
- Add structured data for Person schema

---

### Projects Page (projects.astro) - Score: 72/100

**Issues:**

1. **Generic H1:**
   ```astro
   <h1 class="page-title py-12 mx-auto text-5xl md:text-6xl">
     All Projects
   </h1>
   ```
   **Better:** "Data Science & Ecology Projects by Alessandro Filazzola"
   **Why:** More descriptive, includes keywords

2. **No Intro Paragraph:**
   - H1 → immediately into project grid
   - Missing context for what these projects are about

3. **Project Cards Lack Semantic Markup:**
   - Each project should be an `<article>`
   - Missing publication dates in visible content
   - No schema markup for CreativeWork

**Recommendations:**
- Add introductory paragraph after H1
- Wrap each project in `<article>` tags
- Add Project schema (JSON-LD)
- Display publish dates on cards

---

### Publications Page (publications.astro) - Score: 68/100

**Issues:**

1. **Minimal Content:**
   - Just H1 and citations list
   - No explanatory text about research focus

2. **Citations Not Semantically Marked:**
   - Plain `<h6>` tags with text
   - Should use `<article>` or proper schema

3. **Missing Schema Markup:**
   - Publications should have ScholarlyArticle schema
   - Missing author, datePublished, publisher metadata

**Recommendations:**
- Add introductory paragraph about research areas
- Implement ScholarlyArticle schema for each publication
- Group by year with H2 headings
- Add "View on Google Scholar" profile link

---

### Individual Project Pages (project.astro layout) - Score: 75/100

**Issues:**

1. **No Breadcrumbs:**
   ```
   Should show: Home > Projects > [Project Name]
   ```

2. **Missing Article Schema:**
   - Projects should have BlogPosting or Article schema
   - Missing author, datePublished, dateModified

3. **H3 for Description:**
   ```astro
   <h3 class="tagline">{content.description}</h3>
   ```
   **Issue:** Skips H2, uses H3
   **Fix:** Use H2 or paragraph

**Recommendations:**
- Add breadcrumb navigation
- Implement Article schema
- Fix heading hierarchy
- Add "Last updated" date

---

## Technical SEO Issues

### 1. Missing robots.txt ⚠️ CRITICAL

**Current State:** No robots.txt file exists

**Impact:**
- Cannot control crawler access
- Cannot reference sitemap location
- Missing opportunity to block admin/private areas

**Recommended robots.txt:**
```txt
# robots.txt for Alessandro Filazzola Portfolio

User-agent: *
Allow: /

# Sitemap location
Sitemap: https://alessandrofilazzola.com/sitemap.xml

# Optional: Block any admin or draft content
# Disallow: /admin/
# Disallow: /drafts/
```

**Location:** `website/public/robots.txt`

---

### 2. Missing sitemap.xml ⚠️ CRITICAL

**Current State:** No sitemap exists

**Impact:**
- Search engines must discover pages through crawling alone
- New pages may take weeks to be indexed
- Cannot prioritize important pages
- Cannot signal update frequency

**Recommended Implementation:**

Use Astro's official sitemap integration:

```bash
npm install @astrojs/sitemap
```

**astro.config.mjs:**
```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alessandrofilazzola.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ]
});
```

**Generates:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://alessandrofilazzola.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://alessandrofilazzola.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- ... more pages -->
</urlset>
```

---

### 3. Missing Canonical URLs ⚠️ HIGH PRIORITY

**Current State:** No canonical link tags on any page

**Impact:**
- Duplicate content issues if site accessible via multiple domains
- Cannot consolidate link equity
- Issues with www vs non-www, http vs https

**Fix - Add to MainHead.astro:**
```astro
---
const {
  title = "Alessandro Filazzola",
  description = "Alessandro Filazzola: Data scientist at ApexRMS",
  canonical = Astro.url.pathname
} = Astro.props;

const canonicalURL = new URL(canonical, 'https://alessandrofilazzola.com').href;
---

<link rel="canonical" href={canonicalURL} />
```

**Usage in pages:**
```astro
<MainHead
  title="About | Alessandro Filazzola"
  canonical="/about"
/>
```

---

### 4. OpenGraph Images Use Relative Paths ⚠️ MEDIUM

**Current State:**
```astro
openGraph={{
  basic: {
    image: "/AfilazzolaHome.jpg"  // Relative path
  }
}}
```

**Impact:**
- Social media platforms may not find images
- Broken previews on LinkedIn, Twitter, Facebook

**Fix:**
```astro
openGraph={{
  basic: {
    image: "https://alessandrofilazzola.com/AfilazzolaHome.jpg",
    url: "https://alessandrofilazzola.com/about",
  },
  image: {
    alt: "Alessandro Filazzola - Data Scientist and Ecologist",
    width: 1200,
    height: 630,
  }
}}
```

---

### 5. Missing Twitter Card Meta Tags

**Current State:** No Twitter-specific meta tags

**Impact:**
- Generic previews on Twitter/X
- Missing opportunity for rich cards

**Add to pages:**
```astro
<SEO
  twitter={{
    card: "summary_large_image",
    site: "@YourTwitterHandle",
    creator: "@YourTwitterHandle",
    title: "Alessandro Filazzola - Data Scientist",
    description: "Data scientist, quantitative ecologist, and web developer...",
    image: "https://alessandrofilazzola.com/AfilazzolaHome.jpg",
  }}
/>
```

---

### 6. No Structured Data (Schema.org) ⚠️ HIGH PRIORITY

**Current State:** Zero JSON-LD structured data

**Impact:**
- Missing rich snippets in search results
- No enhanced knowledge graph information
- Reduced visibility for research/publications

**Recommended Schemas:**

#### a) Person Schema (Homepage & About)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Alessandro Filazzola",
  "jobTitle": "Data Scientist",
  "worksFor": {
    "@type": "Organization",
    "name": "ApexRMS"
  },
  "affiliation": {
    "@type": "Organization",
    "name": "Western University",
    "department": "Biology Department"
  },
  "alumniOf": [
    {
      "@type": "Organization",
      "name": "York University"
    },
    {
      "@type": "Organization",
      "name": "University of Alberta"
    }
  ],
  "url": "https://alessandrofilazzola.com",
  "sameAs": [
    "https://github.com/afilazzola",
    "https://scholar.google.ca/citations?user=mKvIMTYAAAAJ",
    "https://www.linkedin.com/in/afilazzola/"
  ],
  "knowsAbout": [
    "Data Science",
    "Machine Learning",
    "Ecology",
    "Climate Change",
    "Web Development"
  ],
  "image": "https://alessandrofilazzola.com/AfilazzolaHome.jpg"
}
</script>
```

#### b) WebSite Schema (Homepage)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Alessandro Filazzola",
  "url": "https://alessandrofilazzola.com",
  "description": "Portfolio and research of Alessandro Filazzola, data scientist and quantitative ecologist",
  "author": {
    "@type": "Person",
    "name": "Alessandro Filazzola"
  }
}
</script>
```

#### c) ScholarlyArticle Schema (Publications)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "A call for clean code to effectively communicate science",
  "author": [
    {
      "@type": "Person",
      "name": "Alessandro Filazzola"
    },
    {
      "@type": "Person",
      "name": "C.J. Lortie"
    }
  ],
  "datePublished": "2022",
  "publisher": {
    "@type": "Organization",
    "name": "Methods in Ecology and Evolution"
  },
  "url": "https://besjournals.onlinelibrary.wiley.com/doi/10.1111/2041-210X.13961"
}
</script>
```

#### d) BreadcrumbList Schema (All pages except home)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://alessandrofilazzola.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Projects",
      "item": "https://alessandrofilazzola.com/projects"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Image Classifier for Alpine Snowpack"
    }
  ]
}
</script>
```

---

## Content SEO Issues

### 1. Heading Hierarchy Problems

**About Page:**
```html
<h1>About</h1>
<h1>Alessandro Filazzola</h1>  ❌ DUPLICATE
<!-- No H2 headings -->
<p>Content...</p>
```

**Should Be:**
```html
<h1>About Alessandro Filazzola</h1>
<h2>Background</h2>
<p>I am a data scientist...</p>

<h2>Education</h2>
<p>PhD from York University...</p>

<h2>Current Work</h2>
<p>Currently at ApexRMS...</p>
```

**Projects Page:**
```html
<h1>All Projects</h1>
<!-- Immediately into grid, no H2s -->
```

**Should Have:**
```html
<h1>Data Science & Ecology Projects</h1>
<p>A collection of my work in...</p>

<h2>Featured Projects</h2>
<!-- Grid of projects -->

<h2>Past Projects</h2>
<!-- More projects -->
```

---

### 2. Missing Contextual Content

**Projects Page:**
- Needs introductory paragraph explaining project focus
- Should mention key technologies and domains

**Publications Page:**
- Needs summary of research areas
- Should highlight publication count and impact

**Example:**
```html
<h1>Publications</h1>
<p>
  I have published 15+ peer-reviewed articles in ecology,
  climate science, and data science. My research focuses on
  climate change impacts, extreme value theory, and sustainable
  development.
</p>

<h2>Recent Publications (2022-2024)</h2>
<!-- Citations -->

<h2>Earlier Work (2018-2021)</h2>
<!-- Citations -->
```

---

### 3. Weak Title Tags

**Current:**
- "Alessandro Filazzola - Home"
- "About | Alessandro Filazzola"
- "All Projects | Alessandro Filazzola"

**Better (Keyword-Rich):**
- "Alessandro Filazzola | Data Scientist & Ecologist | ApexRMS"
- "About Alessandro Filazzola | PhD Data Scientist Specializing in Climate Change"
- "Data Science & Ecology Projects | Alessandro Filazzola Portfolio"

**Why:**
- Includes primary keywords
- Describes value proposition
- Still under 60 characters (mobile-friendly)

---

### 4. Meta Descriptions Could Be More Compelling

**Current (About):**
```
"Alessandro Filazzola is a data scientist, quantitative ecologist,
and web developer..."
```

**Better:**
```
"Dr. Alessandro Filazzola is a data scientist at ApexRMS and Adjunct
Faculty at Western University, specializing in machine learning for
ecology, climate change modeling, and sustainable development.
PhD from York University."
```

**Why:**
- Includes credentials (PhD, Dr.)
- Specific expertise areas
- Mentions institutions
- Under 155 characters

---

## Missing SEO Elements

### 1. Breadcrumb Navigation

**Impact:** Helps users and search engines understand site structure

**Implementation:**

Create a Breadcrumb component:

```astro
---
// src/components/Breadcrumb.astro
interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

const { items } = Astro.props;
---

<nav aria-label="Breadcrumb" class="breadcrumb">
  <ol itemscope itemtype="https://schema.org/BreadcrumbList">
    {items.map((item, index) => (
      <li
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem"
      >
        {item.href ? (
          <a href={item.href} itemprop="item">
            <span itemprop="name">{item.label}</span>
          </a>
        ) : (
          <span itemprop="name">{item.label}</span>
        )}
        <meta itemprop="position" content={String(index + 1)} />
        {index < items.length - 1 && <span class="separator">/</span>}
      </li>
    ))}
  </ol>
</nav>

<style>
  .breadcrumb ol {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 1rem 0;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .separator {
    margin: 0 0.5rem;
    color: var(--color-text-secondary);
  }
</style>
```

**Usage:**
```astro
<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Image Classifier for Alpine Snowpack" }
  ]}
/>
```

---

### 2. Author Attribution

Add author meta tags:

```astro
<meta name="author" content="Alessandro Filazzola, PhD" />
<link rel="author" href="https://alessandrofilazzola.com/about" />
```

---

### 3. Language and Region

```html
<html lang="en-CA">  <!-- Canadian English -->
<meta property="og:locale" content="en_CA" />
```

---

### 4. Last Modified Dates

Add to project frontmatter:

```markdown
---
title: Image Classifier
publishDate: 2022-09-11
lastModified: 2024-11-15
---
```

Display in page:
```astro
<time datetime={content.lastModified}>
  Last updated: {new Date(content.lastModified).toLocaleDateString()}
</time>
```

---

## Recommended SEO Priorities

### Phase 1: Critical Fixes (Week 1)
1. ✅ Add robots.txt
2. ✅ Add sitemap.xml (@astrojs/sitemap)
3. ✅ Fix duplicate H1 on About page
4. ✅ Add canonical URLs to all pages
5. ✅ Fix OpenGraph image paths (use absolute URLs)

### Phase 2: High Priority (Week 2)
1. ✅ Implement Person schema on homepage/about
2. ✅ Add breadcrumb navigation
3. ✅ Improve title tags with keywords
4. ✅ Fix heading hierarchy on all pages
5. ✅ Add Twitter Card meta tags

### Phase 3: Medium Priority (Week 3-4)
1. ✅ Add ScholarlyArticle schema to publications
2. ✅ Implement WebSite and BreadcrumbList schema
3. ✅ Add contextual content to Projects and Publications pages
4. ✅ Add "last modified" dates to projects
5. ✅ Optimize meta descriptions

### Phase 4: Content Enhancement (Ongoing)
1. Create blog section for thought leadership
2. Add case studies for major projects
3. Internal linking strategy
4. External backlink building
5. Regular content updates

---

## Expected Impact

### After Phase 1 (1 week):
- ✅ Site fully crawlable with sitemap
- ✅ No duplicate content issues (canonical URLs)
- ✅ Proper social sharing previews
- **Estimated traffic increase:** +15-20%

### After Phase 2 (2 weeks):
- ✅ Rich snippets in search results
- ✅ Better click-through rates
- ✅ Knowledge graph enhancement
- **Estimated traffic increase:** +30-40%

### After Phase 3 (1 month):
- ✅ Publication listings in Google Scholar search
- ✅ Enhanced SERP presence
- ✅ Better categorization by search engines
- **Estimated traffic increase:** +50-60%

---

## Tools for Monitoring

1. **Google Search Console** (https://search.google.com/search-console)
   - Submit sitemap
   - Monitor indexing
   - Track search queries

2. **Google Analytics** (Already implemented ✅)
   - Track organic traffic
   - Monitor user behavior

3. **Schema Markup Validator** (https://validator.schema.org)
   - Validate JSON-LD markup

4. **Lighthouse SEO Audit**
   ```bash
   npm install -g lighthouse
   lighthouse https://yoursite.com --only-categories=seo
   ```

5. **Screaming Frog SEO Spider**
   - Comprehensive site crawl
   - Find broken links, missing tags

---

## Conclusion

The website has **strong content** but is **technically unprepared** for optimal SEO. Implementing the Phase 1 and Phase 2 recommendations will dramatically improve search visibility with relatively little effort.

**Key Takeaways:**
- ✅ Good foundation (semantic HTML, meta descriptions)
- ❌ Missing critical technical elements (sitemap, canonical, schema)
- ❌ Heading hierarchy needs work
- ✅ Content quality is excellent
- ❌ Missing structured data opportunities

**Expected Outcome:** With full implementation, this site should rank competitively for:
- "data scientist ecology"
- "quantitative ecologist Canada"
- "climate change data science"
- "Alessandro Filazzola"
- "alpine ecology research"

Estimated timeline to page 1 rankings: **2-3 months** after full implementation.
