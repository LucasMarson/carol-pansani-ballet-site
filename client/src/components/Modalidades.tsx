import { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';

const modalidades = [
  {
    id: 'ballet',
    title: 'Ballet Clássico',
    emoji: '🩰',
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
    emoji: '🎵',
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
    emoji: '🌊',
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
    emoji: '🧘',
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
          {modalidades.map((modalidade) => (
            <div
              key={modalidade.id}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setExpandedId(expandedId === modalidade.id ? null : modalidade.id)}
                className="w-full px-6 py-4 bg-white hover:bg-rose-50 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-4 text-left">
                  <span className="text-4xl">{modalidade.emoji}</span>
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: '#2C3E50' }}>{modalidade.title}</h3>
                    <p className="text-sm text-gray-600">{modalidade.description}</p>
                  </div>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-primary transition-transform flex-shrink-0 ${
                    expandedId === modalidade.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedId === modalidade.id && (
                <div className="px-6 py-6 bg-rose-50 border-t border-gray-200 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3" style={{ color: '#2C3E50' }}>Destaques:</h4>
                    <ul className="space-y-2">
                      {modalidade.highlights.map((highlight, index) => (
                        <li key={index} className="flex gap-3 text-gray-700">
                          <span className="text-primary font-bold">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#2C3E50' }}>Níveis:</h4>
                    <p className="text-gray-700 text-sm">{modalidade.niveis}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {modalidade.locais.map((local) => (
                      <span
                        key={local}
                        className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        <MapPin size={14} />
                        {local}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
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
