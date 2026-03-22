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

  // Lista de URLs de posts do Instagram para exibir
  // Substitua pelos IDs reais dos seus posts
  const instagramPostUrls = [
    'https://www.instagram.com/p/XXXXXXXXX/', // Substitua com ID real
    'https://www.instagram.com/p/YYYYYYYYY/', // Substitua com ID real
    'https://www.instagram.com/p/ZZZZZZZZZ/', // Substitua com ID real
    'https://www.instagram.com/p/AAAAAAAAAA/', // Substitua com ID real
    'https://www.instagram.com/p/BBBBBBBBBB/', // Substitua com ID real
    'https://www.instagram.com/p/CCCCCCCCCC/', // Substitua com ID real
  ];

  return (
    <section id="instagram-feed" className="py-20 bg-gradient-to-b from-white to-gray-50">
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

        {/* Grid de Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPostUrls.map((url, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{
                background: '#f5f5f5',
                minHeight: '400px',
              }}
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: '0',
                  borderRadius: '3px',
                  boxShadow: 'none',
                  display: 'block',
                  margin: '0 auto',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: '0',
                  width: '100%',
                }}
              />
            </div>
          ))}
        </div>

        {/* Instrução de Configuração */}
        <div
          className="mt-16 p-8 rounded-lg text-center"
          style={{
            background: 'linear-gradient(135deg, #ece0ca, #f5f5f5)',
            border: '2px solid #e0b6a0',
          }}
        >
          <h3 className="text-xl font-bold mb-3" style={{ color: '#1f545a' }}>
            📸 Como Configurar o Feed
          </h3>
          <p style={{ color: '#08554c' }} className="mb-4">
            Para exibir seus posts reais do Instagram, siga estes passos:
          </p>
          <ol
            className="text-left max-w-2xl mx-auto space-y-2"
            style={{ color: '#1f545a' }}
          >
            <li>
              <strong>1.</strong> Acesse seu perfil do Instagram (@carolpansaniballet)
            </li>
            <li>
              <strong>2.</strong> Clique em um post que deseja exibir
            </li>
            <li>
              <strong>3.</strong> Clique nos três pontos (⋯) → "Copiar link"
            </li>
            <li>
              <strong>4.</strong> Substitua as URLs no arquivo{' '}
              <code style={{ background: '#fff', padding: '2px 6px', borderRadius: '4px' }}>
                InstagramFeed.tsx
              </code>
            </li>
            <li>
              <strong>5.</strong> Salve o arquivo e o site atualizará automaticamente
            </li>
          </ol>
          <p className="mt-4 text-sm" style={{ color: '#d7c0b6' }}>
            Os posts serão atualizados em tempo real quando você interagir com eles no Instagram
          </p>
        </div>

        {/* Informação adicional */}
        <div className="text-center mt-12">
          <p style={{ color: '#d7c0b6' }} className="text-sm">
            Quando você postar no Instagram, o site mostra automaticamente sem precisar atualizar manualmente
          </p>
        </div>
      </div>
    </section>
  );
}
