import Link from 'next/link'
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-900 text-stone-300 relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container relative py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">MK</span>
              </div>
              <div>
                <div className="text-xl font-serif font-bold text-white">Mebel Karunia</div>
                <div className="text-xs text-stone-400">Sejak 2010</div>
              </div>
            </div>
            <p className="text-stone-400 leading-relaxed mb-6 text-sm">
              Furniture kayu solid berkualitas. Dibuat dengan perhatian pada detail dan keahlian craftsman berpengalaman.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-stone-800 hover:bg-amber-600 flex items-center justify-center transition-colors group"
              >
                <FaInstagram className="text-stone-400 group-hover:text-white transition-colors" size={18} />
              </a>
              <a 
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-stone-800 hover:bg-green-600 flex items-center justify-center transition-colors group"
              >
                <FaWhatsapp className="text-stone-400 group-hover:text-white transition-colors" size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigasi</h3>
            <ul className="space-y-3">
              {['Beranda', 'Produk', 'Galeri', 'Tentang', 'Kontak'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Beranda' ? '/' : `/${item.toLowerCase()}`}
                    className="text-stone-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Kategori</h3>
            <ul className="space-y-3">
              {['Sofa & Kursi', 'Meja Makan', 'Lemari', 'Tempat Tidur', 'Custom'].map((item) => (
                <li key={item}>
                  <Link 
                    href="/produk" 
                    className="text-stone-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <FaMapMarkerAlt className="text-amber-500 mt-1 flex-shrink-0" size={14} />
                <span className="text-stone-400 leading-relaxed">{process.env.NEXT_PUBLIC_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaPhone className="text-amber-500 flex-shrink-0" size={14} />
                <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`} className="text-stone-400 hover:text-white transition-colors">
                  {process.env.NEXT_PUBLIC_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaEnvelope className="text-amber-500 flex-shrink-0" size={14} />
                <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="text-stone-400 hover:text-white transition-colors">
                  {process.env.NEXT_PUBLIC_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-stone-500">
              &copy; {currentYear} Mebel Karunia. Handcrafted with care.
            </p>
            <div className="flex items-center gap-6 text-stone-500">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
