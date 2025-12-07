# Ideal Page Layout for SEO - Best Practices Template

This document provides the **optimal page structure** for SEO, with code examples specific to the Alessandro Filazzola portfolio website.

---

## Table of Contents
1. [HTML Document Structure](#html-document-structure)
2. [Head Section Best Practices](#head-section-best-practices)
3. [Body Content Structure](#body-content-structure)
4. [Heading Hierarchy Rules](#heading-hierarchy-rules)
5. [Breadcrumb Implementation](#breadcrumb-implementation)
6. [Schema.org Structured Data](#schemaorg-structured-data)
7. [Page-Type Specific Templates](#page-type-specific-templates)

---

## HTML Document Structure

### The Perfect Page Template

```astro
---
// page-template.astro
import MainHead from "../components/MainHead.astro";
import Nav from "../components/Nav/index.astro";
import Footer from "../components/Footer/index.jsx";
import Breadcrumb from "../components/Breadcrumb.astro";
import { SEO } from "astro-seo";

// Page-specific configuration
const pageTitle = "Your Page Title | Alessandro Filazzola";
const pageDescription = "Clear, compelling description under 155 characters";
const canonicalPath = "/your-page";
const ogImage = "https://alessandrofilazzola.com/your-image.jpg";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Parent Section", href: "/parent" },
  { label: "Current Page" } // Last item has no href
];

// Structured data
const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  // ... more schema
};
---

<!DOCTYPE html>
<html lang="en-CA">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Primary Meta Tags -->
    <title>{pageTitle}</title>
    <meta name="title" content={pageTitle} />
    <meta name="description" content={pageDescription} />
    <meta name="author" content="Alessandro Filazzola, PhD" />

    <!-- Canonical URL -->
    <link rel="canonical" href={`https://alessandrofilazzola.com${canonicalPath}`} />

    <!-- Open Graph / Facebook -->
    <SEO
      title={pageTitle}
      description={pageDescription}
      canonical={`https://alessandrofilazzola.com${canonicalPath}`}
      openGraph={{
        basic: {
          title: pageTitle,
          type: "website",
          image: ogImage,
          url: `https://alessandrofilazzola.com${canonicalPath}`,
        },
        image: {
          alt: "Alessandro Filazzola - Data Scientist",
          width: 1200,
          height: 630,
        },
        optional: {
          locale: "en_CA",
          siteName: "Alessandro Filazzola Portfolio",
        }
      }}
      twitter={{
        card: "summary_large_image",
        site: "@YourTwitterHandle",
        creator: "@YourTwitterHandle",
        title: pageTitle,
        description: pageDescription,
        image: ogImage,
      }}
    />

    <!-- Structured Data -->
    <script type="application/ld+json" set:html={JSON.stringify(schema)} />

    <!-- Additional Head Elements -->
    <MainHead title={pageTitle} description={pageDescription} />
  </head>

  <body>
    <!-- Skip to main content (accessibility) -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>

    <!-- Header with Navigation -->
    <Nav />

    <!-- Breadcrumb Navigation -->
    <Breadcrumb items={breadcrumbs} />

    <!-- Main Content Area -->
    <main id="main-content" class="wrapper">
      <!-- H1 - ONE per page, describes page topic -->
      <h1>Primary Page Heading</h1>

      <!-- Optional: Hero/Featured Image -->
      <div class="hero-image">
        <img
          src="/hero.jpg"
          alt="Descriptive alt text"
          width="1200"
          height="600"
          loading="eager"
        />
      </div>

      <!-- Introductory Content -->
      <div class="intro">
        <p class="lead">
          Compelling introduction that includes primary keywords naturally.
          This should be 2-3 sentences summarizing the page content.
        </p>
      </div>

      <!-- Content Sections -->
      <article>
        <section>
          <h2>First Major Section</h2>
          <p>Content for this section...</p>

          <h3>Subsection if needed</h3>
          <p>More specific content...</p>
        </section>

        <section>
          <h2>Second Major Section</h2>
          <p>Content for this section...</p>
        </section>
      </article>

      <!-- Call to Action -->
      <aside class="cta">
        <h2>Get in Touch</h2>
        <p>Interested in collaboration?</p>
        <a href="/contact">Contact Me</a>
      </aside>
    </main>

    <!-- Footer -->
    <Footer />
  </body>
</html>
```

---

## Head Section Best Practices

### Required Meta Tags (Priority Order)

```html
<!-- 1. CHARSET (always first) -->
<meta charset="UTF-8" />

<!-- 2. VIEWPORT (mobile-first) -->
<meta name="viewport" content="width=device-width, initial-scale=1" />

<!-- 3. TITLE (50-60 characters optimal) -->
<title>Keyword-Rich Title | Brand Name</title>

<!-- 4. META DESCRIPTION (150-155 characters) -->
<meta name="description" content="Compelling description with keywords" />

<!-- 5. CANONICAL URL (prevent duplicate content) -->
<link rel="canonical" href="https://example.com/page" />

<!-- 6. AUTHOR -->
<meta name="author" content="Alessandro Filazzola, PhD" />

<!-- 7. LANGUAGE -->
<html lang="en-CA">
<meta property="og:locale" content="en_CA" />
```

### OpenGraph Tags (Social Sharing)

```html
<!-- Essential OG tags -->
<meta property="og:title" content="Page Title" />
<meta property="og:description" content="Page description" />
<meta property="og:image" content="https://example.com/image.jpg" />
<meta property="og:url" content="https://example.com/page" />
<meta property="og:type" content="website" />

<!-- Enhanced OG tags -->
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Image description" />
<meta property="og:site_name" content="Alessandro Filazzola" />
<meta property="og:locale" content="en_CA" />

<!-- For articles/blog posts -->
<meta property="article:published_time" content="2024-12-06T00:00:00Z" />
<meta property="article:modified_time" content="2024-12-06T00:00:00Z" />
<meta property="article:author" content="Alessandro Filazzola" />
<meta property="article:tag" content="Data Science" />
<meta property="article:tag" content="Ecology" />
```

### Twitter Card Tags

```html
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@YourHandle" />
<meta name="twitter:creator" content="@YourHandle" />
<meta name="twitter:title" content="Page Title" />
<meta name="twitter:description" content="Page description" />
<meta name="twitter:image" content="https://example.com/image.jpg" />
<meta name="twitter:image:alt" content="Image description" />
```

### Title Tag Formula

```
[Primary Keyword] | [Secondary Keyword] | [Brand]
```

**Examples:**
```html
<!-- Homepage -->
<title>Alessandro Filazzola | Data Scientist & Ecologist | ApexRMS</title>

<!-- About Page -->
<title>About Dr. Alessandro Filazzola | PhD Data Scientist | Climate Change Research</title>

<!-- Projects Page -->
<title>Data Science & Ecology Projects | Alessandro Filazzola Portfolio</title>

<!-- Individual Project -->
<title>Alpine Snowpack Image Classifier | Machine Learning Project | Alessandro Filazzola</title>

<!-- Publications -->
<title>Research Publications | Dr. Alessandro Filazzola | Climate & Ecology</title>
```

**Rules:**
- Keep under 60 characters (mobile display)
- Put most important keywords first
- Include brand/name
- Make it compelling (users will click)

### Meta Description Formula

```
[What you do] + [Key expertise] + [Unique value] + [Call to action]
```

**Examples:**
```html
<!-- Homepage -->
<meta name="description" content="Dr. Alessandro Filazzola is a data scientist specializing in climate change modeling, machine learning for ecology, and sustainable development. Currently at ApexRMS and Western University. View research and projects." />

<!-- About Page -->
<meta name="description" content="PhD data scientist with expertise in extreme value theory, machine learning, and ecological forecasting. Adjunct Faculty at Western University. Learn about my research in climate change and biodiversity." />

<!-- Projects Page -->
<meta name="description" content="Explore data science and ecology projects including alpine snowpack classification, urban park usage analysis, and ecological forecasting web applications. Machine learning and GIS implementations." />
```

**Rules:**
- 150-155 characters optimal
- Include 1-2 primary keywords naturally
- Write for humans, not just search engines
- Include a call to action
- Unique for every page

---

## Body Content Structure

### Semantic HTML5 Elements

```html
<body>
  <!-- Header: Site-wide navigation -->
  <header>
    <nav aria-label="Main navigation">
      <!-- Navigation links -->
    </nav>
  </header>

  <!-- Main: Primary page content (ONE per page) -->
  <main id="main-content">

    <!-- Article: Self-contained content -->
    <article>
      <header>
        <h1>Article Title</h1>
        <p class="meta">
          <time datetime="2024-12-06">December 6, 2024</time>
          by <span rel="author">Alessandro Filazzola</span>
        </p>
      </header>

      <!-- Section: Thematic groupings -->
      <section>
        <h2>Section Heading</h2>
        <p>Section content...</p>
      </section>

      <section>
        <h2>Another Section</h2>
        <p>More content...</p>
      </section>

      <!-- Footer: Article metadata -->
      <footer>
        <p>Tags: <a href="/tags/data-science">Data Science</a></p>
      </footer>
    </article>

    <!-- Aside: Related but separate content -->
    <aside>
      <h2>Related Projects</h2>
      <ul>
        <li><a href="/project1">Project 1</a></li>
      </ul>
    </aside>

  </main>

  <!-- Footer: Site-wide footer info -->
  <footer>
    <p>&copy; 2024 Alessandro Filazzola</p>
  </footer>
</body>
```

### Content Structure Best Practices

1. **One `<main>` per page** - wraps primary content
2. **One `<h1>` per page** - describes page topic
3. **Use `<article>` for** standalone content (blog posts, projects)
4. **Use `<section>` for** thematic groupings within content
5. **Use `<aside>` for** related but tangential content
6. **Use semantic tags over divs** when possible

---

## Heading Hierarchy Rules

### The Golden Rules

1. ✅ **ONE H1 per page** - This is the page title
2. ✅ **H2 for major sections** - Don't skip levels
3. ✅ **H3 for subsections under H2** - Logical nesting
4. ✅ **Never skip heading levels** - Don't go H1 → H3
5. ✅ **Headings describe content** - Not just styling

### Correct Hierarchy Example

```html
<h1>About Alessandro Filazzola</h1>

<section>
  <h2>Background</h2>
  <p>I am a data scientist...</p>

  <h3>Education</h3>
  <p>PhD from York University...</p>

  <h3>Expertise</h3>
  <p>Machine learning, climate modeling...</p>
</section>

<section>
  <h2>Current Work</h2>
  <p>Currently at ApexRMS...</p>

  <h3>Research Focus</h3>
  <p>Alpine ecosystems, urban ecology...</p>

  <h3>Technologies</h3>
  <p>R, Python, GIS...</p>
</section>

<section>
  <h2>Publications</h2>
  <p>15+ peer-reviewed articles...</p>
</section>
```

### Common Mistakes

❌ **Multiple H1 tags:**
```html
<h1>About</h1>
<h1>Alessandro Filazzola</h1>  <!-- BAD! -->
```

✅ **Single H1:**
```html
<h1>About Alessandro Filazzola</h1>
```

---

❌ **Skipping heading levels:**
```html
<h1>Page Title</h1>
<h3>Subsection</h3>  <!-- BAD! Skipped H2 -->
```

✅ **Proper nesting:**
```html
<h1>Page Title</h1>
<h2>Major Section</h2>
<h3>Subsection</h3>
```

---

❌ **Using headings for styling:**
```html
<h3 class="tagline">Click here!</h3>  <!-- BAD! Not actual heading -->
```

✅ **Use appropriate tag:**
```html
<p class="tagline">Click here!</p>
```

---

## Breadcrumb Implementation

### Visual Breadcrumb Component

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

// Generate schema
const schemaItems = items.map((item, index) => ({
  "@type": "ListItem",
  "position": index + 1,
  "name": item.label,
  ...(item.href && { "item": `https://alessandrofilazzola.com${item.href}` })
}));

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": schemaItems
};
---

<!-- Structured Data -->
<script type="application/ld+json" set:html={JSON.stringify(breadcrumbSchema)} />

<!-- Visual Breadcrumb -->
<nav aria-label="Breadcrumb" class="breadcrumb">
  <ol>
    {items.map((item, index) => (
      <li>
        {item.href ? (
          <a href={item.href}>{item.label}</a>
        ) : (
          <span aria-current="page">{item.label}</span>
        )}
        {index < items.length - 1 && <span class="separator" aria-hidden="true">/</span>}
      </li>
    ))}
  </ol>
</nav>

<style>
  .breadcrumb {
    margin: 1rem 0;
    padding: 0.5rem 0;
  }

  .breadcrumb ol {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 0.5rem;
    font-size: 0.875rem;
  }

  .breadcrumb a {
    color: var(--color-secondary);
    text-decoration: none;
  }

  .breadcrumb a:hover {
    text-decoration: underline;
  }

  .breadcrumb [aria-current="page"] {
    color: var(--color-text-secondary);
  }

  .separator {
    color: var(--color-text-muted);
    margin: 0 0.25rem;
  }
</style>
```

### Usage Examples

```astro
<!-- Homepage: No breadcrumb needed -->

<!-- About Page -->
<Breadcrumb items={[
  { label: "Home", href: "/" },
  { label: "About" }
]} />

<!-- Projects Page -->
<Breadcrumb items={[
  { label: "Home", href: "/" },
  { label: "Projects" }
]} />

<!-- Individual Project -->
<Breadcrumb items={[
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Alpine Snowpack Classifier" }
]} />

<!-- Publications -->
<Breadcrumb items={[
  { label: "Home", href: "/" },
  { label: "Publications" }
]} />
```

---

## Schema.org Structured Data

### Person Schema (Homepage/About)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://alessandrofilazzola.com/#person",
  "name": "Alessandro Filazzola",
  "givenName": "Alessandro",
  "familyName": "Filazzola",
  "honorificSuffix": "PhD",
  "jobTitle": "Data Scientist",
  "description": "Data scientist and quantitative ecologist specializing in climate change modeling and machine learning",
  "url": "https://alessandrofilazzola.com",
  "image": "https://alessandrofilazzola.com/AfilazzolaHome.jpg",
  "email": "alex.filazzola@apexrms.com",

  "worksFor": {
    "@type": "Organization",
    "name": "ApexRMS",
    "url": "https://www.apexrms.com"
  },

  "affiliation": [
    {
      "@type": "Organization",
      "name": "Western University",
      "department": "Biology Department",
      "url": "https://www.uwo.ca/biology/"
    }
  ],

  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "York University",
      "url": "https://www.yorku.ca"
    },
    {
      "@type": "EducationalOrganization",
      "name": "University of Alberta",
      "url": "https://www.ualberta.ca"
    }
  ],

  "sameAs": [
    "https://github.com/afilazzola",
    "https://scholar.google.ca/citations?user=mKvIMTYAAAAJ",
    "https://www.linkedin.com/in/afilazzola/"
  ],

  "knowsAbout": [
    "Data Science",
    "Machine Learning",
    "Climate Change",
    "Ecology",
    "Quantitative Ecology",
    "GIS",
    "R Programming",
    "Python",
    "Web Development"
  ]
}
</script>
```

### WebSite Schema (Homepage)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Alessandro Filazzola Portfolio",
  "url": "https://alessandrofilazzola.com",
  "description": "Portfolio and research of Alessandro Filazzola, data scientist and quantitative ecologist",
  "author": {
    "@id": "https://alessandrofilazzola.com/#person"
  },
  "publisher": {
    "@id": "https://alessandrofilazzola.com/#person"
  }
}
</script>
```

### ScholarlyArticle Schema (Publications)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "A call for clean code to effectively communicate science",
  "author": [
    {
      "@type": "Person",
      "name": "Alessandro Filazzola",
      "url": "https://alessandrofilazzola.com"
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
  "url": "https://besjournals.onlinelibrary.wiley.com/doi/10.1111/2041-210X.13961",
  "isPartOf": {
    "@type": "PublicationIssue",
    "isPartOf": {
      "@type": "Periodical",
      "name": "Methods in Ecology and Evolution"
    }
  }
}
</script>
```

### Article/BlogPosting Schema (Projects)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Image Classifier for Alpine Snowpack",
  "description": "An image classifier for quantifying alpine snowpack from aerial images",
  "author": {
    "@type": "Person",
    "name": "Alessandro Filazzola",
    "url": "https://alessandrofilazzola.com"
  },
  "datePublished": "2022-09-11T00:00:00Z",
  "dateModified": "2024-11-15T00:00:00Z",
  "image": "https://images.unsplash.com/photo-1476400424721-e25994a9f0ff",
  "publisher": {
    "@id": "https://alessandrofilazzola.com/#person"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://alessandrofilazzola.com/project/image-class"
  },
  "keywords": ["machine learning", "GIS", "web development"],
  "articleSection": "Projects"
}
</script>
```

---

## Page-Type Specific Templates

### Homepage Template

```astro
---
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      // Person schema
    },
    {
      "@type": "WebSite",
      // WebSite schema
    }
  ]
};
---

