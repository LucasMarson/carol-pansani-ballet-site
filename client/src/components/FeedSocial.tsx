import { useEffect, useState } from 'react';
import { Instagram, Music2, ExternalLink } from 'lucide-react';

interface InstagramPost {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  timestamp: string;
  permalink: string;
}

interface TikTokVideo {
  id: string;
  desc: string;
  video: {
    downloadAddr: string;
  };
  author: {
    id: string;
    uniqueId: string;
  };
  createTime: number;
}

export default function FeedSocial() {
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
  const [tiktokVideos, setTiktokVideos] = useState<TikTokVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSocialFeeds = async () => {
      try {
        setLoading(true);
        
        // Fetch Instagram Feed
        // Note: Você precisa configurar as credenciais do Instagram Graph API
        // Para usar isso, você vai precisar de:
        // 1. Instagram Business Account
        // 2. Facebook App com Instagram Graph API habilitada
        // 3. Access Token
        
        const instagramAccessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
        const instagramBusinessAccountId = import.meta.env.VITE_INSTAGRAM_BUSINESS_ACCOUNT_ID;

        if (instagramAccessToken && instagramBusinessAccountId) {
          try {
            const instagramResponse = await fetch(
              `https://graph.instagram.com/${instagramBusinessAccountId}/media?fields=id,caption,media_type,media_url,timestamp,permalink&access_token=${instagramAccessToken}`
            );
            
            if (instagramResponse.ok) {
              const data = await instagramResponse.json();
              setInstagramPosts(data.data?.slice(0, 6) || []);
            }
          } catch (err) {
            console.warn('Instagram feed não disponível:', err);
          }
        }

        // Para TikTok, você precisaria de uma solução diferente
        // TikTok não oferece um API público simples para embeds
        // Alternativa: Usar um serviço de terceiros ou embedar manualmente
        
      } catch (err) {
        console.error('Erro ao carregar feeds sociais:', err);
        setError('Erro ao carregar feeds sociais');
      } finally {
        setLoading(false);
      }
    };

    fetchSocialFeeds();
  }, []);

  return (
    <section id="feed-social" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-section">Siga Nossas Redes Sociais</h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-body max-w-2xl mx-auto">
            Acompanhe os últimos momentos, aulas e apresentações direto do Instagram e TikTok
          </p>
        </div>

        {/* Instagram Feed */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Instagram size={28} style={{ color: '#e0b6a0' }} />
            <h3 className="text-2xl font-bold" style={{ color: '#1f545a' }}>
              @carolpansaniballet
            </h3>
            <a
              href="https://instagram.com/carolpansaniballet"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              style={{ color: '#e0b6a0' }}
            >
              Ver Mais <ExternalLink size={18} />
            </a>
          </div>

          {loading && instagramPosts.length === 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-64 rounded-lg bg-gray-200 animate-pulse"
                />
              ))}
            </div>
          ) : instagramPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {instagramPosts.map((post) => (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-64"
                >
                  {post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM' ? (
                    <img
                      src={post.media_url}
                      alt={post.caption || 'Instagram post'}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <video
                      src={post.media_url}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <Instagram size={40} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p style={{ color: '#08554c' }}>
                Conecte sua conta do Instagram para exibir o feed aqui
              </p>
              <p className="text-sm mt-2" style={{ color: '#d7c0b6' }}>
                Adicione as variáveis de ambiente VITE_INSTAGRAM_ACCESS_TOKEN e VITE_INSTAGRAM_BUSINESS_ACCOUNT_ID
              </p>
            </div>
          )}
        </div>

        {/* TikTok Embed - Solução Manual */}
        <div className="border-t-2 pt-16" style={{ borderColor: '#ece0ca' }}>
          <div className="flex items-center gap-3 mb-8">
            <Music2 size={28} style={{ color: '#e0b6a0' }} />
            <h3 className="text-2xl font-bold" style={{ color: '#1f545a' }}>
              @carolpansaniballet
            </h3>
            <a
              href="https://tiktok.com/@carolpansaniballet"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              style={{ color: '#e0b6a0' }}
            >
              Ver Mais <ExternalLink size={18} />
            </a>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 text-center">
            <Music2 size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg font-semibold mb-2" style={{ color: '#1f545a' }}>
              Siga no TikTok
            </p>
            <p className="text-gray-600 mb-6">
              Veja os vídeos mais recentes de aulas, apresentações e momentos da Carol Pansani Ballet
            </p>
            <a
              href="https://tiktok.com/@carolpansaniballet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #e0b6a0, #d7c0b6)',
                color: '#1f545a',
              }}
            >
              <Music2 size={20} />
              Acessar TikTok
            </a>
          </div>

          <p className="text-center text-sm mt-6" style={{ color: '#d7c0b6' }}>
            Para integrar o feed do TikTok automaticamente, você precisará de uma solução de backend ou um serviço de terceiros
          </p>
        </div>
      </div>
    </section>
  );
}
