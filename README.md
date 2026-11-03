# BLUEWAX — Deployment guide / دليل نشر الموقع

Target address: **https://bluewaxksa.com/**

This is a ready-to-upload static website. Arabic is at `/` and English at `/en/`. It needs no Node.js, npm, database, WordPress or build command. All images, fonts, styles and scripts are included. Contact buttons open WhatsApp or email; there is no server-side contact form.

## البدء السريع — استضافة بلوحة تحكم

1. فك ضغط `BLUEWAXKSA-website.zip` على جهازك.
2. ادخل لوحة الاستضافة التي ستستضيف `bluewaxksa.com`، ثم افتح مدير الملفات.
3. خذ نسخة احتياطية من الموقع الموجود قبل استبداله.
4. افتح المجلد الرئيسي المخصص للدومين؛ غالبًا `public_html`، وقد يختلف حسب الاستضافة.
5. ارفع **محتويات ZIP** إلى هذا المجلد مباشرة. يجب أن يكون `index.html` في جذر الدومين وبجانبه `assets` و`en` و`about` و`services` و`work` و`contact`؛ لا تضع الموقع داخل مجلد إضافي باسم ZIP.
6. أظهر الملفات المخفية وتأكد من رفع `.htaccess` إذا كانت الاستضافة Apache أو متوافقة معه. ملف `_headers` مخصص للاستضافات التي تدعمه، ولا يغني عن إعدادات الاستضافة الأخرى.
7. من إعدادات DNS لدى جهة إدارة الدومين، استخدم قيم الربط التي تعطيك إياها **الاستضافة التي اخترتها**. احتفظ بسجلات البريد MX وSPF وDKIM وDMARC دون تعديل.
8. فعّل شهادة SSL ثم تحويل HTTP إلى HTTPS من لوحة الاستضافة. اجعل النسخة الأساسية `https://bluewaxksa.com`، واضبط تحويل `www` إليها بعد إضافة `www` والتحقق من شهادته.
9. افتح الرئيسية و`/en/` و`/work/` و`/contact/` وتأكد من ظهور الصور وعمل تبديل اللغة وروابط التواصل.
10. بعد عمل الدومين، أضفه إلى Google Search Console وأرسل `https://bluewaxksa.com/sitemap.xml`.

**رفع ZIP وحده لا يربط الدومين تلقائيًا.** الدومين مسجل للربط بموقع Sites الحالي، لكن آخر تحقق في 3 نوفمبر 2026 أظهر أن DNS والتحقق من شهادة SSL ما زالا قيد الانتظار.

## Option A — Ordinary web hosting / cPanel

1. Extract the ZIP and back up any existing website.
2. Open the hosting File Manager and the document root assigned to `bluewaxksa.com` (often `public_html`).
3. Upload the ZIP contents directly into that document root, including hidden `.htaccess` if supported. `index.html` must be at the root, not inside an extra folder.
4. Add the domain to the hosting account. At the DNS provider, use the DNS records supplied by that hosting company. Keep all email-related records.
5. Enable SSL, HTTPS enforcement and a permanent `www` → apex redirect through the host after both hostnames have working certificates. This package does not force redirects before SSL is ready.
6. Enable Brotli or gzip and CDN caching if offered. Apache compression/cache settings are supplied in `.htaccess`; hosts may require equivalent settings in their control panel.

## Option B — Cloudflare Pages Direct Upload

1. Open Cloudflare → Workers & Pages → create a Pages project → Direct Upload.
2. Upload the ZIP or its extracted folder, making sure `index.html` is at the upload root. Deploy the prebuilt files; no build command is needed.
3. Test the provided `pages.dev` address.
4. Open the project's Custom domains section, add `bluewaxksa.com`, and follow Cloudflare's displayed DNS setup. Apex domains may require managing the domain's DNS on Cloudflare; copy and preserve all existing email records before any nameserver change.
5. Add `www.bluewaxksa.com` separately if desired, then redirect it to the apex address. Wait for the domain and certificate to become active.
6. For updates, create another deployment in the same Pages project and upload the complete updated package.

Official guide: https://developers.cloudflare.com/pages/get-started/direct-upload/

## Option C — Keep the existing Sites hosting

You do not need to upload this ZIP to a second host to keep the current Sites website. The existing address is:

https://blue-wax-events-nov26.racingflea129.chatgpt.site/

