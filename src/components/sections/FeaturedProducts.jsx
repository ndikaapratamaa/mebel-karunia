import { products } from '@/lib/data/products'
import ProductCard from '@/components/ui/ProductCard'
import Link from 'next/link'

export default function FeaturedProducts() {
  // Get first 6 products as featured
  const featuredProducts = products.slice(0, 6)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Produk Unggulan</h2>
          <p className="section-subtitle">
            Koleksi furniture terbaik kami yang paling diminati
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/produk" className="btn-primary">
            Lihat Semua Produk
          </Link>
        </div>
      </div>
    </section>
  )
}
