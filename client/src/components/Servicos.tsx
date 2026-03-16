import { Music, Sparkles, Footprints, ShoppingBag, Wand2, ArrowRight } from 'lucide-react';

const servicos = [
  {
    icon: Music,
    title: 'Aulas',
    description: 'Turmas organizadas por faixa etária e/ou nível, com ensino técnico de ponta e professores 100% qualificados',
  },
  {
    icon: Sparkles,
    title: 'Espetáculos',
    description: 'Uma experiência mágica e imersiva na arte e nos mais diversos mundos, desenvolvendo expressão, confiança e trabalho em equipe',
  },
  {
    icon: Footprints,
    title: 'Fitting',
    description: 'Consultoria especializada para sapatilhas de ponta, para melhores cuidados com os pés, prevenção de lesões e melhor performance',
  },
  {
    icon: ShoppingBag,
    title: 'Lojinha',
    description: 'Os melhores produtos de dança, à pronta-entrega para o que você precisar',
  },
  {
    icon: Wand2,
    title: 'Coreografias',
    description: 'Para festas de 15 anos, casamentos e até competições',
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-20 bg-rose-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-section">Nossos Serviços</h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-body max-w-2xl mx-auto">
            Na nossa Escola, bem-estar, leveza e encantamento se encontram – tanto dentro da sala de aula quanto nos palcos. Porque criar uma experiência inesquecível para quem vive é o que importa pra gente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {servicos.map((servico, index) => {
            const Icon = servico.icon;
            return (
              <div
                key={index}
                className="card-hover bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <Icon size={32} className="text-primary mb-4" />
                <h3 className="font-bold text-lg mb-3" style={{ color: '#2C3E50' }}>{servico.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{servico.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5519982640644"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button group"
          >
            Consulte Valores Agora
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
