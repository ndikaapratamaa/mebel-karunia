import { notFound } from 'next/navigation'
import { products } from '@/lib/data/products'
import Image from 'next/image'
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa'

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductDetailPage({ params }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <div className="mb-6">
              <span className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-primary-600">
                {product.price}
              </p>
            </div>

            <div className="prose max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            {product.specs && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Spesifikasi:</h3>
                <ul className="space-y-2">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <li key={key} className="flex">
                      <span className="font-medium w-32">{key}:</span>
                      <span className="text-gray-700">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="space-y-4">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=Halo, saya tertarik dengan ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
              >
                <FaWhatsapp className="text-xl" />
                Pesan via WhatsApp
              </a>
              
              <a
                href="/kontak"
                className="flex items-center justify-center gap-2 w-full btn-secondary"
              >
                <FaEnvelope />
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
