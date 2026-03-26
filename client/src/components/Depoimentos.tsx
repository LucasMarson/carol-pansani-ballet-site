import { Star } from 'lucide-react';

const depoimentos = [
  {
    id: 1,
    nome: 'Beth',
    relacao: 'Mãe da aluna Lorenza',
    texto: 'Tenho muito orgulho de participar da história da escola, vê-la crescer e florescer. A Lorenza está aqui desde muito pequena e é nítido seu crescimento como pessoa, aprendendo a ser persistente, disciplinada, conhecer mais de si e sobre arte. A arte cura e engrandece a alma e a Carol Pansani Ballet proporciona essas vivências através das aulas, dos desafios propostos, dos eventos e espetáculos que fazem com que minha filha amadureça enquanto ser humano. A sensibilidade, profissionalismo e olhar apurado da Carol são fundamentais nesse processo.',
  },
  {
    id: 2,
    nome: 'Josi Bicudo',
    relacao: 'Mãe de alunos',
    texto: 'Aqui, meus filhos são acolhidos com sensibilidade, dedicação e amor pela arte. O cuidado da equipe e o olhar artístico fazem toda a diferença. É lindo ver o quanto eles evoluem e se encantam com o ballet.',
  },
  {
    id: 3,
    nome: 'Carol Pansani',
    relacao: 'Fundadora e Diretora',
    texto: 'Cada aluno que passa pela nossa escola deixa uma marca em meu coração. Ver o crescimento, a confiança e a transformação através da arte é o que me motiva todos os dias. Nossa missão é proporcionar muito mais que técnica: é proporcionar vivências que engrandecem a alma.',
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
            Conheça as histórias de pais e alunos que transformaram suas vidas através da dança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento) => (
            <div
              key={depoimento.id}
              className="card-hover bg-rose-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              <p 
                className="italic leading-relaxed mb-6"
                style={{ color: '#1f545a' }}
              >
                "{depoimento.texto}"
              </p>

              <div className="border-t pt-4" style={{ borderColor: '#e0b6a0' }}>
                <h3 
                  className="font-bold text-lg"
                  style={{ color: '#1f545a' }}
                >
                  {depoimento.nome}
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: '#d7c0b6' }}
                >
                  {depoimento.relacao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
