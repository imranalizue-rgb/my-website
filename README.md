# Vertex Solutions — Company Website

A modern, responsive company website built with React, Tailwind CSS, Vite, and Framer Motion.

## Pages

- **Home** — Hero, stats, featured services, testimonials, CTA
- **About** — Mission, values, leadership team, company timeline
- **Services** — Full service catalog with process overview
- **Careers** — Benefits, culture, open positions
- **Contact** — Contact form and company information

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)
- [React Helmet Async](https://github.com/staylor/react-helmet-async) (SEO)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Folder Structure

```
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── Navbar.jsx
│   │   ├── seo/
│   │   │   └── SEO.jsx
│   │   └── ui/
│   │       ├── AnimatedSection.jsx
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── SectionHeading.jsx
│   │       └── ServiceIcon.jsx
│   ├── data/
│   │   ├── careers.js
│   │   ├── company.js
│   │   └── services.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Careers.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Services.jsx
│   ├── utils/
│   │   └── animations.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Customization

Update company details in `src/data/company.js`, services in `src/data/services.js`, and job listings in `src/data/careers.js`.

## SEO

Each page includes meta tags, Open Graph data, canonical URLs, and JSON-LD structured data via the SEO component.
