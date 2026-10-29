# CAC Montessori Madiun Website

Website resmi CAC Montessori Madiun (Curious Angels Club), playschool berbasis Montessori untuk anak usia 1–6 tahun.

## Features

- Bilingual support: Indonesian (default, `/`) and English (`/en/`).
- Responsive, accessible UI with reduced-motion support.

## Tech Stack

- Astro.js
- Vue 3 (Composition API, `<script setup>`)
- TypeScript
- Tailwind CSS v4
- Lucide Icons
- VueUse

## Getting Started

```bash
npm install
cp .env.example .env
npm run dev
```

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run typecheck` — TypeScript check (`tsc --noEmit`)

## Configuration

Edit `.env` based on `.env.example`. Do not commit real credentials.

## Deployment

Build output is in `dist/`. Deploy to any static host (Vercel, Netlify, Cloudflare Pages, etc.).

## Assets to Replace

- `/public/images/logo.svg` — replace with official CAC logo.
- `/public/images/hero-montessori.svg` and other `*.svg` placeholders — replace with real photos (update extensions in code if needed).
- `/public/favicon.svg` — replace with official favicon.

## Data to Confirm with CAC Montessori Madiun

- Program names, age ranges, and curriculum details.
- Class availability and waiting list policy.
- Admission fees, schedules, and procedures.
- School address, phone, WhatsApp number, Instagram.
- Testimonials and ratings (do not fabricate).
- Structured data (business/organization) after verification.
- Admission form backend endpoint.
EOF