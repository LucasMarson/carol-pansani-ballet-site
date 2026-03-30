import { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';

// Ícones customizados elegantes
const BalletIcon = () => (
  <img src='/icons/balletclassicoicon.png' width="40" height="40" />
);

const JazzIcon = () => (
  <img src='/icons/jazz1icon.png' width="40" height="40" />
);

const ContemporaryIcon = () => (
  <img src='/icons/contemporaneo.png' width="40" height="40" />
);

const YogaIcon = () => (
  <img src='/icons/yogaicon.png' width="40" height="40" />
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
      'Cada etapa da jornada é especial e marcante, desde as primeiras descobertas do movimento, passando pelas conquistas simbólicas como a troca do collant, até a preparação técnica para a introdução às pontas.',
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
      'Isso permite que os alunos desenvolvam coordenação, ritimo, força e presença de palco',
      'Com uma linguagem versátil e envolvente, o jazz estimula a criatividade e a confiança, proporcionando aos alunos uma expericnecia artística e cheia de energia e personalidade',
    ],
    niveis: 'Jazz Infantil | Jazz Juvenil | Jazz Adulto',
    locais: ['Pedreira', 'Jaguariúna'],
  },
  {
    id: 'contemporaneo',
    title: 'Dança Contemporânea',
    icon: ContemporaryIcon,
    description: 'A dança contemporânea convida o aluno a explorar novas possibilidades de movimento, conectando técnica, consciência corporal e expressão.',
    highlights: [
      'Trabalhamos elementos como fluidez, peso, respiração e presença',
      'Esses fatores ampliam o repertório corporal do aluno e estimulam a sensibilidade artística',
      'É uma modalidade que valoriza a autenticidade do movimento e abre espaço para investigação e criatividade',
    ],
    niveis: 'Contemporâneo Juvenil | Contemporâneo Adulto',
    locais: ['Pedreira', 'Jaguariúna'],
  },
  {
    id: 'yoga',
    title: 'Yoga',
    icon: YogaIcon,
    description: 'Um convite para desenvolver consciência corporal, equilíbrio e bem-estar.',
    highlights: [
      'Prática baseada em Hatha Yoga',
      'Trabalha respiração, alongamento, força e concentração, contribuindo para um corpo mais saudável e presente',
      'Além de complementa o treinamento na dança, o yoga oferece um momento de conexão consigo mesmo, ajudando alunos a cultivarem calma, foco e qualidade de movimento no dia a dia',
    ],
    niveis: 'Yoga Juvenil | Yoga Adulto',
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
                      <h3 className="font-bold text-lg" style={{ color: '#1f545a', fontFamily:'BlackNo7' }}>{modalidade.title}</h3>
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