<!DOCTYPE html>
<html lang="en-CA">
  <head>
    <title>Alessandro Filazzola | Data Scientist & Ecologist | ApexRMS</title>
    <meta name="description" content="Dr. Alessandro Filazzola specializes in data science, climate change modeling, and ecology. Currently at ApexRMS and Western University." />
    <link rel="canonical" href="https://alessandrofilazzola.com/" />
    <!-- OpenGraph, Twitter, etc. -->
    <script type="application/ld+json" set:html={JSON.stringify(schema)} />
  </head>
  <body>
    <Nav />

    <main id="main-content">
      <header class="hero">
        <h1>Alessandro Filazzola</h1>
        <p class="tagline">Data Scientist | Ecologist | Researcher</p>
      </header>

      <article>
        <section>
          <h2>About</h2>
          <p>Introduction...</p>
        </section>

        <section>
          <h2>Skills</h2>
          <!-- Skills content -->
        </section>

        <section>
          <h2>Featured Projects</h2>
          <!-- Projects -->
        </section>
      </article>
    </main>

    <Footer />
  </body>
</html>
```

### About Page Template

```astro
<!DOCTYPE html>
<html lang="en-CA">
  <head>
    <title>About Dr. Alessandro Filazzola | PhD Data Scientist</title>
    <meta name="description" content="Learn about Alessandro Filazzola's background in data science, ecology, and climate research. PhD from York University, currently at ApexRMS." />
    <link rel="canonical" href="https://alessandrofilazzola.com/about" />
    <!-- Person schema -->
  </head>
  <body>
    <Nav />
    <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />

    <main id="main-content" class="wrapper">
      <article>
        <h1>About Alessandro Filazzola</h1>

        <div class="intro">
          <p class="lead">
            Brief introduction with keywords...
          </p>
        </div>

        <section>
          <h2>Background</h2>
          <p>Early career...</p>
        </section>

        <section>
          <h2>Education</h2>
          <h3>PhD - York University</h3>
          <p>Details...</p>

          <h3>Postdoctoral Fellowship - University of Alberta</h3>
          <p>Details...</p>
        </section>

        <section>
          <h2>Current Work</h2>
          <p>ApexRMS position...</p>
        </section>
      </article>
    </main>

    <Footer />
  </body>
