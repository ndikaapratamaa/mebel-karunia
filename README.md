# Mebel Karunia - Website Furniture Business

Project website bisnis mebel menggunakan Next.js 14 dengan App Router.

## Struktur Project

```
web-mebel-karunia/
├── public/
│   ├── images/
│   │   ├── products/
│   │   ├── gallery/
│   │   └── logo.png
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── (home)/
│   │   │   └── page.jsx
│   │   ├── produk/
│   │   │   ├── page.jsx
│   │   │   └── [slug]/
│   │   │       └── page.jsx
│   │   ├── galeri/
│   │   │   └── page.jsx
│   │   ├── tentang/
│   │   │   └── page.jsx
│   │   ├── kontak/
│   │   │   └── page.jsx
│   │   ├── layout.jsx
│   │   ├── globals.css
│   │   └── not-found.jsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navigation.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Modal.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── FeaturedProducts.jsx
│   │   │   ├── Categories.jsx
│   │   │   └── Testimonials.jsx
│   │   └── forms/
│   │       └── ContactForm.jsx
│   ├── lib/
│   │   ├── data/
│   │   │   ├── products.js
│   │   │   └── categories.js
│   │   └── utils.js
│   └── styles/
│       └── components/
├── .env.local
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.js
└── jsconfig.json
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: JavaScript/JSX
- **Icons**: React Icons atau Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Features

- 🏠 Homepage dengan hero section dan featured products
- 📦 Halaman produk dengan kategori
- 🖼️ Galeri foto mebel
- 📞 Halaman kontak dengan form
- 📱 Responsive design
- ⚡ Fast performance dengan Next.js
- 🎨 Modern UI dengan Tailwind CSS

## Pages

1. **Home** (`/`) - Landing page dengan hero, featured products, categories
2. **Produk** (`/produk`) - Katalog semua produk
3. **Detail Produk** (`/produk/[slug]`) - Detail produk individual
4. **Galeri** (`/galeri`) - Galeri foto proyek mebel
5. **Tentang** (`/tentang`) - Tentang perusahaan
6. **Kontak** (`/kontak`) - Form kontak dan informasi

## Environment Variables

```env
NEXT_PUBLIC_SITE_NAME=Mebel Karunia
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_WHATSAPP=6281234567890
NEXT_PUBLIC_EMAIL=info@mebelbisnis.com
```
