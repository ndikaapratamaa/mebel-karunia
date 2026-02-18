import { products } from '@/lib/data/products'
import ProductCard from '@/components/ui/ProductCard'

export const metadata = {
  title: 'Produk Kami - Mebel Karunia',
  description: 'Katalog lengkap furniture dan mebel berkualitas',
}

export default function ProdukPage() {
  return (
    <div className="py-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title">Produk Kami</h1>
          <p className="section-subtitle">
            Temukan berbagai pilihan furniture berkualitas untuk rumah dan kantor Anda
          </p>
        </div>

        {/* Filter (dapat dikembangkan) */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          {['Semua', 'Sofa', 'Meja', 'Kursi', 'Lemari', 'Custom'].map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-colors whitespace-nowrap"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
