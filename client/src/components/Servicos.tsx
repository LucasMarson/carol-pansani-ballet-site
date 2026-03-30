import { ArrowRight } from 'lucide-react';

// Componentes de ícones customizados - versão elegante
const BallerinasIcon = () => (
  <img src='/icons/balletclassicoicon.png' width="50" height="50" />
);

const PointeShoeIcon = () => (
  <img src='/icons/fittingicon.png' width="50" height="50" />
);

const TheaterIcon = () => (
  <img src='/icons/espetaculoicon.png' width="50" height="50" />
);

const WaltzCoupleIcon = () => (
  <img src='/icons/coreografiaicon.png' width="50" height="50" color='#e0b6a0'/>
);

const ShoppingIcon = () => (
  <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 12H32L30 28C30 29.1 29.1 30 28 30H12C10.9 30 10 29.1 10 28L8 12Z" stroke="#000000" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    <path d="M12 12L14 6H26L28 12" stroke="#000000" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    <path d="M16 18V26M20 18V26M24 18V26" stroke="#000000" strokeWidth="1" strokeLinecap="round" />
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
                className="card-hover bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 color-#e0b6a0"
                style={{ borderColor: '#e0b6a0' }}
              >
                <div className="mb-4 flex justify-center">
                  <Icon />
                </div>
                <h3 className="font-bold text-lg mb-3 text-center" style={{ color: '#1f545a', fontFamily: 'BlackNo7' }}>{servico.title}</h3>
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