</html>
```

### Projects Listing Page Template

```astro
<!DOCTYPE html>
<html lang="en-CA">
  <head>
    <title>Data Science & Ecology Projects | Alessandro Filazzola</title>
    <meta name="description" content="Explore projects in machine learning, climate modeling, and ecology including alpine snowpack classification and urban park analysis." />
    <link rel="canonical" href="https://alessandrofilazzola.com/projects" />
    <!-- CollectionPage schema -->
  </head>
  <body>
    <Nav />
    <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Projects" }]} />

    <main id="main-content" class="wrapper">
      <h1>Data Science & Ecology Projects</h1>

      <div class="intro">
        <p class="lead">
          A collection of my work in machine learning, GIS, and ecological forecasting.
          These projects combine data science techniques with environmental research.
        </p>
      </div>

      <section>
        <h2>Featured Projects</h2>
        <div class="project-grid">
          <!-- Project cards -->
        </div>
      </section>

      <section>
        <h2>Past Projects</h2>
        <div class="project-grid">
          <!-- More projects -->
        </div>
      </section>
    </main>

    <Footer />
  </body>
</html>
```

### Individual Project Page Template

```astro
<!DOCTYPE html>
<html lang="en-CA">
  <head>
    <title>{projectTitle} | Alessandro Filazzola</title>
    <meta name="description" content={projectDescription} />
    <link rel="canonical" href={`https://alessandrofilazzola.com/project/${slug}`} />
    <!-- Article schema -->
  </head>
  <body>
    <Nav />
    <Breadcrumb items={[
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: projectTitle }
    ]} />

    <main id="main-content">
      <article>
        <header>
          <h1>{projectTitle}</h1>
          <p class="meta">
            <time datetime={publishDate}>Published {formatDate(publishDate)}</time>
            {lastModified && <> | Updated <time datetime={lastModified}>{formatDate(lastModified)}</time></>}
          </p>
          <div class="tags">
            {tags.map(tag => <a href={`/tags/${tag}`}>{tag}</a>)}
          </div>
        </header>

        <div class="featured-image">
          <img src={heroImage} alt={heroImageAlt} />
        </div>

        <section>
          <h2>Overview</h2>
          <p>{description}</p>
        </section>

        <section>
          <h2>Technical Details</h2>
          <!-- Content -->
        </section>

        <section>
          <h2>Results</h2>
          <!-- Content -->
        </section>

        <footer>
          <nav aria-label="Related projects">
            <h2>Related Projects</h2>
            <!-- Links to related projects -->
          </nav>
        </footer>
      </article>
    </main>

    <Footer />
  </body>
