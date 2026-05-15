# Personal Portfolio Website

## Author
Sanjana Medapati

## Project Overview

This is a fully responsive and animated personal portfolio website built using React + Vite. The project showcases my skills, projects, and contact information in a modern and professional format.

The portfolio includes:

- Responsive design for mobile, tablet, and desktop
- Smooth animations using Framer Motion
- Parallax scrolling effects
- Project showcase section
- Skills section with icons
- Contact section with social links
- Live deployment using Vercel

---

# Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- React Scroll Parallax
- Git & GitHub
- Vercel

---

# Features

## Responsive Design
The website is fully responsive across:
- Mobile (375px)
- Tablet (768px)
- Desktop (1280px)

## Animations
- Fade-in animations
- Slide-up animations
- Staggered project card animations

## Parallax Effect
Implemented using:
- react-scroll-parallax

## Sections Included
- Hero
- About
- Skills
- Projects
- Contact
- Footer

---

# Folder Structure

```bash
portfolio-website/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

# Installation & Setup

## Step 1 — Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/portfolio-website.git
```

---

## Step 2 — Move Into Project Folder

```bash
cd portfolio-website
```

---

## Step 3 — Install Dependencies

```bash
npm install
```

---

# Run Project Locally

Start development server:

```bash
npm run dev
```

Open browser:

```bash
http://localhost:5173
```

---

# Create React + Vite Project

```bash
npm create vite@latest portfolio-website
```

Select:
- React
- JavaScript

---

# Install Required Packages

## Install Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

---

## Install Framer Motion

```bash
npm install framer-motion
```

---

## Install React Icons

```bash
npm install react-icons
```

---

## Install Parallax Library

```bash
npm install react-scroll-parallax
```

---

# Tailwind Configuration

## vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

---

# Global CSS

## src/index.css

```css
@import "tailwindcss";

html {
  scroll-behavior: smooth;
}

body {
  background: #0f172a;
  color: white;
  font-family: sans-serif;
}

/* Accessibility Requirement */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

# GitHub Setup

## Initialize Git

```bash
git init
```

---

## Add Files

```bash
git add .
```

---

## Create Commit

```bash
git commit -m "Initial commit"
```

---

## Rename Branch

```bash
git branch -M main
```

---

## Connect GitHub Repository

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
```

---

## Push Code

```bash
git push -u origin main
```

---

# Deployment

## Deploy Using Vercel

1. Push project to GitHub
2. Open Vercel
3. Import GitHub repository
4. Click Deploy

---

# Live Demo

Add your deployed link here:

```bash
https://your-portfolio.vercel.app
```

---

# Lighthouse Scores Target

| Category | Minimum Score |
|----------|---------------|
| Performance | 80+ |
| Accessibility | 90+ |
| Best Practices | 90+ |
| SEO | 85+ |

---

# Accessibility Features

- Reduced motion support
- Responsive layout
- Semantic HTML
- Smooth scrolling
- Keyboard-friendly navigation

---

# Required Portfolio Sections

## Hero
- Name
- Role
- CTA Button

## About
- Short bio
- Learning interests
- Background

## Skills
- Technology icons
- Visual layout

## Projects
- Minimum 3 projects
- Description
- Tech stack
- GitHub links

## Contact
- Email
- GitHub
- LinkedIn

---

# Example Projects Included

1. Smartwatch Stress Detection System
2. Customer Feedback Automation System
3. Personal Portfolio Website

---

# Commands Summary

## Create Project

```bash
npm create vite@latest portfolio-website
```

---

## Install Dependencies

```bash
npm install
npm install tailwindcss @tailwindcss/vite
npm install framer-motion
npm install react-icons
npm install react-scroll-parallax
```

---

## Run Project

```bash
npm run dev
```

---

## Git Commands

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

---

# Future Improvements

- Dark/Light theme toggle
- Blog section
- Resume download button
- Contact form integration
- More animations
- Backend integration

---

# License

This project is open source and available for learning purposes.

---

# Acknowledgements

- React
- Vite
- Tailwind CSS
- Framer Motion
- Vercel
- React Icons
- React Scroll Parallax
