import { useEffect } from 'react';
import { Instagram } from 'lucide-react';

export default function InstagramFeed() {
  useEffect(() => {
    // Carregar o script do Elfsight
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Limpar o script quando o componente desmontar
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="instagram-feed" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram size={32} style={{ color: '#e0b6a0' }} />
            <h2 className="heading-section">Siga no Instagram</h2>
          </div>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-body max-w-2xl mx-auto">
            Acompanhe os últimos momentos, aulas e apresentações direto do Instagram
          </p>
        </div>

        {/* Elfsight Instagram Feed Widget */}
        <div className="flex justify-center">
          <div
            className="elfsight-app"
            data-elfsight-app-lazy
            data-elfsight-app-id="f3b4c2a0-1234-5678-9abc-def012345678"
          ></div>
        </div>

        {/* Fallback Link */}
        <div className="text-center mt-12">
          <p className="text-sm mb-4" style={{ color: '#d7c0b6' }}>
            Não consegue ver o feed? Acesse diretamente:
          </p>
          <a
            href="https://instagram.com/carolpansaniballet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #e0b6a0, #d7c0b6)',
              color: '#1f545a',
            }}
          >
            <Instagram size={20} />
            @carolpansaniballet
          </a>
        </div>
      </div>
    </section>
  );
}