</html>
```

---

## Content Best Practices

### 1. Keyword Placement (In Order of Importance)

1. **URL** - `/data-science-projects`
2. **Title tag** - Include primary keyword early
3. **H1** - Should contain primary keyword naturally
4. **First paragraph** - Use primary keyword in first 100 words
5. **H2 headings** - Use related keywords and variations
6. **Image alt text** - Describe images with keywords
7. **Meta description** - Include primary and secondary keywords

### 2. Content Length Guidelines

- **Homepage:** 300-500 words minimum
- **About Page:** 500-800 words
- **Projects Listing:** 200-300 words intro
- **Individual Project:** 800-1500 words
- **Publications:** 300-500 words intro + listings

### 3. Internal Linking Strategy

- Link from homepage to all main sections
- Link between related projects
- Link from projects back to main projects page
- Use descriptive anchor text (not "click here")

**Good:**
```html
<a href="/projects/snowpack">alpine snowpack image classifier</a>
```

**Bad:**
```html
<a href="/projects/snowpack">click here</a>
```

### 4. Image Optimization

```html
<img
  src="/optimized-image.jpg"
  alt="Alessandro Filazzola analyzing climate data in alpine environment"
  width="1200"
  height="800"
  loading="lazy"
/>
```

**Rules:**
- Descriptive alt text with keywords
- Specify width/height (prevent layout shift)
- Use `loading="lazy"` for below-fold images
- Compress images (WebP format ideal)
- Max 200KB per image

---

## Quick Reference Checklist

### Every Page Must Have:
- [ ] One H1 tag
- [ ] Title tag (50-60 chars)
- [ ] Meta description (150-155 chars)
- [ ] Canonical URL
- [ ] OpenGraph tags
- [ ] Twitter Card tags
- [ ] Structured data (JSON-LD)
- [ ] Breadcrumb navigation (except homepage)
- [ ] Image alt text
- [ ] Semantic HTML5 elements
- [ ] Mobile-friendly viewport meta
- [ ] Lang attribute on HTML tag

### Homepage Must Have:
- [ ] Person schema
- [ ] WebSite schema
- [ ] Introduction with keywords
- [ ] Links to all main sections
- [ ] Clear value proposition

### Content Pages Must Have:
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Introductory paragraph
- [ ] Section divisions with H2 headings
- [ ] Internal links to related content
- [ ] Call to action

---

## Conclusion

Following this template will ensure:
- ✅ Maximum search engine visibility
- ✅ Rich snippets in search results
- ✅ Proper social media sharing
- ✅ Clear content hierarchy
- ✅ Better user experience
- ✅ Improved accessibility

**Remember:** SEO is about creating valuable, well-structured content for humans first, search engines second.
