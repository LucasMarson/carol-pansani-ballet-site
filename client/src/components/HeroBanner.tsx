import { ArrowRight } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="pt-32 pb-20" style={{ background: 'linear-gradient(135deg, #fefdfb 0%, rgba(224, 182, 160, 0.08) 50%, #fefdfb 100%)' }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="heading-display mb-4">
                Carol Pansani Ballet
              </h1>
              <div className="section-divider mb-6"></div>
              <p className="text-2xl md:text-3xl font-light leading-relaxed" style={{ color: '#1f545a' }}>
                Profissionalismo, sensibilidade e acolhimento em forma de arte.
              </p>
              <p className="text-lg mt-4" style={{ color: '#08554c' }}>
                Duas cidades com uma só comunidade.
              </p>
              <p className="text-sm font-semibold mt-6 uppercase tracking-widest" style={{ color: '#e0b6a0' }}>
                Unidades em Pedreira e Jaguariúna
              </p>
            </div>

            <a
              href="https://wa.me/5519982640644"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button group w-fit"
            >
              Agende uma Visita
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Image Placeholder */}
          <div 
            className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, rgba(224, 182, 160, 0.15), rgba(215, 192, 182, 0.15))' }}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🩰</div>
              <p className="font-semibold" style={{ color: '#1f545a' }}>Galeria de Fotos</p>
              <p className="text-sm mt-2" style={{ color: '#08554c' }}>Adicione imagens aqui</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
