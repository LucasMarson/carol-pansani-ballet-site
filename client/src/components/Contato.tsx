import { MessageCircle, Instagram, TrendingUp } from 'lucide-react';

export default function Contato() {
  return (
    <section id="contato" className="py-20" style={{ background: 'linear-gradient(135deg, rgba(236, 224, 202, 0.5), rgba(224, 182, 160, 0.2))' }}>
      <div className="container">
        {/* Contact Section */}
        <div className="mb-16">
          <h2 className="heading-section text-center mb-12">Entre em Contato</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Instagram */}
            <a
              href="https://instagram.com/carolpansaniballet"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl border-l-4 transition-all"
              style={{ borderColor: '#e0b6a0' }}
            >
              <Instagram size={40} style={{ color: '#e0b6a0' }} className="mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2" style={{ color: '#1f545a' }}>Instagram</h3>
              <p className="font-semibold" style={{ color: '#1f545a' }}>@carolpansaniballet</p>
              <p className="text-sm mt-2" style={{ color: '#08554c' }}>Conteúdo diário</p>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@carolpansaniballet"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl border-l-4 transition-all"
              style={{ borderColor: '#e0b6a0' }}
            >
              <TrendingUp size={40} style={{ color: '#165226' }} className="mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2" style={{ color: '#1f545a' }}>TikTok</h3>
              <p className="font-semibold" style={{ color: '#1f545a' }}>@carolpansaniballet</p>
              <p className="text-sm mt-2" style={{ color: '#08554c' }}>Vídeos virais</p>
            </a>

            {/* WhatsApp - Por último */}
            <a
              href="https://wa.me/5519982640644"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl border-l-4 transition-all"
              style={{ borderColor: '#08554c' }}
            >
              <MessageCircle size={40} style={{ color: '#08554c' }} className="mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2" style={{ color: '#1f545a' }}>WhatsApp</h3>
              <p className="font-semibold" style={{ color: '#1f545a' }}>(19) 98264-0644</p>
              <p className="text-sm mt-2" style={{ color: '#08554c' }}>Resposta rápida</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
