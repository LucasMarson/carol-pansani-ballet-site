import { useEffect } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

export default function InstagramFeed() {
  useEffect(() => {
    // Carregar o script do Instagram para embedar posts
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Se o script já foi carregado, processar os embeds
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Lista de URLs de posts do Instagram para exibir (últimas 3 postagens)
  // Substitua pelos IDs reais dos seus posts
  const instagramPostUrls = [
    'https://www.instagram.com/p/XXXXXXXXX/', // Substitua com ID real
    'https://www.instagram.com/p/YYYYYYYYY/', // Substitua com ID real
    'https://www.instagram.com/p/ZZZZZZZZZ/', // Substitua com ID real
  ];

  return (
    <section id="instagram-feed" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram size={36} style={{ color: '#e0b6a0' }} />
            <h2 className="heading-section">Últimas Postagens</h2>
          </div>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-body max-w-2xl mx-auto">
            Acompanhe os últimos momentos, aulas e apresentações direto do Instagram
          </p>
        </div>

        {/* Grid de Posts - 3 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {instagramPostUrls.map((url, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border"
              style={{
                borderColor: '#e0b6a0',
                minHeight: '450px',
              }}
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: '0',
                  borderRadius: '0',
                  boxShadow: 'none',
                  display: 'block',
                  margin: '0 auto',
                  maxWidth: '100%',
                  minWidth: '100%',
                  padding: '0',
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          ))}
        </div>

        {/* Instrução de Configuração */}
        <div
          className="mt-16 p-8 rounded-xl text-center border-2"
          style={{
            background: 'linear-gradient(135deg, rgba(236, 224, 202, 0.5), rgba(224, 182, 160, 0.2))',
            borderColor: '#e0b6a0',
          }}
        >
          <h3 className="text-xl font-bold mb-4" style={{ color: '#1f545a' }}>
            📸 Como Configurar com Suas Postagens Reais
          </h3>
          <p style={{ color: '#08554c' }} className="mb-6 text-base">
            Para exibir suas últimas postagens do Instagram automaticamente:
          </p>
          <ol
            className="text-left max-w-3xl mx-auto space-y-3"
            style={{ color: '#1f545a' }}
          >
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0" style={{ color: '#e0b6a0' }}>1.</span>
              <span>Abra seu perfil do Instagram (@carolpansaniballet)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0" style={{ color: '#e0b6a0' }}>2.</span>
              <span>Clique em um post que deseja exibir</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0" style={{ color: '#e0b6a0' }}>3.</span>
              <span>Clique nos três pontos (⋯) → "Copiar link"</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0" style={{ color: '#e0b6a0' }}>4.</span>
              <span>
                Abra o arquivo <code style={{ background: '#fff', padding: '4px 8px', borderRadius: '4px', fontFamily: 'monospace' }}>
                  client/src/components/InstagramFeed.tsx
                </code>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0" style={{ color: '#e0b6a0' }}>5.</span>
              <span>Substitua as URLs (XXXXXXXXX, YYYYYYYYY, ZZZZZZZZZ) pelos IDs reais dos seus posts</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0" style={{ color: '#e0b6a0' }}>6.</span>
              <span>Salve o arquivo (Ctrl + S) e o site atualizará automaticamente</span>
            </li>
          </ol>
          <p className="mt-6 text-sm font-medium" style={{ color: '#08554c' }}>
            ✨ Os posts aparecem em tempo real quando você interage com eles no Instagram
          </p>
        </div>

        {/* Link para Instagram */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/carolpansaniballet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #e0b6a0, #08554c)',
              color: '#fff',
            }}
          >
            <Instagram size={20} />
            Ver Mais no Instagram
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
