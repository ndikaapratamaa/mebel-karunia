import ContactForm from '@/components/forms/ContactForm'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaClock } from 'react-icons/fa'

export const metadata = {
  title: 'Kontak Kami - Mebel Karunia',
  description: 'Hubungi kami untuk konsultasi dan pemesanan furniture',
}

export default function KontakPage() {
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Alamat',
      content: process.env.NEXT_PUBLIC_ADDRESS || 'Jakarta, Indonesia',
    },
    {
      icon: FaPhone,
      title: 'Telepon',
      content: process.env.NEXT_PUBLIC_PHONE || '(021) 1234-5678',
      link: `tel:${process.env.NEXT_PUBLIC_PHONE}`,
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      content: '+62 812-3456-7890',
      link: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`,
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: process.env.NEXT_PUBLIC_EMAIL || 'info@mebelbisnis.com',
      link: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
    },
    {
      icon: FaClock,
      title: 'Jam Operasional',
      content: 'Senin - Sabtu: 09:00 - 18:00',
    },
  ]

  return (
    <div className="py-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">Hubungi Kami</h1>
          <p className="section-subtitle">
            Ada pertanyaan? Tim kami siap membantu Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Informasi Kontak</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-xl text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666890489311!2d106.82493931471841!3d-6.175392995528013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonas!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Kirim Pesan</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
