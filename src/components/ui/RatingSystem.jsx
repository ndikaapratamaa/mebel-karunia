'use client'

import { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import { dummyReviews } from '@/lib/data/dummyReviews'

export default function RatingSystem() {
  const [userRatings, setUserRatings] = useState([])
  const [userRating, setUserRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [hasRated, setHasRated] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [userName, setUserName] = useState('')
  const [comment, setComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isStorageAvailable, setIsStorageAvailable] = useState(false)

  // Gabungkan dummy + user ratings
  const allRatings = [...userRatings, ...dummyReviews]
  const totalReviews = allRatings.length

  // Check if storage is available
  useEffect(() => {
    const checkStorage = async () => {
      try {
        if (typeof window !== 'undefined' && window.storage) {
          setIsStorageAvailable(true)
          await loadRatings()
        } else {
          // Fallback: use localStorage
          const stored = localStorage.getItem('ratings-local')
          if (stored) {
            setUserRatings(JSON.parse(stored))
          }
        }
      } catch (error) {
        console.log('Storage not available, using fallback')
      }
    }

    // Check if user has rated
    const rated = localStorage.getItem('has_rated')
    if (rated) {
      setHasRated(true)
    }

    checkStorage()
  }, [])

  const loadRatings = async () => {
    try {
      const result = await window.storage.get('ratings-data', true)
      if (result && result.value) {
        setUserRatings(JSON.parse(result.value))
      }
    } catch (error) {
      // Fallback to localStorage
      const stored = localStorage.getItem('ratings-local')
      if (stored) {
        setUserRatings(JSON.parse(stored))
      }
    }
  }

  // Calculate average rating dari semua reviews
  const averageRating = allRatings.length > 0 
    ? (allRatings.reduce((acc, r) => acc + r.rating, 0) / allRatings.length).toFixed(1)
    : '5.0'

  const handleStarClick = (rating) => {
    if (hasRated) return
    setUserRating(rating)
    setShowForm(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!userName.trim() || userRating === 0) return

    setIsSubmitting(true)

    const newRating = {
      id: Date.now(),
      name: userName,
      rating: userRating,
      comment: comment,
      date: 'Baru saja'
    }

    const updatedRatings = [newRating, ...userRatings]

    try {
      if (isStorageAvailable && window.storage) {
        await window.storage.set('ratings-data', JSON.stringify(updatedRatings), true)
      } else {
        // Fallback: localStorage
        localStorage.setItem('ratings-local', JSON.stringify(updatedRatings))
      }
      
      setUserRatings(updatedRatings)
      setHasRated(true)
      localStorage.setItem('has_rated', 'true')
      setShowForm(false)
      setUserName('')
      setComment('')
    } catch (error) {
      console.error('Error saving rating:', error)
      alert('Maaf, terjadi kesalahan saat menyimpan rating. Silakan coba lagi.')
    }

    setIsSubmitting(false)
  }

  // Rating distribution
  const getRatingCount = (star) => {
    return allRatings.filter(r => r.rating === star).length
  }

  return (
    <div id="rating-section" className="bg-white rounded-2xl border-2 border-stone-200 p-6 md:p-8 scroll-mt-20">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-serif font-bold text-stone-900 mb-1">Rating Pelanggan</h3>
          <p className="text-sm text-stone-500">Berdasarkan &gt;{totalReviews} ulasan</p>
        </div>
        
        <div className="text-right">
          <div className="text-4xl font-bold text-stone-900">{averageRating}</div>
          <div className="flex gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={i < Math.round(parseFloat(averageRating)) ? 'text-amber-400' : 'text-stone-300'}
                size={16}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Rating bars */}
      <div className="space-y-2 mb-6">
        {[5, 4, 3, 2, 1].map((star) => {
          const count = getRatingCount(star)
          const percentage = allRatings.length > 0 ? (count / allRatings.length) * 100 : 0
          
          return (
            <div key={star} className="flex items-center gap-3">
              <div className="flex items-center gap-1 w-16">
                <span className="text-sm font-medium text-stone-700">{star}</span>
                <FaStar className="text-amber-400" size={12} />
              </div>
              <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <span className="text-sm text-stone-500 w-12 text-right">{count}</span>
            </div>
          )
        })}
      </div>

      {/* Rating form */}
      {!hasRated && !showForm && (
        <div className="text-center py-6 border-t border-stone-200">
          <p className="text-stone-600 mb-4">Bagaimana pengalaman Anda dengan kami?</p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="transition-transform hover:scale-125"
                type="button"
              >
                <FaStar 
                  className={`${
                    star <= (hoverRating || userRating) 
                      ? 'text-amber-400' 
                      : 'text-stone-300'
                  } transition-colors cursor-pointer`}
                  size={32}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Form untuk nama dan komentar */}
      {showForm && !hasRated && (
        <form onSubmit={handleSubmit} className="border-t border-stone-200 pt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Nama Anda *
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              placeholder="Masukkan nama Anda"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Komentar (opsional)
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none resize-none"
              rows={3}
              placeholder="Ceritakan pengalaman Anda..."
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-stone-900 hover:bg-stone-800 text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Mengirim...' : 'Kirim Rating'}
            </button>
            <button
              type="button"
              onClick={() => {
                setShowForm(false)
                setUserRating(0)
              }}
              className="px-6 bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium py-3 rounded-lg transition-colors"
            >
              Batal
            </button>
          </div>
        </form>
      )}

      {/* Sudah rating */}
      {hasRated && (
        <div className="text-center py-6 border-t border-stone-200">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm font-medium">Terima kasih atas rating Anda!</span>
          </div>
        </div>
      )}

      {/* Recent reviews - USER + DUMMY GABUNG! */}
      {allRatings.length > 0 && (
        <div className="mt-6 pt-6 border-t border-stone-200">
          <h4 className="font-semibold text-stone-900 mb-4">Ulasan Terbaru</h4>
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {allRatings.slice(0, 10).map((rating) => (
              <div key={rating.id} className="bg-stone-50 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-medium text-stone-900">{rating.name}</div>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={i < rating.rating ? 'text-amber-400' : 'text-stone-300'}
                          size={12}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-stone-500">{rating.date}</span>
                </div>
                {rating.comment && (
                  <p className="text-sm text-stone-700 mt-2">{rating.comment}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
