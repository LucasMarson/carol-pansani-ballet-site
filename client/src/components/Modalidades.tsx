import { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';

// Ícones customizados
const BalletIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="8" r="4" fill="#1f545a" />
    <path d="M20 12L15 18V26L18 32V36H22V32L25 26V18L20 12Z" fill="#1f545a" />
    <path d="M12 20L8 16M28 20L32 16" stroke="#1f545a" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const JazzIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="8" r="4" fill="#1f545a" />
    <path d="M20 12L18 20L16 28L20 32L24 28L22 20L20 12Z" fill="#1f545a" opacity="0.7" />
    <path d="M14 18L10 14M26 18L30 14" stroke="#1f545a" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 28L12 36M24 28L28 36" stroke="#1f545a" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ContemporaryIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="8" r="4" fill="#1f545a" />
    <path d="M20 12L16 16L14 24L18 32L22 24L20 16L20 12Z" fill="#1f545a" />
    <path d="M12 16L8 12M28 16L32 12" stroke="#1f545a" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 24Q10 20 8 28" stroke="#1f545a" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M26 24Q30 20 32 28" stroke="#1f545a" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

const YogaIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="8" r="4" fill="#1f545a" />
    <path d="M20 12L18 16L16 22L20 28L24 22L22 16L20 12Z" fill="#1f545a" />
    <path d="M14 18L10 16M26 18L30 16" stroke="#1f545a" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 24L12 28M24 24L28 28" stroke="#1f545a" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const modalidades = [
  {
    id: 'ballet',
    title: 'Ballet Clássico',
    icon: BalletIcon,
    description: 'O ballet clássico é a base da nossa formação em dança.',
    highlights: [
      'Aulas a partir dos 3 anos, até a fase adulta',
      'Níveis progressivos e estruturados que respeitam o desenvolvimento de cada aluno',
      'Cada etapa da jornada é especial e marcante, desde as primeiras descobertas do movimento',
    ],
    niveis: 'Pré Ballet | Ballet Infantil | Ballet Elementar | Ballet Básico | Ballet Intermediário | Ballet Avançado | Ballet Adulto | Ballet Pontas',
    locais: ['Pedreira', 'Jaguariúna'],
  },
  {
    id: 'jazz',
    title: 'Jazz',
    icon: JazzIcon,
    description: 'O jazz é uma modalidade dinâmica que combina técnica, musicalidade e expressão.',
    highlights: [
      'As aulas são organizadas por idade e/ou nível',
      'Desenvolvimento de coordenação, ritmo, força e presença de palco',
      'Linguagem versátil e envolvente que estimula a criatividade e a confiança',
    ],
    niveis: 'Jazz Infantil | Jazz Básico | Jazz Intermediário | Jazz Avançado',
    locais: ['Pedreira', 'Jaguariúna'],
  },
  {
    id: 'contemporaneo',
    title: 'Dança Contemporânea',
    icon: ContemporaryIcon,
    description: 'A dança contemporânea convida o aluno a explorar novas possibilidades de movimento.',
    highlights: [
      'Trabalhamos elementos como fluidez, peso, respiração e presença',
      'Ampliam o repertório corporal do aluno e estimulam a sensibilidade artística',
      'Valoriza a autenticidade do movimento e abre espaço para investigação e criatividade',
    ],
    niveis: 'Contemporâneo Infantil | Contemporâneo Básico | Contemporâneo Intermediário | Contemporâneo Avançado',
    locais: ['Pedreira', 'Jaguariúna'],
  },
  {
    id: 'yoga',
    title: 'Yoga',
    icon: YogaIcon,
    description: 'Um convite para desenvolver consciência corporal, equilíbrio e bem-estar.',
    highlights: [
      'Prática baseada em Hatha Yoga',
      'Trabalha respiração, alongamento, força e concentração',
      'Complementa o treinamento na dança e oferece momento de conexão consigo mesmo',
    ],
    niveis: 'Yoga Infantil | Yoga Adulto',
    locais: ['Pedreira'],
  },
];

export default function Modalidades() {
  const [expandedId, setExpandedId] = useState<string | null>('ballet');

  return (
    <section id="modalidades" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-section">Nossas Modalidades de Dança</h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-body max-w-2xl mx-auto">
            Cada modalidade é cuidadosamente estruturada para oferecer o melhor aprendizado e desenvolvimento artístico.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {modalidades.map((modalidade) => {
            const Icon = modalidade.icon;
            return (
              <div
                key={modalidade.id}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setExpandedId(expandedId === modalidade.id ? null : modalidade.id)}
                  className="w-full px-6 py-4 bg-white hover:bg-rose-50 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-4 text-left">
                    <Icon />
                    <div>
                      <h3 className="font-bold text-lg" style={{ color: '#1f545a' }}>{modalidade.title}</h3>
                      <p className="text-sm" style={{ color: '#d7c0b6' }}>{modalidade.description}</p>
                    </div>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`transition-transform flex-shrink-0 ${
                      expandedId === modalidade.id ? 'rotate-180' : ''
                    }`}
                    style={{ color: '#e0b6a0' }}
                  />
                </button>

                {expandedId === modalidade.id && (
                  <div className="px-6 py-6 bg-gradient-to-r from-rose-50 to-white border-t border-gray-200 space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3" style={{ color: '#1f545a' }}>Destaques:</h4>
                      <ul className="space-y-2">
                        {modalidade.highlights.map((highlight, index) => (
                          <li key={index} className="flex gap-3" style={{ color: '#1f545a' }}>
                            <span style={{ color: '#e0b6a0' }} className="font-bold">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: '#1f545a' }}>Níveis:</h4>
                      <p style={{ color: '#1f545a' }} className="text-sm">{modalidade.niveis}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {modalidade.locais.map((local) => (
                        <span
                          key={local}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium"
                          style={{
                            background: '#e0b6a0',
                            color: '#1f545a',
                          }}
                        >
                          <MapPin size={14} />
                          {local}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5519982640644"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button group"
          >
            Veja Turmas e Horários
          </a>
        </div>
      </div>
    </section>
  );
}
