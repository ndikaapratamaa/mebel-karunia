# 🚀 Quick Start Guide - Mebel Karunia

Panduan singkat untuk memulai website mebel bisnis Anda dalam 5 menit!

## Step 1: Install Dependencies ⚙️

```bash
cd mebel-bisnis
npm install
```

Tunggu sampai semua packages terinstall.

## Step 2: Setup Informasi Bisnis 📝

Edit file `.env.local` dan ganti dengan info bisnis Anda:

```env
NEXT_PUBLIC_SITE_NAME="Mebel Jaya Furniture"
NEXT_PUBLIC_WHATSAPP="628123456789"        # Nomor WA (tanpa +)
NEXT_PUBLIC_EMAIL="info@mebeljaya.com"
NEXT_PUBLIC_PHONE="(021) 1234-5678"
NEXT_PUBLIC_ADDRESS="Jl. Mebel No. 123, Jakarta"
```

## Step 3: Jalankan Website 🖥️

```bash
npm run dev
```

Buka browser dan kunjungi: **http://localhost:3000**

Selesai! Website Anda sudah running! 🎉

---

## Langkah Selanjutnya

### 1️⃣ Tambah Gambar Produk

Letakkan gambar produk di folder:
```
public/images/products/
```

Contoh:
- `sofa-minimalis.jpg`
- `meja-kayu.jpg`
- `lemari-sliding.jpg`

### 2️⃣ Edit Data Produk

Buka file: `src/lib/data/products.js`

Tambah produk baru:
```js
{
  id: 9,
  slug: 'sofa-l-shape',
  name: 'Sofa L Shape Premium',
  category: 'Sofa',
  price: 'Rp 8.500.000',
  image: '/images/products/sofa-l-shape.jpg',
  description: 'Sofa L shape dengan bahan premium...',
  specs: {
    Material: 'Fabric Import',
    Dimensi: '250 x 180 cm',
    Warna: 'Abu-abu, Coklat',
  },
}
```

### 3️⃣ Ganti Warna Brand (Opsional)

Edit `tailwind.config.js`:
```js
primary: {
  600: '#8B5A3C',  // Warna utama Anda
  700: '#6B4423',  // Warna hover
  // ... dst
}
```

### 4️⃣ Update Konten Halaman

#### Homepage Hero
Edit: `src/components/sections/Hero.jsx`
- Ubah judul
- Ubah deskripsi
- Ubah gambar hero

#### Tentang Kami
Edit: `src/app/tentang/page.jsx`
- Cerita perusahaan
- Nilai-nilai
- Statistik

#### Footer
Edit: `src/components/layout/Footer.jsx`
- Social media links
- Menu tambahan

---

## Build & Deploy 🚀

### Build untuk Production

```bash
npm run build
npm start
```

### Deploy ke Vercel (GRATIS!)

1. Push kode ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Import project dari GitHub
4. Set environment variables (.env.local)
5. Deploy!

Website Anda akan live di: `https://nama-project.vercel.app`

### Deploy ke Netlify (GRATIS!)

1. Push kode ke GitHub
2. Buka [netlify.com](https://netlify.com)
3. New site from Git
4. Connect repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Deploy!

---

## Checklist Sebelum Launch ✅

- [ ] Ganti semua info di `.env.local`
- [ ] Upload gambar produk asli
- [ ] Edit data produk di `products.js`
- [ ] Update halaman "Tentang"
- [ ] Test form kontak
- [ ] Cek link WhatsApp berfungsi
- [ ] Test di mobile & desktop
- [ ] Update Google Maps embed (halaman kontak)
- [ ] Tambah logo di `public/images/logo.png`
- [ ] Ganti favicon

---

## Tips Pro 💡

### 1. SEO Optimization
Setiap halaman sudah punya metadata, tapi Anda bisa customize:

```js
export const metadata = {
  title: 'Judul Halaman - Nama Bisnis',
  description: 'Deskripsi untuk Google',
  keywords: 'mebel, furniture, kursi, meja',
}
```

### 2. Performance
- Compress gambar sebelum upload (gunakan TinyPNG)
- Ukuran gambar produk idealnya: 800x800px atau 1000x1000px
- Format: JPG untuk foto, PNG untuk logo/icon

### 3. WhatsApp Auto Message
Link WhatsApp otomatis terisi pesan:

```js
const message = `Halo, saya tertarik dengan ${productName}`
const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
```

### 4. Google Analytics
Tambahkan tracking code di `src/app/layout.jsx` untuk monitor traffic.

---

## Butuh Bantuan? 🆘

1. Cek file `INSTALLATION.md` untuk panduan lengkap
2. Cek file `STRUKTUR.md` untuk memahami struktur project
3. Dokumentasi Next.js: https://nextjs.org/docs
4. Dokumentasi Tailwind: https://tailwindcss.com/docs

---

## Selamat! 🎉

Website mebel bisnis Anda sudah siap!

Jangan lupa:
- Test semua fitur sebelum launch
- Backup kode secara regular
- Update produk secara berkala
- Monitor performa website

**Happy Coding & Good Luck dengan bisnis mebel Anda!** 🪑🛋️✨
