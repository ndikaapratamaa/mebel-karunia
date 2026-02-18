import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'
import RatingSystem from '@/components/ui/RatingSystem'

export const metadata = {
  title: 'Tentang Kami - Mebel Karunia',
  description: 'Tentang Mebel Karunia - Penyedia furniture berkualitas sejak tahun 2010',
}

export default function TentangPage() {
  return (
    <div className="py-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">Tentang Kami</h1>
          <p className="section-subtitle">
            Lebih dari 10 tahun pengalaman dalam industri furniture
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Cerita Kami</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Mebel Karunia didirikan pada tahun 2010 dengan visi menyediakan furniture berkualitas tinggi
                yang menggabungkan desain modern dengan kearifan lokal.
              </p>
              <p>
                Kami percaya bahwa setiap ruangan memiliki ceritanya sendiri, dan furniture yang tepat
                dapat mengubah sebuah rumah menjadi hunian yang nyaman dan penuh makna.
              </p>
              <p>
                Dengan tim craftsman berpengalaman dan dedikasi terhadap kualitas, kami telah melayani
                ratusan klien di seluruh Indonesia, dari hunian pribadi hingga proyek komersial skala besar.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/about/workshop.jpg"
              alt="Workshop Mebel Bisnis"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Rating System - Interactive */}
        <div className="mb-16">
          <RatingSystem />
        </div>

        {/* Values */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Kualitas Terjamin',
                description: 'Menggunakan material pilihan dan proses produksi yang teliti'
              },
              {
                title: 'Desain Inovatif',
                description: 'Menciptakan desain yang modern namun fungsional'
              },
              {
                title: 'Layanan Prima',
                description: 'Memberikan pengalaman terbaik dari konsultasi hingga after-sales'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheck className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: '500+', label: 'Proyek Selesai' },
            { number: '15+', label: 'Tahun Pengalaman' },
            { number: '50+', label: 'Craftsman Ahli' },
            { number: '98%', label: 'Kepuasan Klien' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA - Redesigned dengan background image */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image dengan overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900/95 via-stone-900/90 to-stone-900/80 z-10"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1200')] bg-cover bg-center opacity-40"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 px-8 py-16 md:px-16 md:py-20">
            <div className="max-w-3xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span className="text-sm font-medium text-white">Hubungi Kami</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
                Wujudkan Furniture Impian Anda
              </h2>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-stone-200 mb-8 leading-relaxed max-w-2xl mx-auto">
                Dari sketsa hingga instalasi, kami dampingi setiap tahapan untuk memastikan furniture Anda sempurna
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=Halo, saya ingin konsultasi tentang furniture custom`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-stone-50 text-stone-900 font-semibold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5"
                >
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Chat via WhatsApp</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                <a
                  href="/kontak"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300"
                >
                  Lihat Info Kontak
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 text-white/90">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm font-medium">Garansi 2 Tahun</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm font-medium">Konsultasi Gratis</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm font-medium">Pengiriman Aman</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  )
}
