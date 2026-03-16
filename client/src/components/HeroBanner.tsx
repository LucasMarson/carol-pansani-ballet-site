import { ArrowRight } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white via-rose-50 to-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="heading-display mb-4">
                Carol Pansani Ballet
              </h1>
              <div className="section-divider mb-6"></div>
              <p className="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed">
                Profissionalismo, sensibilidade e acolhimento em forma de arte.
              </p>
              <p className="text-lg text-gray-600 mt-4">
                Duas cidades com uma só comunidade.
              </p>
              <p className="text-sm font-semibold text-primary mt-6 uppercase tracking-widest">
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
          <div className="relative h-96 md:h-full min-h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🩰</div>
                <p className="text-gray-600 font-semibold">Galeria de Fotos</p>
                <p className="text-sm text-gray-500 mt-2">Adicione imagens aqui</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
