import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-stone-50">
      {/* Background pattern sangat subtle */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container relative py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Image First (berbeda dari biasanya) */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              {/* Main image dengan style polaroid */}
              <div className="relative">
                <div className="bg-white p-3 md:p-4 shadow-2xl" style={{ transform: 'rotate(-2deg)' }}>
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src="/images/hero-furniture.jpg"
                      alt="Handcrafted Furniture"
                      fill
                      className="object-cover grayscale-[20%]"
                      priority
                    />
                  </div>
                  <div className="mt-2 md:mt-3 text-center">
                    <p className="text-xs md:text-sm text-stone-500 font-medium" style={{ fontFamily: 'cursive' }}>
                      Meja Kerja Custom, 2024
                    </p>
                  </div>
                </div>
              </div>

              {/* Small polaroid accent - hidden on mobile */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 md:w-48 md:h-48 bg-white p-3 shadow-xl hidden md:block" style={{ transform: 'rotate(8deg)' }}>
                <div className="relative w-full h-28 md:h-32 bg-stone-200"></div>
                <p className="text-xs text-stone-500 mt-2 text-center" style={{ fontFamily: 'cursive' }}>Workshop kami</p>
              </div>

              {/* Sticker badge */}
              <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-20 h-20 md:w-24 md:h-24 bg-amber-400 rounded-full flex items-center justify-center shadow-lg" style={{ transform: 'rotate(-15deg)' }}>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-stone-900">15</div>
                  <div className="text-[10px] md:text-xs text-stone-800 font-medium -mt-1">TAHUN</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 space-y-4 md:space-y-6">
            {/* Small text */}
            <div className="flex items-center gap-3">
              <div className="h-px w-8 md:w-12 bg-stone-400"></div>
              <span className="text-xs md:text-sm uppercase tracking-widest text-stone-600 font-medium">
                Mebel Karunia
              </span>
            </div>

            {/* Main heading - lebih editorial */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif leading-[1.1] text-stone-900">
              Furniture<br/>
              yang Punya<br/>
              <span className="italic text-stone-700">Jiwa</span>
            </h1>
            
            {/* Description - lebih storytelling */}
            <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-md border-l-4 border-amber-400 pl-4">
              Kayu jati pilihan. Tangan terampil. Waktu yang cukup. 
              Tiga hal sederhana untuk menciptakan furniture yang bertahan lama.
            </p>

            {/* CTA - lebih subtle */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4">
              <Link 
                href="/produk" 
                className="group inline-flex items-center gap-3 text-stone-900 font-medium"
              >
                <span className="text-base md:text-lg">Lihat Koleksi</span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-stone-900 flex items-center justify-center group-hover:bg-stone-900 transition-colors">
                  <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </div>

            {/* Social proof - minimalis */}
            <div className="pt-6 md:pt-8 flex items-center gap-4 md:gap-6 text-sm">
              <div className="flex -space-x-2 md:-space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-gradient-to-br from-stone-300 to-stone-400"></div>
                ))}
              </div>
              <div>
                <div className="font-medium text-stone-900 text-sm md:text-base">500+ pelanggan</div>
                <div className="text-stone-500 text-xs md:text-sm">sudah percaya</div>
              </div>
            </div>

            {/* Contact link - sangat subtle */}
            <div className="pt-4 md:pt-6">
              <a 
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs md:text-sm text-stone-500 hover:text-stone-900 transition-colors group"
              >
                <span>Atau diskusi via WhatsApp</span>
                <svg className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-stone-400">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-px h-12 bg-stone-300 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
