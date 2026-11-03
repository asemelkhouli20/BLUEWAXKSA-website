# BLUEWAX performance and SEO release

Prepared: 3 November 2026. Canonical domain: https://bluewaxksa.com

## Measured image file sizes

The nine unique displayed image sources (eight project artworks plus logo) total **1,263,055 bytes before** and **733,016 bytes after**, comparing each original with the largest optimized variant. That is **42.0% fewer bytes**. Smaller variants are supplied where source dimensions allow. These are file-size measurements, not a PageSpeed score or a claim about measured loading time.

| Image | Original bytes | Largest optimized bytes |
|---|---:|---:|
| ufo | 244,806 | 151,772 |
| qiran | 196,784 | 118,480 |
| crystal-maze | 71,362 | 44,466 |
| ramez | 73,252 | 44,290 |
| dinosaurs | 47,122 | 28,768 |
| house-of-hype | 142,276 | 97,758 |
| barbie | 290,748 | 187,736 |
| white-visitor | 100,828 | 54,196 |
| logo | 95,877 | 5,550 |

## Implemented

- Responsive WebP images with srcset/sizes and explicit dimensions.
- Homepage hero loads eagerly with high priority; off-screen project images load lazily.
- Approved logo uses small WebP display versions; original retained for sharing metadata.
- Fonts served locally with font-display: swap; no runtime Google Fonts request.
- Small deferred JavaScript; fully rendered static HTML, no framework runtime.
- Fingerprinted assets and long-cache configuration for supported hosting.
- Unique titles and descriptions for ten Arabic/English pages.
- Canonical URLs, reciprocal hreflang, Open Graph, Twitter and Organization/WebSite/WebPage structured data; breadcrumbs on inner pages.
- Sitemap with language alternatives, robots.txt and a noindex 404 page.
- Original project images retained in the source repository; only current optimized visuals ship in this archive. No generated images.

## Verification and limits

- All ten pages passed local file, image, srcset, font, heading, metadata, structured-data JSON and link checks.
- Arabic and English homepages rendered without horizontal overflow at a 390px viewport; language switching and menu opening/Escape closing were checked.
- The homepage hero loaded successfully and styles/scripts have no external CDN dependencies.
- DNS and SSL for bluewaxksa.com remain pending at the time of release. Server compression and cache behavior depend on the selected host honoring the supplied configuration.
- No public Lighthouse or PageSpeed score was measured; run PageSpeed Insights on the final domain after DNS and HTTPS are active. Search indexing and rankings are not guaranteed.
