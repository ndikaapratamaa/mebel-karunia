import Image from 'next/image'

export const metadata = {
  title: 'Galeri - Mebel Karunia',
  description: 'Galeri proyek furniture dan mebel yang telah kami kerjakan',
}

const galleryImages = [
  { id: 1, src: '/images/gallery/1.jpg', title: 'Living Room Set', category: 'Residential' },
  { id: 2, src: '/images/gallery/2.jpg', title: 'Office Furniture', category: 'Commercial' },
  { id: 3, src: '/images/gallery/3.jpg', title: 'Custom Wardrobe', category: 'Custom' },
  { id: 4, src: '/images/gallery/4.jpg', title: 'Dining Table', category: 'Residential' },
  { id: 5, src: '/images/gallery/5.jpg', title: 'Kitchen Cabinet', category: 'Custom' },
  { id: 6, src: '/images/gallery/6.jpg', title: 'Meeting Room', category: 'Commercial' },
]

export default function GaleriPage() {
  return (
    <div className="py-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title">Galeri Kami</h1>
          <p className="section-subtitle">
            Lihat berbagai proyek furniture yang telah kami selesaikan
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-lg overflow-hidden bg-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm text-white/80">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Tertarik untuk membuat furniture custom seperti ini?
          </p>
          <a href="/kontak" className="btn-primary">
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </div>
  )
}
