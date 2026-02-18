# Struktur Project Web Mebel Karunia

## 📁 Struktur Folder Lengkap

```
web-mebel-karunia/
│
├── 📄 .env.local                 # Environment variables (ganti sesuai bisnis Anda)
├── 📄 .gitignore                 # Git ignore file
├── 📄 README.md                  # Dokumentasi project
├── 📄 INSTALLATION.md            # Panduan instalasi & setup
├── 📄 package.json               # Dependencies & scripts
├── 📄 next.config.js             # Konfigurasi Next.js
├── 📄 tailwind.config.js         # Konfigurasi Tailwind CSS
├── 📄 postcss.config.js          # Konfigurasi PostCSS
├── 📄 jsconfig.json              # Path aliases (@/*)
│
├── 📁 public/                    # Static files (LETAKKAN GAMBAR DI SINI)
│   ├── 📁 images/
│   │   ├── 📁 products/          # Gambar produk
│   │   ├── 📁 gallery/           # Gambar galeri
│   │   ├── 📁 about/             # Gambar tentang kami
│   │   └── hero-furniture.jpg   # Gambar hero
│   └── favicon.ico
│
└── 📁 src/
    │
    ├── 📁 app/                   # App Router (Next.js 14)
    │   │
    │   ├── 📄 layout.jsx         # Root layout (Header + Footer)
    │   ├── 📄 page.jsx           # Homepage (/)
    │   ├── 📄 globals.css        # Global styles + Tailwind
    │   ├── 📄 not-found.jsx      # 404 page
    │   │
    │   ├── 📁 produk/            # Halaman produk
    │   │   ├── 📄 page.jsx       # List produk (/produk)
    │   │   └── 📁 [slug]/        # Dynamic route
    │   │       └── 📄 page.jsx   # Detail produk (/produk/[slug])
    │   │
    │   ├── 📁 galeri/
    │   │   └── 📄 page.jsx       # Halaman galeri (/galeri)
    │   │
    │   ├── 📁 tentang/
    │   │   └── 📄 page.jsx       # Halaman tentang (/tentang)
    │   │
    │   └── 📁 kontak/
    │       └── 📄 page.jsx       # Halaman kontak (/kontak)
    │
    ├── 📁 components/            # React components
    │   │
    │   ├── 📁 layout/            # Layout components
    │   │   ├── 📄 Header.jsx     # Navigation header
    │   │   └── 📄 Footer.jsx     # Footer
    │   │
    │   ├── 📁 sections/          # Section components (untuk homepage)
    │   │   ├── 📄 Hero.jsx       # Hero banner
    │   │   ├── 📄 Categories.jsx # Kategori produk
    │   │   ├── 📄 FeaturedProducts.jsx
    │   │   └── 📄 Testimonials.jsx
    │   │
    │   ├── 📁 ui/                # UI components
    │   │   ├── 📄 Button.jsx     # Button component
    │   │   ├── 📄 Card.jsx       # Card component
    │   │   └── 📄 ProductCard.jsx # Product card
    │   │
    │   └── 📁 forms/             # Form components
    │       └── 📄 ContactForm.jsx # Contact form
    │
    └── 📁 lib/                   # Utilities & data
        ├── 📁 data/
        │   └── 📄 products.js    # Data produk (EDIT DI SINI)
        └── 📄 utils.js           # Helper functions
```

## 🎨 Halaman Website

### 1. **Homepage** (`/`)
- Hero section dengan CTA
- Kategori produk
- Produk unggulan (featured)
- Testimoni
- CTA akhir

### 2. **Produk** (`/produk`)
- Grid katalog produk
- Filter kategori
- Product cards

### 3. **Detail Produk** (`/produk/[slug]`)
- Gambar produk besar
- Informasi lengkap
- Spesifikasi
- Tombol WhatsApp & Kontak

### 4. **Galeri** (`/galeri`)
- Grid galeri foto
- Hover effects
- CTA konsultasi

### 5. **Tentang** (`/tentang`)
- Cerita perusahaan
- Nilai-nilai
- Statistik
- CTA

### 6. **Kontak** (`/kontak`)
- Form kontak
- Informasi kontak
- Google Maps embed
- Social media links

## 🔧 Komponen Utama

### Layout Components
- **Header**: Navigasi responsive + mobile menu
- **Footer**: Info perusahaan, quick links, kontak

### Section Components (Homepage)
- **Hero**: Banner utama dengan gambar & CTA
- **Categories**: Grid kategori produk dengan icons
- **FeaturedProducts**: Grid produk unggulan
- **Testimonials**: Review dari pelanggan

### UI Components
- **Button**: Reusable button dengan variants
- **Card**: Reusable card container
- **ProductCard**: Card khusus untuk produk

### Forms
- **ContactForm**: Form kontak dengan validasi

## 📊 Data Management

### Products Data (`src/lib/data/products.js`)
```js
{
  id: 1,
  slug: 'nama-produk',        // URL friendly
  name: 'Nama Produk',
  category: 'Kategori',
  price: 'Rp 1.000.000',
  image: '/images/products/produk.jpg',
  description: 'Deskripsi...',
  badge: 'Terlaris',          // Optional
  specs: {                     // Spesifikasi
    Material: 'Kayu Jati',
    Dimensi: '100 x 50 cm',
  }
}
```

## 🎨 Styling

- **Framework**: Tailwind CSS
- **Warna Primary**: Dapat diubah di `tailwind.config.js`
- **Global Styles**: `src/app/globals.css`
- **Responsive**: Mobile-first design

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Setup environment
# Edit .env.local dengan info bisnis Anda

# Run development
npm run dev

# Open http://localhost:3000
```

## 📝 Kustomisasi Cepat

### 1. Ganti Info Bisnis
Edit `.env.local`:
```env
NEXT_PUBLIC_SITE_NAME="Nama Bisnis Anda"
NEXT_PUBLIC_WHATSAPP="6281234567890"
NEXT_PUBLIC_EMAIL="info@bisnis.com"
...
```

### 2. Tambah Produk
Edit `src/lib/data/products.js` dan tambahkan object produk baru.

### 3. Ganti Warna Brand
Edit `tailwind.config.js` pada bagian `theme.extend.colors.primary`.

### 4. Upload Gambar
Letakkan gambar di `public/images/` dan reference dengan `/images/nama-file.jpg`.

## 🌟 Fitur

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ SEO friendly dengan metadata
- ✅ Fast performance (Next.js optimization)
- ✅ Modern UI dengan Tailwind CSS
- ✅ WhatsApp integration
- ✅ Contact form
- ✅ Dynamic routing untuk produk
- ✅ Easy to customize

## 📦 Deploy

Website siap di-deploy ke:
- **Vercel** (recommended) - Free hosting
- **Netlify** - Free hosting
- **VPS/Hosting** sendiri

Lihat `INSTALLATION.md` untuk panduan deploy lengkap.
