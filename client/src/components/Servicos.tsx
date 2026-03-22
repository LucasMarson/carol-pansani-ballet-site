import { ArrowRight } from 'lucide-react';

// Componentes de ícones customizados - versão elegante
const BallerinasIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="8" r="3.5" fill="#08554c" />
    <path d="M20 11.5C18 11.5 16 13 16 15.5L16 22C16 24 17 26 18 28L18 32H22L22 28C23 26 24 24 24 22L24 15.5C24 13 22 11.5 20 11.5Z" fill="#08554c" />
    <path d="M13 16L10 13M27 16L30 13" stroke="#08554c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 28L14 35M24 28L26 35" stroke="#08554c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PointeShoeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 22C8 18 10 14 14 14H26C30 14 32 18 32 22V28H8V22Z" fill="#08554c" opacity="0.2" />
    <path d="M12 22L14 14L18 12L20 11L22 12L26 14L28 22" stroke="#08554c" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 22H28" stroke="#08554c" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 28L14 24M20 28L20 24M26 28L26 24" stroke="#08554c" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const TheaterIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 10C6 8.9 6.9 8 8 8H32C33.1 8 34 8.9 34 10V24C34 25.1 33.1 26 32 26H8C6.9 26 6 25.1 6 24V10Z" stroke="#08554c" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    <path d="M10 14H30M10 18H30" stroke="#08554c" strokeWidth="1" strokeLinecap="round" />
    <path d="M8 26L6 32M32 26L34 32M20 26V32" stroke="#08554c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="20" cy="16" r="2" fill="#08554c" opacity="0.6" />
  </svg>
);

const WaltzCoupleIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Homem à esquerda */}
    <circle cx="12" cy="8" r="2.5" fill="#08554c" />
    <path d="M12 10.5L10 14L12 16L14 14L12 10.5Z" fill="#08554c" />
    <path d="M10 14L8 22M14 14L16 22" stroke="#08554c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 22L6 32M16 22L18 32" stroke="#08554c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Mulher à direita */}
    <circle cx="28" cy="8" r="2.5" fill="#08554c" />
    <path d="M28 10.5L26 14L28 16L30 14L28 10.5Z" fill="#08554c" />
    <path d="M26 14L24 22M30 14L32 22" stroke="#08554c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 22L22 32M32 22L34 32" stroke="#08554c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Conexão/abraço entre eles */}
    <path d="M14 14Q20 12 26 14" stroke="#08554c" strokeWidth="1.2" fill="none" opacity="0.7" strokeLinecap="round" />
  </svg>
);

const ShoppingIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 12H32L30 28C30 29.1 29.1 30 28 30H12C10.9 30 10 29.1 10 28L8 12Z" stroke="#08554c" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    <path d="M12 12L14 6H26L28 12" stroke="#08554c" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    <path d="M16 18V26M20 18V26M24 18V26" stroke="#08554c" strokeWidth="1" strokeLinecap="round" />
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
    icon: ShoppingIcon,
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
                <div className="mb-4 flex justify-center">
                  <Icon />
                </div>
                <h3 className="font-bold text-lg mb-3 text-center" style={{ color: '#1f545a' }}>{servico.title}</h3>
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
