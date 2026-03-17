import { CheckCircle, ArrowRight } from 'lucide-react';

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20" style={{ background: 'linear-gradient(135deg, #fefdfb 0%, rgba(236, 224, 202, 0.3) 100%)' }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image Placeholder */}
          <div 
            className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-lg order-2 md:order-1 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, rgba(224, 182, 160, 0.12), rgba(8, 85, 76, 0.08))' }}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">📸</div>
              <p className="font-semibold" style={{ color: '#1f545a' }}>Mosaico de Fotos</p>
              <p className="text-sm mt-2" style={{ color: '#08554c' }}>Alunos, Carol e Espetáculos</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div>
              <h2 className="heading-section">Uma Escola Diferente de Tudo</h2>
              <div className="section-divider"></div>
            </div>

            <p className="text-body">
              Com 09 anos de história e centenas de alunos espalhando arte por onde passam, a Carol Pansani Ballet é um lugar para quem busca acolhimento, aconchego e profissionalismo – do atendimento às aulas.
            </p>

            <p className="text-body">
              Nosso cuidado começa na recepção, passa pelos nossos professores (que se especializam todos os anos) e chegam a quem mais importa: nossos alunos e seus pais.
            </p>

            <p className="text-body">
              Pra gente, cada bailarino merece ir no seu ritmo, com todo o respeito e um lema: estar bem, aprender e evoluir. Na técnica e na sensibilidade. Tudo isso com modalidades construídas a partir da formação da nossa Diretora – a Escola do Teatro Bolshoi no Brasil.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle size={24} style={{ color: '#e0b6a0' }} className="flex-shrink-0 mt-1" />
                <span style={{ color: '#1f545a' }}>Professores 100% qualificados</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} style={{ color: '#e0b6a0' }} className="flex-shrink-0 mt-1" />
                <span style={{ color: '#1f545a' }}>Formação baseada no Bolshoi</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} style={{ color: '#e0b6a0' }} className="flex-shrink-0 mt-1" />
                <span style={{ color: '#1f545a' }}>Acolhimento e profissionalismo</span>
              </div>
            </div>

            <a
              href="https://wa.me/5519982640644"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button group w-fit mt-6"
            >
              Venha Conhecer de Perto
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