The following records were returned by **this site's** domain setup. Use these only if you keep Sites as the hosting destination. Do not use these IP addresses for Option A or B.

| Type | Host/name | Value |
|---|---|---|
| A | `@` | `162.159.143.30` |
| A | `@` | `172.66.3.26` |
| TXT | `_openai-site-verification` | `openai-site-verification=I6yq3X9KB69U6DCoW53kdH6gYeVXmt5N8kwjmvjN4Aw` |
| TXT | `_cf-custom-hostname` | `480bec47-f35d-4fd6-b297-f434463356dd` |

Enter host labels without repeating the domain if your DNS panel automatically appends it. Replace only conflicting website A/AAAA/CNAME records at the same hostname, after backing them up. Keep email MX and TXT records. Refresh the domain status in Sites after DNS changes. `www` is not yet configured in Sites and must be added separately if required.

## Files and structure

```text
index.html              Arabic homepage
about/index.html        Arabic About
services/index.html     Arabic Expertise
work/index.html         Arabic Work
contact/index.html      Arabic Contact
en/                     All five English pages
assets/optimized/       Responsive WebP project images and logo
assets/fonts/           Local WOFF2 fonts
assets/static/          Fingerprinted CSS and JavaScript
assets/licenses/        Font licenses (retain when redistributing)
assets/logo.png         Original approved logo for sharing/search metadata
assets/favicon.png      Small browser icon
404.html                Not-found page
sitemap.xml             Ten canonical pages and language alternatives
robots.txt              Search crawler instructions
_headers                Cache headers for hosts supporting this format
.htaccess               Apache compression, caching and error page
README.md               This guide; optional on the public server
PERFORMANCE.md          Measured asset reductions and validation notes
```

## Preview locally

From the extracted folder, if Python is installed:

```sh
python -m http.server 8080
```

Open `http://localhost:8080/`. Use a local web server instead of double-clicking HTML files: asset paths start at `/` and expect the website to be served at a domain root. The Python server is for local preview, not production hosting.

## Update content and images

- Edit the relevant `index.html` and its matching English page. Update the homepage too if the same content appears there.
- If contact details change, update every page's header/footer/contact links and Organization structured data.
- For images, retain WebP, descriptive `alt`, dimensions, `srcset` and `sizes`. Add new image filenames and update all corresponding references rather than overwriting a file that is cached for a year.
- CSS and JS filenames contain content hashes for caching. After editing one, give it a new filename and update references in every HTML file, including `404.html` where relevant.
- Upload a complete tested release; do not remove assets still referenced by cached pages. Keep the previous ZIP for rollback.
- The current canonical domain is `https://bluewaxksa.com`. If this changes, update canonical, hreflang, Open Graph and JSON-LD URLs in all pages, plus `sitemap.xml` and `robots.txt`.

## After deployment

- Verify both languages and all five routes on mobile and desktop.
- Verify images, WhatsApp and email links. Do not send a test message unless you intend to contact the company.
- Check `/robots.txt` and `/sitemap.xml`. The sitemap should list the final domain, not the preview address.
- Unknown paths should return HTTP 404. The included page is used automatically by some hosts; otherwise assign `/404.html` as the host's error page.
- Use Google Search Console to verify ownership, submit the sitemap and inspect the main URLs once the domain and HTTPS work.
- Run PageSpeed Insights on the final domain after deployment. Actual speed depends on hosting, network and device; no PageSpeed score or ranking is guaranteed by this package.

## Troubleshooting

- **Unstyled page / missing images:** upload `assets` alongside root `index.html`; do not host this package in a subdirectory without changing root-relative paths.
- **Homepage works, inner pages do not:** preserve the directory structure and enable directory `index.html` serving. Do not use a single-page-app fallback that sends every route to the homepage.
- **Old content:** clear the CDN cache for HTML; new asset filenames should be used for changed cached files.
- **Apache HTTP 500 after upload:** check the host's error log. Some shared hosts disallow directives in `.htaccess`; temporarily rename it and ask the host to apply supported equivalent settings.
- **Domain or SSL pending:** compare DNS with the selected hosting provider's exact records. A correct ZIP cannot fix DNS or certificate validation.
- **Squarespace domain:** owning the domain there does not mean its website builder accepts a static HTML ZIP. Use a static/web host for the files, and manage the domain's DNS separately.

Brand identity and existing project artwork are preserved. No AI-generated images were added.
