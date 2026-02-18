import { FaCouch, FaChair, FaBed, FaTable, FaDoorOpen, FaTools } from 'react-icons/fa'
import Link from 'next/link'

export default function Categories() {
  const categories = [
    { 
      name: 'Sofa & Kursi', 
      icon: FaCouch, 
      count: '50+',
      color: 'from-amber-400 to-orange-500',
      bgColor: 'bg-amber-50',
      description: 'Kenyamanan maksimal'
    },
    { 
      name: 'Meja', 
      icon: FaTable, 
      count: '40+',
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-50',
      description: 'Desain fungsional'
    },
    { 
      name: 'Tempat Tidur', 
      icon: FaBed, 
      count: '30+',
      color: 'from-red-400 to-pink-500',
      bgColor: 'bg-red-50',
      description: 'Istirahat berkualitas'
    },
    { 
      name: 'Lemari', 
      icon: FaDoorOpen, 
      count: '45+',
      color: 'from-pink-400 to-purple-500',
      bgColor: 'bg-pink-50',
      description: 'Penyimpanan rapi'
    },
    { 
      name: 'Kursi Kerja', 
      icon: FaChair, 
      count: '60+',
      color: 'from-purple-400 to-indigo-500',
      bgColor: 'bg-purple-50',
      description: 'Ergonomis & nyaman'
    },
    { 
      name: 'Custom', 
      icon: FaTools, 
      count: '∞',
      color: 'from-indigo-400 to-blue-500',
      bgColor: 'bg-indigo-50',
      description: 'Sesuai keinginan'
    },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 to-transparent"></div>
      
      <div className="container relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">
            <span className="text-amber-600 font-semibold text-sm">Koleksi Lengkap</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Jelajahi Kategori
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dari ruang tamu hingga kamar tidur, temukan furniture yang sempurna untuk setiap sudut rumah Anda
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href="/produk"
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`relative ${category.bgColor} rounded-2xl p-6 md:p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-white overflow-hidden`}>
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <category.icon className="text-2xl md:text-3xl text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-bold text-gray-900 group-hover:text-white transition-colors mb-1 text-sm md:text-base">
                    {category.name}
                  </h3>
                  
                  <p className="text-xs text-gray-600 group-hover:text-white/90 transition-colors mb-2">
                    {category.description}
                  </p>
                  
                  <div className={`inline-flex items-center gap-1 px-3 py-1 bg-white/80 group-hover:bg-white rounded-full text-xs font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.count} Produk
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-white/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Tidak menemukan yang Anda cari?</p>
          <Link 
            href="/kontak" 
            className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:gap-3 transition-all"
          >
            Konsultasi Custom Furniture
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
