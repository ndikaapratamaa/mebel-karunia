# Panduan Instalasi & Setup

## Prasyarat

Pastikan Anda sudah menginstall:
- Node.js 18.17 atau lebih baru
- npm atau yarn atau pnpm

## Langkah Instalasi

### 1. Install Dependencies

```bash
npm install
# atau
yarn install
# atau
pnpm install
```

### 2. Setup Environment Variables

Copy file `.env.local` dan sesuaikan dengan informasi bisnis Anda:

```bash
cp .env.local .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_SITE_NAME="Nama Bisnis Anda"
NEXT_PUBLIC_SITE_URL="https://yourdomain.com"
NEXT_PUBLIC_WHATSAPP="6281234567890"  # Nomor WA tanpa +
NEXT_PUBLIC_EMAIL="info@yourbusiness.com"
NEXT_PUBLIC_PHONE="(021) 1234-5678"
NEXT_PUBLIC_ADDRESS="Alamat Lengkap Anda"
```

### 3. Jalankan Development Server

```bash
npm run dev
```

Buka browser dan akses [http://localhost:3000](http://localhost:3000)

## Kustomisasi

### Mengganti Warna Brand

Edit `tailwind.config.js` pada bagian `colors.primary`:

```js
primary: {
  50: '#fdf8f6',
  100: '#f2e8e5',
  // ... sesuaikan dengan warna brand Anda
  900: '#43302b',
}
```

### Menambah/Edit Produk

Edit file `src/lib/data/products.js`:

```js
export const products = [
  {
    id: 1,
    slug: 'nama-produk',
    name: 'Nama Produk',
    category: 'Kategori',
    price: 'Rp 1.000.000',
    image: '/images/products/produk.jpg',
    description: 'Deskripsi produk...',
    specs: {
      Material: 'Material produk',
      Dimensi: '100 x 50 x 75 cm',
    },
  },
  // Tambahkan produk lainnya...
]
```

### Menambahkan Gambar

1. Letakkan gambar di folder `public/images/`
2. Struktur folder yang disarankan:
   - `public/images/products/` - Gambar produk
   - `public/images/gallery/` - Gambar galeri
   - `public/images/about/` - Gambar tentang kami
   - `public/images/` - Gambar lainnya

3. Reference gambar di kode:
```jsx
<Image src="/images/products/sofa.jpg" alt="Sofa" />
```

### Mengubah Konten Halaman

- **Homepage**: Edit `src/app/page.jsx`
- **Tentang**: Edit `src/app/tentang/page.jsx`
- **Kontak**: Edit `src/app/kontak/page.jsx`

### Mengubah Header & Footer

- **Header**: Edit `src/components/layout/Header.jsx`
- **Footer**: Edit `src/components/layout/Footer.jsx`

## Build untuk Production

```bash
npm run build
npm start
```

## Deploy

### Vercel (Recommended)

1. Push kode ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Set environment variables di Vercel dashboard
4. Deploy!

### Netlify

1. Push kode ke GitHub
2. Connect repository di [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Set environment variables
6. Deploy!

## Tips Optimization

1. **Compress Images**: Gunakan tools seperti TinyPNG sebelum upload gambar
2. **Lazy Loading**: Sudah otomatis dengan Next.js Image component
3. **Metadata**: Update metadata di setiap page untuk SEO
4. **Analytics**: Tambahkan Google Analytics atau analytics lainnya
5. **Sitemap**: Generate sitemap untuk SEO

## Troubleshooting

### Port sudah digunakan
```bash
# Gunakan port lain
npm run dev -- -p 3001
```

### Clear cache Next.js
```bash
rm -rf .next
npm run dev
```

### Install ulang dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

## Support

Jika ada pertanyaan atau masalah, silakan:
1. Cek dokumentasi Next.js: https://nextjs.org/docs
2. Cek dokumentasi Tailwind: https://tailwindcss.com/docs
3. Buat issue di repository

## License

MIT License - Bebas digunakan untuk proyek komersial maupun personal.
