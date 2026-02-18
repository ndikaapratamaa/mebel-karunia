import { FaStar } from 'react-icons/fa'

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Ibu Sari',
      initial: 'S',
      verified: true,
      rating: 5,
      date: '2 minggu lalu',
      review: 'Beli meja makan kayu jati disini. Kualitas oke banget, finishing rapih. Mas-masnya helpful banget pas konsultasi ukuran. Pengiriman juga tepat waktu. Recommended!',
      helpful: 12,
    },
    {
      id: 2,
      name: 'Bpk. Rizky',
      initial: 'R',
      verified: true,
      rating: 5,
      date: '1 bulan lalu',
      review: 'Udah langganan dari 2022. Kemarin beli lemari custom lagi buat kamar anak. Sesuai request, bahan solid, harga masih masuk akal. Pelayanan tetep bagus kayak dulu.',
      helpful: 8,
    },
    {
      id: 3,
      name: 'Sarah W.',
      initial: 'SW',
      verified: true,
      rating: 4,
      date: '3 minggu lalu',
      review: 'Beli sofa minimalis. Packingnya rapi, barangnya sesuai foto. Cuma agak lama nunggu produksinya (sekitar 3 minggu) tapi worth it sih. Bahannya premium.',
      helpful: 5,
    },
    {
      id: 4,
      name: 'Ahmad F.',
      initial: 'AF',
      verified: true,
      rating: 5,
      date: '5 hari lalu',
      review: 'Fast respon via WA, dikasih banyak pilihan desain. Akhirnya custom kursi kerja. Hasilnya bagus, ergonomis. Terima kasih!',
      helpful: 3,
    },
  ]

  const overallRating = 4.8
  const totalReviews = 83

  const handleScrollToRating = () => {
    // Scroll ke halaman tentang dimana rating system ada
    window.location.href = '/tentang#rating-section'
  }

  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Header dengan rating summary */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
              Ulasan Pelanggan
            </h2>
            
            {/* Rating summary */}
            <div className="inline-flex flex-col items-center gap-3 p-6 bg-stone-50 rounded-2xl border border-stone-200">
              <div className="flex items-center gap-3">
                <div className="text-5xl font-bold text-stone-900">{overallRating}</div>
                <div className="flex flex-col items-start">
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-amber-400 text-lg" />
                    ))}
                  </div>
                  <div className="text-sm text-stone-600">&gt;{totalReviews} ulasan</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-stone-600 font-medium">Terverifikasi oleh Google</span>
              </div>
            </div>
          </div>

          {/* Review cards */}
          <div className="space-y-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white border border-stone-200 rounded-xl p-5 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                    {review.initial}
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-stone-900">{review.name}</span>
                          {review.verified && (
                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {/* Rating stars */}
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <FaStar 
                                key={i} 
                                className={i < review.rating ? 'text-amber-400' : 'text-stone-300'}
                                size={14}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-stone-500">{review.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Review text */}
                    <p className="text-stone-700 leading-relaxed mb-3 text-[15px]">
                      {review.review}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center gap-4 pt-3 border-t border-stone-100">
                      <button className="flex items-center gap-1.5 text-sm text-stone-600 hover:text-stone-900 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                        </svg>
                        <span>Membantu ({review.helpful})</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View more button - NOW CLICKABLE! */}
          <div className="text-center mt-8">
            <a 
              href="/tentang#rating-section"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-lg transition-colors shadow-lg"
            >
              Lihat Semua Ulasan & Beri Rating
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
