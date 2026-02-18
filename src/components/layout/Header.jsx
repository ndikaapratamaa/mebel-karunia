'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Produk', href: '/produk' },
    { name: 'Galeri', href: '/galeri' },
    { name: 'Tentang', href: '/tentang' },
    { name: 'Kontak', href: '/kontak' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-black text-lg tracking-tighter" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>MK</span>
            </div>
            <div>
              <span className="text-lg font-serif font-bold text-stone-900 block leading-none">Mebel Karunia</span>
              <span className="text-[10px] text-stone-500 tracking-wider">SEJAK 2010</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
              className="btn-primary flex items-center gap-2"
            >
              <FaPhone />
              <span className="hidden lg:inline">Hubungi Kami</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-primary-600"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
              className="block mt-4 btn-primary text-center"
            >
              Hubungi Kami
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
