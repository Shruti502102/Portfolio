<div align="center">

# ✨ Shruti Srivastava — Portfolio

### Data Scientist · AI/ML Engineer · Full-Stack Developer

[![Live Site](https://img.shields.io/badge/🌐%20Live%20Site-shruti502102.github.io/Portfolio-6d28d9?style=for-the-badge)](https://shruti502102.github.io/Portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-Shruti502102-181717?style=for-the-badge&logo=github)](https://github.com/Shruti502102/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Shruti%20Srivastava-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/shruti-srivastava-2b2101269/)
[![LeetCode](https://img.shields.io/badge/LeetCode-Shruti502102-FFA116?style=for-the-badge&logo=leetcode)](https://leetcode.com/u/Shruti502102/)

**B.Tech CSE (Data Science) · NIET, Greater Noida · CGPA 8.07/10 · First Division with Honours**

</div>

---

## 🖥️ Preview

> A dark cinematic portfolio with a violet–mint design system, 3D animations, an AI companion, admin CMS, and PWA support — built entirely with vanilla HTML, CSS and JavaScript.

| Section | Description |
|---|---|
| **Hero** | Animated name, typed roles, holographic profile frame, live stat counters |
| **About** | Bio, education, languages, impact metrics, "Now" status |
| **Skills** | 7 skill cards with animated bars, scrolling tech marquee, radar chart |
| **Projects** | 6 featured projects with case-study modals |
| **Experience** | Full 6-internship timeline |
| **Research** | 2 published papers with DOI links |
| **Testimonials** | Social proof cards |
| **Awards** | 4 achievements |
| **Contact** | Working contact form + Save Contact / Copy Email / Share buttons |

---

## 📁 File Structure

```
Portfolio/
│
├── index.html          ← Main portfolio (hero, about, skills, projects, experience, research, contact)
├── tr.html             ← Certifications page (24 certs, filter by category)
├── blog.html           ← Technical blog (6 articles, category filters)
├── showcase.html       ← Media gallery (images, videos, links)
├── skills-match.html   ← AI recruiter skill-match tool
├── playground.html     ← 3D interactive walking character (Shru-AI)
│
├── admin-data.js       ← Shared data store (ALL content lives here)
├── images.js           ← Base64 embedded images (profile + chibi, offline fallback)
│
├── manifest.json       ← PWA manifest (installable on mobile & desktop)
├── sw.js               ← Service worker (offline support)
├── robots.txt          ← Search engine crawler rules
├── sitemap.xml         ← Sitemap for SEO
│
├── image.png           ← Profile photo
└── chibi-ai.png        ← Shru-AI character
```

> **Important:** All files must be in the **same root folder** when uploaded to GitHub. The pages share `admin-data.js` and `images.js` — do not move them into subfolders.

---

## 🚀 Getting Started

### Option 1 — GitHub Pages (Recommended)

1. Go to your GitHub repository → **Settings** → **Pages**
2. Under *Source*, select `main` branch, root `/` folder → **Save**
3. Your portfolio will be live at `https://shruti502102.github.io/Portfolio/` within a few minutes

### Option 2 — View Locally

Just open `index.html` in any modern browser — no build step, no server, no dependencies. Everything runs in the browser.

> **Note:** The PWA install prompt and offline support only activate over HTTPS (e.g. GitHub Pages). They won't fire on `file://` URLs — that is expected.

---

## ⚙️ Admin Panel

Everything on this portfolio can be edited without touching any code.

### Logging In

Click **Admin** in the navigation bar on any page → enter the password.

> **Default password:** `shruti2025`
> Change it anytime inside Admin → Password tab.

### What You Can Edit

| Tab | What it controls |
|---|---|
| **Profile** | Name, tagline, about text, location, phone, email, all social links |
| **Photo** | Upload a new profile picture |
| **Projects** | Add · edit · delete projects (title, description, tags, link) |
| **Resumes** | Upload PDFs per role — Master Resume, SWE, AI/ML, Data Scientist, Data Analyst |
| **Awards** | Add · edit · delete achievements |
| **Reviews** | Add · edit · delete testimonials |
| **Password** | Change the admin password |

### How Content Auto-Updates Across Pages

All content is stored in a single `admin-data.js` file and loaded by every page. When you add a new certificate on the Certs page, the counter on the main page automatically shows the new count. Same for blog posts, showcase items, and internship counts — you **never need to manually update numbers** anywhere.

Changes made via the Admin panel are saved to your browser's `localStorage`. To make them permanent for all visitors:
1. Make your changes in Admin
2. Export the updated data (copy `admin-data.js` content from browser DevTools → Application → Local Storage → `ss_portfolio_data`)  
3. Paste it into `admin-data.js` and re-upload to GitHub

---

## 📄 Pages Guide

### `index.html` — Main Portfolio
The entry point. Contains all major sections. The Chibi AI companion (Shru-AI) lives here and reacts to scrolling, offers navigation shortcuts, and has 7 animated poses. The AI chatbot (bottom-right) answers questions about your profile.

**Special features on this page:**
- ⌘K / Ctrl+K — Command palette (fuzzy search everything)
- `?` — Keyboard shortcuts panel
- `T` — Theme switcher (Violet Dream / Cyber Neon / Sunset Blaze / Matrix Green)
- `A` — Achievements modal
- Konami Code (↑↑↓↓←→←→BA) — Secret unlock

### `tr.html` — Certifications
Shows all 24 certificates with category filters (Internships / Coursera / Infosys / Workshops). Stats bar (certificate count, internship count, platform count) updates automatically as you add/remove certs. Each card expands to show the certificate image, description, and a verify link.

**Adding certificates:**
- In Admin mode, click **+ Add Certificate** (bottom-right FAB)
- Upload a certificate image directly, or paste an image/verify URL
- Fill in title, category, organization, date

### `blog.html` — Technical Blog
6 articles covering ML, Cloud/Gen AI, AR/VR, and Data Science. Filter by topic. Click any post to read it in full. Article count and topic count in the stats bar update automatically.

### `showcase.html` — Project Showcase
A masonry media gallery for images, videos, and links. Supports YouTube/Vimeo auto-embed. Stats bar shows total items, video count, and link count — all live from your data.

### `skills-match.html` — AI Skill Match (Recruiter Tool)
Paste any job description → get an instant match score with matched/missing skills, an animated score ring, and a summary. Includes 4 role presets (Data Scientist, AI/ML Engineer, Data Analyst, Software Engineer). The summary automatically uses your actual internship and certification counts from the data.

### `playground.html` — 3D Playground
A fully rigged SVG skeletal character (Shru-AI) you can walk around with arrow keys or WASD. Includes 8 poses (wave, dance, think, jump, bow, sit, hype, back view), a 4-direction walk cycle, speech bubbles, trail effects, and mouse 3D tilt.

---

## 🎨 Design System

| Variable | Value | Used for |
|---|---|---|
| `--bg` | `#04040e` | Page background |
| `--v` / `--v2` / `--v3` | Violet scale | Primary accent, buttons, borders |
| `--m` | `#06d6a0` | Mint — success, highlights |
| `--g` | `#f59e0b` | Gold — stats, awards |
| `--c` | `#22d3ee` | Cyan — accents |
| `--r` | `#ef4444` | Red — delete, error |

**Fonts:** Clash Display (headings) · Cabinet Grotesk (body) · JetBrains Mono (code/labels)  
Both loaded from Google Fonts — no local font files needed.

---

## ✨ Animations

The portfolio has 38 keyframe animations and 5 canvas-based systems:

| Animation | Description |
|---|---|
| **Constellation network** | Mouse-reactive particle system — particles drift and connect to your cursor |
| **Aurora blobs** | Soft floating gradient blobs in the background |
| **Tech marquee** | Infinite scrolling band of 18 technologies with icons |
| **Radar chart** | Animated canvas skill radar that draws on scroll |
| **3D card tilt** | Project, testimonial, and impact cards tilt toward the mouse in real 3D |
| **Confetti burst** | Fires when an achievement is unlocked |
| **Parallax orbs** | Glow orbs drift at different speeds on scroll |
| **Animated gradient border** | Project cards get a flowing rainbow border on hover |
| **Ripple clicks** | Buttons ripple from the click point |
| **Section shimmer** | Light sweeps across section titles periodically |
| **Staggered card entrance** | Cards fade-up in a wave as they enter the viewport |
| **Loader** | Spinning rings + progress bar with phase messages (3.6s minimum display) |

> All animations respect `prefers-reduced-motion` — they disable automatically for users who have enabled reduced motion in their OS settings.

---

## 🏆 Visitor Achievement System

Visitors can unlock 8 badges by exploring the portfolio:

| Badge | How to unlock |
|---|---|
| 👋 First Contact | Land on the portfolio |
| 🧭 Explorer | View 4+ sections |
| 🔍 Deep Diver | View every section |
| ⌘ Power User | Open the command palette |
| 🎨 Stylist | Change the theme |
| 🤖 AI Friend | Interact with Shru-AI |
| 💼 Recruiter | Download the resume |
| 🎮 Secret Keeper | Find the Konami code |

Progress is tracked in `localStorage` and shown in the XP badge (top-right). Click it to open the achievements modal.

---

## 📱 PWA — Install as an App

The portfolio is a Progressive Web App. On supported browsers:

- **Mobile:** Open in Chrome/Safari → browser menu → "Add to Home Screen"
- **Desktop:** Look for the install icon in the address bar, or click **Install App** (bottom-left button)

Once installed it works **offline** — all pages are cached by the service worker after the first visit.

---

## 🔧 Customisation Guide

### Updating Your Profile

All content is in `admin-data.js`. The `profile` object at the top holds your personal info:

```js
profile: {
  photo: "image.png",      // ← your profile photo filename
  name: "Shruti Srivastava",
  tagline: "Data Scientist · AI/ML Engineer · Full-Stack Developer",
  about: "...",
  email: "...",
  phone: "...",
  linkedin: "...",
  github: "...",
  leetcode: "..."
}
```

### Uploading Resume PDFs

Go to **Admin → Resumes** → click **Upload PDF** next to any role, or use the **Quick Upload** box at the top to attach a PDF to your Master Resume in one click.

### Adding Certificate Images

For the best display, certificates need their own images. You have two options:

**Option A — Upload via Admin (recommended):**
Admin → Certs page → click **Edit** on any cert → use "Replace image" to upload a PNG/JPG screenshot of the certificate.

**Option B — Add a `certs/` folder to GitHub:**
Create a folder called `certs/` in your repo and name your certificate images `cert-1.jpg`, `cert-2.jpg`, etc. (matching the cert `id` in `admin-data.js`). The portfolio will find them automatically.

### Changing the Admin Password

Admin → **Password** tab → enter current password → enter and confirm new password → Save.

### Adding to the Contact Form

The contact form works out of the box (opens your email app with the message pre-filled). To receive messages directly in your inbox without the sender needing an email app:

1. Sign up free at [formspree.io](https://formspree.io)
2. Create a new form → copy the endpoint URL
3. In `index.html`, find `const FORMSPREE_ENDPOINT = ''` and paste your URL between the quotes
4. Re-upload `index.html` to GitHub

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Markup** | HTML5 (semantic, accessible) |
| **Styling** | CSS3 — custom properties, grid, flexbox, animations |
| **Scripting** | Vanilla JavaScript (ES2020+) — no frameworks |
| **Fonts** | Google Fonts (Clash Display, Cabinet Grotesk, JetBrains Mono) |
| **Icons** | Bootstrap Icons 1.11 (CDN) |
| **PWA** | Web App Manifest + Service Worker |
| **SEO** | JSON-LD structured data, Open Graph, Twitter Card, sitemap.xml |
| **Hosting** | GitHub Pages |

No build tools, no npm, no bundlers — just files.

---

## 🔬 Research Publications

| # | Title | Journal | Date |
|---|---|---|---|
| 1 | MindGuard AI: A Human-Centred Multimodal Framework for Early Mental Health Risk Assessment | IJST, Vol. 3, No. 2 | May 2026 |
| 2 | Multimodal Digital Technologies in Mental Health Care: AI, VR, Wearables, and Digital Therapeutics | IJVRA, Vol. 4, No. 5 | May 2026 |

---

## 💼 Experience

| Period | Role | Organisation |
|---|---|---|
| Jun–Jul 2026 | Software Development Intern | Codtech IT Solutions Pvt. Ltd. |
| Jun–Aug 2025 | Generative AI Intern | SmartInternz × Google Cloud |
| Jun–Aug 2025 | Networking Intern | Cisco Networking Academy |
| May–Jun 2025 | ITSM Intern | ServiceNow |
| Jul 2024 | AR/VR Development Intern | NIET, Greater Noida |
| Aug–Oct 2023 | Data Science & ML Intern | YBI Foundation |

---

## 📬 Contact

| | |
|---|---|
| **Email** | shrutisrivastava502102@gmail.com |
| **Phone** | +91 9910367552 |
| **Location** | Greater Noida, Uttar Pradesh, India |
| **LinkedIn** | [shruti-srivastava-2b2101269](https://www.linkedin.com/in/shruti-srivastava-2b2101269/) |
| **GitHub** | [Shruti502102](https://github.com/Shruti502102/) |
| **LeetCode** | [Shruti502102](https://leetcode.com/u/Shruti502102/) |
| **Portfolio** | [shruti502102.github.io/Portfolio](https://shruti502102.github.io/Portfolio/) |

---

## 📜 Licence

This portfolio is personal — the **code and design are open for reference and inspiration**. Please do not copy content (bio, projects, certifications, images) and present it as your own.

---

<div align="center">

Built with ☕ and a lot of passion · © 2026 Shruti Srivastava

</div>
