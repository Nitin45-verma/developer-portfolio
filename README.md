# 🚀 Nitin Verma — Portfolio Website

A modern, responsive, and performance-optimized personal portfolio website showcasing skills, projects, experience, and education. Built using React + Vite with Tailwind CSS and smooth Framer Motion animations.

---

## ✨ Features

- **Interactive Hero Section:** Eye-catching landing with animated glow cursor and specular button effects.
- **Lazy-Loaded Sections:** Below-the-fold components (About, Skills, Experience, Projects, Education, Contact) are code-split for blazing-fast initial load.
- **Smooth Animations:** Framer Motion–powered scroll transitions and micro-interactions throughout.
- **Full SEO Implementation:** JSON-LD structured data, Open Graph/Twitter meta tags, sitemap, robots.txt, and noscript fallback for all crawlers.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite 8
- **UI & Styling:** Tailwind CSS v4 / Custom CSS
- **Animations:** Framer Motion / OGL (WebGL)
- **Icons:** Lucide React / React Icons
- **Fonts:** Google Fonts (Inter)
- **Deployment:** Vercel

---

## 📁 Project Structure

```
portfolio/
├── public/               # Static assets (favicons, OG images, manifest, sitemap)
├── src/
│   ├── assets/           # Project images and media
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── GlowCursor.jsx
│   │   ├── SpecularButton.jsx
│   │   └── SectionHeading.jsx
│   ├── App.jsx           # Root component with lazy loading
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles & design tokens
├── index.html            # HTML entry with SEO meta & structured data
├── vite.config.js        # Vite configuration
└── package.json
```

---

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have **Node.js (v18+)** installed on your machine.

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Nitin45-verma/developer-portfolio.git
cd developer-portfolio
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The app will start at `https://nitin-portfolio-henna.vercel.app`.

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

---

## 📜 Available Scripts

| Script            | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start Vite dev server with HMR     |
| `npm run build`   | Create optimized production build  |
| `npm run preview` | Locally preview the production build |
| `npm run lint`    | Run Oxlint for code quality checks |

---

## 🌐 Live Demo

🔗 [nitin-portfolio-henna.vercel.app](https://nitin-portfolio-henna.vercel.app)

---

## 📬 Contact

- **Email:** [nikn63641@gmail.com](mailto:nikn63641@gmail.com)
- **LinkedIn:** [linkedin.com/in/nitin-verma-30104731a](https://linkedin.com/in/nitin-verma-30104731a)
- **GitHub:** [github.com/Nitin45-verma](https://github.com/Nitin45-verma)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
