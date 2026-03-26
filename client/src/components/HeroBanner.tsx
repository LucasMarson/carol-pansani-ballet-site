import { ArrowRight } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section 
      className="relative pt-40 pb-40 overflow-hidden"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663366457387/fjdwjaCuRrvPJfYtyiVHm2/DSC02043_2b8faf88.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay escuro elegante */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(31, 84, 90, 0.75) 0%, rgba(8, 85, 76, 0.65) 50%, rgba(31, 84, 90, 0.75) 100%)',
        }}
      />

      {/* Conteúdo */}
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 
              className="heading-display text-white drop-shadow-lg"
              style={{
                textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              }}
            >
              Carol Pansani Ballet
            </h1>
            
            <div className="flex justify-center">
              <div 
                className="h-1 w-24"
                style={{ background: '#e0b6a0' }}
              />
            </div>

            <p 
              className="text-2xl md:text-3xl font-light leading-relaxed text-white drop-shadow-lg"
              style={{
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
              }}
            >
              Profissionalismo, sensibilidade e acolhimento em forma de arte.
            </p>

            <p 
              className="text-lg text-rose-100 drop-shadow-lg"
              style={{
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
              }}
            >
              Duas cidades com uma só comunidade.
            </p>

            <p 
              className="text-sm font-semibold uppercase tracking-widest drop-shadow-lg"
              style={{
                color: '#e0b6a0',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
              }}
            >
              Unidades em Pedreira e Jaguariúna
            </p>
          </div>

          <div className="pt-8">
            <a
              href="https://wa.me/5519982640644"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg"
              style={{
                background: '#e0b6a0',
                color: '#1f545a',
              }}
            >
              Agende uma Visita
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
