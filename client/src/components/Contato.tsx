import { MessageCircle, Instagram, TrendingUp } from 'lucide-react';

export default function Contato() {
  return (
    <section id="contato" className="py-20 bg-rose-50">
      <div className="container">
        {/* Instagram Section */}
        <div className="mb-16 text-center">
          <h2 className="heading-section">Nos Siga no Instagram</h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-body max-w-2xl mx-auto mb-8">
            Quer aprender passos e conhecer mais sobre as nossas aulas e produções? Nos siga no Instagram para acompanhar nossos reels, stories e momentos especiais.
          </p>
          <a
            href="https://instagram.com/carolpansaniballet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            <Instagram size={20} />
            @carolpansaniballet
          </a>
        </div>

        {/* Contact Section */}
        <div className="mb-16">
          <h2 className="heading-section text-center mb-12">Entre em Contato</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5519982640644"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl"
            >
              <MessageCircle size={40} className="text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2" style={{ color: '#2C3E50' }}>WhatsApp</h3>
              <p className="text-gray-600 font-semibold">(19) 98264-0644</p>
              <p className="text-sm text-gray-500 mt-2">Resposta rápida</p>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/carolpansaniballet"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl"
            >
              <Instagram size={40} className="text-pink-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2" style={{ color: '#2C3E50' }}>Instagram</h3>
              <p className="text-gray-600 font-semibold">@carolpansaniballet</p>
              <p className="text-sm text-gray-500 mt-2">Conteúdo diário</p>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@carolpansaniballet"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl"
            >
              <TrendingUp size={40} className="text-black mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2" style={{ color: '#2C3E50' }}>TikTok</h3>
              <p className="text-gray-600 font-semibold">@carolpansaniballet</p>
              <p className="text-sm text-gray-500 mt-2">Vídeos virais</p>
            </a>
          </div>
        </div>


      </div>
    </section>
  );
}
