import { useEffect } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

export default function InstagramFeed() {
  useEffect(() => {
    // Carregar o script do Instagram para embedar posts
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
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

        {/* Feed do Instagram - Embed direto de posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Post 1 */}
          <div className="flex justify-center">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/carolpansaniballet/"
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                boxShadow:
                  '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: '0',
                width: 'calc(100% - 2px)',
              }}
            >
              <div style={{ padding: '16px' }}>
                <a
                  href="https://www.instagram.com/carolpansaniballet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#FFF',
                    lineHeight: '0',
                    padding: '0 0',
                    textAlign: 'center',
                    textDecoration: 'none',
                    width: '100%',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '50%',
                        flexGrow: 0,
                        height: '40px',
                        marginRight: '14px',
                        width: '40px',
                      }}
                    ></div>
                    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                      <div
                        style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '4px',
                          flexGrow: 0,
                          height: '14px',
                          marginBottom: '6px',
                          width: '100px',
                        }}
                      ></div>
                      <div
                        style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '4px',
                          flexGrow: 0,
                          height: '14px',
                          width: '60px',
                        }}
                      ></div>
                    </div>
                  </div>
                  <div style={{ padding: '19% 0' }}></div>
                  <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                    <svg
                      width="50px"
                      height="50px"
                      viewBox="0 0 60 60"
                      version="1.1"
                      xmlns="https://www.w3.org/2000/svg"
                      xmlnsXlink="https://www.w3.org/1999/xlink"
                    >
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                          <g>
                            <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60 C535.114,60 530.342,55.228 530.342,49.342 L530.342,15.656 C530.342,9.77 535.114,5 541,5 L556.869,5 C562.755,5 567.527,9.77 567.527,15.656 L567.527,49.342 C567.527,55.228 562.755,60 556.869,60 L541,60 Z M541,15.109 L556.869,15.109 C558.924,15.109 560.59,16.775 560.59,18.83 L560.59,49.342 C560.59,51.397 558.924,53.063 556.869,53.063 L541,53.063 C538.945,53.063 537.279,51.397 537.279,49.342 L537.279,18.83 C537.279,16.775 538.945,15.109 541,15.109 Z" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div style={{ paddingTop: '8px' }}>
                    <div
                      style={{
                        color: '#3897f0',
                        fontFamily: 'Arial,sans-serif',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: 550,
                        lineHeight: '18px',
                      }}
                    >
                      Ver esta publicação no Instagram
                    </div>
                  </div>
                </a>
              </div>
            </blockquote>
          </div>
        </div>

        {/* CTA para seguir */}
        <div className="text-center">
          <p className="text-sm mb-6" style={{ color: '#d7c0b6' }}>
            Siga @carolpansaniballet para ver todas as postagens e atualizações em tempo real
          </p>
          <a
            href="https://instagram.com/carolpansaniballet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #e0b6a0, #d7c0b6)',
              color: '#1f545a',
            }}
          >
            <Instagram size={20} />
            Seguir no Instagram
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
