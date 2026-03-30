import { useEffect, useState } from 'react';
import { Instagram, ExternalLink, Loader } from 'lucide-react';

interface InstagramPost {
  id: string;
  url: string;
  caption: string;
  timestamp: string;
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Carregar o script do Instagram para embedar posts
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    // Posts reais do Instagram da Carol Pansani Ballet
    const instagramPosts = [
      {
        id: '1',
        url: 'https://www.instagram.com/carolpansaniballet/reel/DWXT0rkDqVk/',
        caption: 'Últimas aulas de ballet',
        timestamp: 'Recente'
      },
      {
        id: '2',
        url: 'https://www.instagram.com/carolpansaniballet/reel/DWSNtL1ji3c/',
        caption: 'Momentos especiais da escola',
        timestamp: 'Recente'
      },
      {
        id: '3',
        url: 'https://www.instagram.com/carolpansaniballet/p/DWH_lBHjr43/',
        caption: 'Apresentações e eventos',
        timestamp: 'Recente'
      }
    ];

    setPosts(instagramPosts);
    setError(null);
    setLoading(false);

    // Reprocessar embeds do Instagram após um tempo
    setTimeout(() => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    }, 1000);
  }, []);

  // Reprocessar embeds quando posts mudam
  useEffect(() => {
    if (posts.length > 0 && (window as any).instgrm) {
      setTimeout(() => {
        (window as any).instgrm.Embeds.process();
      }, 500);
    }
  }, [posts]);

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
            <strong>Quer aprender passos e conhecer mais sobre as nossas aulas e produções?</strong><br/>Nos siga no Instagram.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loader size={40} className="animate-spin" style={{ color: '#e0b6a0' }} />
          </div>
        )}

        {/* Grid de Posts - 3 colunas */}
        {!loading && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border animate-fade-in"
                style={{
                  borderColor: '#e0b6a0',
                  minHeight: '450px',
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={post.url}
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
        )}

        {/* Error State */}
        {error && (
          <div
            className="p-8 rounded-lg text-center mb-12 border-2"
            style={{
              background: 'linear-gradient(135deg, rgba(236, 224, 202, 0.5), rgba(224, 182, 160, 0.2))',
              borderColor: '#e0b6a0',
            }}
          >
            <p style={{ color: '#1f545a' }}>
              Não foi possível carregar os posts no momento. Tente novamente mais tarde.
            </p>
          </div>
        )}

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

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}