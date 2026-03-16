import { Star } from 'lucide-react';

const depoimentos = [
  {
    id: 1,
    nome: 'João Silva',
    relacao: 'Pai do aluno Lucas',
    texto: 'A Carol Pansani Ballet transformou a vida do meu filho. Ele chegou tímido e hoje é confiante, disciplinado e apaixonado por dança. O profissionalismo e acolhimento que recebemos desde o primeiro dia foram incríveis.',
    emoji: '👨‍👧',
  },
  {
    id: 2,
    nome: 'Marina Santos',
    relacao: 'Aluna de Ballet Intermediário',
    texto: 'Encontrei na Carol Pansani Ballet muito mais que uma escola de dança. Encontrei uma comunidade que me acolheu, me desafiou e me ajudou a descobrir quem eu realmente sou. As aulas são incríveis!',
    emoji: '👧',
  },
  {
    id: 3,
    nome: 'Fernanda Costa',
    relacao: 'Aluna de Ballet Adulto',
    texto: 'Sempre sonhei em fazer ballet, mas achava que era tarde. A Carol e sua equipe me mostraram que nunca é tarde para começar. Hoje sou uma bailarina feliz e realizada. Recomendo para todos!',
    emoji: '👩',
  },
];

export default function Depoimentos() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-section">Depoimentos de Quem Confia</h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-body max-w-2xl mx-auto">
            Conheça as histórias de alunos e pais que transformaram suas vidas através da dança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento) => (
            <div
              key={depoimento.id}
              className="card-hover bg-rose-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{depoimento.emoji}</div>
                <div>
                  <h3 className="font-bold text-blue-deep">{depoimento.nome}</h3>
                  <p className="text-sm text-gray-600">{depoimento.relacao}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-gray-700 italic leading-relaxed">
                "{depoimento.texto}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
