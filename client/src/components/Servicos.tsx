import { ArrowRight } from 'lucide-react';

// Componentes de ícones customizados
const BallerinasIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="6" r="3" fill="#08554c" />
    <path d="M16 9L12 13V18L14 22V26H18V22L20 18V13L16 9Z" fill="#08554c" />
    <path d="M10 14L8 12M22 14L24 12" stroke="#08554c" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PointeShoeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 18C8 14 10 10 14 10H18C22 10 24 14 24 18V24H8V18Z" fill="#08554c" opacity="0.3" />
    <path d="M10 18L12 12L14 10L16 9L18 10L20 12L22 18" stroke="#08554c" strokeWidth="1.5" fill="none" />
    <path d="M10 18H22" stroke="#08554c" strokeWidth="2" />
    <path d="M12 24L12 20M16 24L16 20M20 24L20 20" stroke="#08554c" strokeWidth="1.5" />
  </svg>
);

const TheaterIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="24" height="16" rx="2" stroke="#08554c" strokeWidth="1.5" fill="none" />
    <path d="M8 10H24M8 14H24M8 18H24" stroke="#08554c" strokeWidth="1" />
    <path d="M6 22L8 26M26 22L24 26M16 22V26" stroke="#08554c" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const WaltzCoupleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Homem */}
    <circle cx="10" cy="6" r="2.5" fill="#08554c" />
    <path d="M10 8L8 12L10 14L12 12L10 8Z" fill="#08554c" />
    <path d="M8 12L6 18M12 12L14 18" stroke="#08554c" strokeWidth="1.5" />
    
    {/* Mulher */}
    <circle cx="22" cy="6" r="2.5" fill="#08554c" />
    <path d="M22 8L20 12L22 14L24 12L22 8Z" fill="#08554c" />
    <path d="M20 12L18 20M24 12L26 20" stroke="#08554c" strokeWidth="1.5" />
    
    {/* Conexão entre eles */}
    <path d="M12 12L20 12" stroke="#08554c" strokeWidth="1.5" opacity="0.6" />
  </svg>
);

const servicos = [
  {
    icon: BallerinasIcon,
    title: 'Aulas',
    description: 'Turmas organizadas por faixa etária e/ou nível, com ensino técnico de ponta e professores 100% qualificados',
  },
  {
    icon: TheaterIcon,
    title: 'Espetáculos',
    description: 'Uma experiência mágica e imersiva na arte e nos mais diversos mundos, desenvolvendo expressão, confiança e trabalho em equipe',
  },
  {
    icon: PointeShoeIcon,
    title: 'Fitting',
    description: 'Consultoria especializada para sapatilhas de ponta, para melhores cuidados com os pés, prevenção de lesões e melhor performance',
  },
  {
    icon: () => (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 8H26V24C26 25.1 25.1 26 24 26H8C6.9 26 6 25.1 6 24V8Z" stroke="#08554c" strokeWidth="1.5" fill="none" />
        <path d="M10 12H22M10 16H22M10 20H22" stroke="#08554c" strokeWidth="1" />
        <path d="M8 8L6 4H26L24 8" fill="#08554c" opacity="0.3" />
      </svg>
    ),
    title: 'Lojinha',
    description: 'Os melhores produtos de dança, à pronta-entrega para o que você precisar',
  },
  {
    icon: WaltzCoupleIcon,
    title: 'Coreografias',
    description: 'Para festas de 15 anos, casamentos e até competições',
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-20" style={{ background: 'linear-gradient(135deg, rgba(236, 224, 202, 0.4), rgba(224, 182, 160, 0.15))' }}>
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
                className="card-hover bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4"
                style={{ borderColor: '#e0b6a0' }}
              >
                <div className="mb-4">
                  <Icon />
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: '#1f545a' }}>{servico.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#1f545a' }}>{servico.description}</p>
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
