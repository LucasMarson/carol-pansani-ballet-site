import { Star } from 'lucide-react';

const depoimentos = [
  {
    id: 1,
    nome: 'Elisabeth Fidalgo',
    relacao: 'Mãe de aluna - aluna da escola desde 2017',
    texto: 'Tenho muito orgulho de participar da história da escola, vê-la crescer e florescer. A Lorenza está aqui desde muito pequena e é nítido seu crescimento como pessoa, aprendendo a ser persistente, disciplinada, conhecer mais de si e sobre arte. A arte cura e engrandece a alma e a Carol Pansani Ballet proporciona essas vivências através das aulas, dos desafios propostos, dos eventos e espetáculos que fazem com que minha filha amadureça enquanto ser humano. A sensibilidade, profissionalismo e olhar apurado da Carol são fundamentais nesse processo.',
  },
  {
    id: 2,
    nome: 'Josi Bicudo',
    relacao: 'Mãe de alunos de ballet e jazz',
    texto: 'Aqui, meus filhos são acolhidos com sensibilidade, dedicação e amor pela arte. O cuidado da equipe e o olhar artístico fazem toda a diferença. É lindo ver o quanto eles evoluem e se encantam com o ballet.',
  },
  {
    id: 3,
    nome: 'Rafa Moreira',
    relacao: 'Aluna de ballet adulto, 27 Anos',
    texto: 'Sou aluna da CPB há quase 3 anos e o que mais me chamou a atenção desde que entrei é a organização e preocupação com o bem-estar dos alunos. Do atendimento na recepção e no Whats à paciência da Carol nas aulas, da antecedência do cronograma dos espetáculos à clareza em cada coisa que precisa ser comunicada... Tudo isso colabora pra que a gente frequente cada aula e suba ao palco não só fazendo o que gosta, mas com paz no coração. E isso não é fácil de achar. Ser aluna aqui é sentir a paz de ser bem cuidada, com respeito e profissionalismo, enquanto você aprende e se desafia fazendo o que ama. 🩷',
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
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: '#ece0ca' }}
            >
              {/* Background decorativo */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{ backgroundColor: '#e0b6a0' }}
              ></div>

              {/* Conteúdo */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Estrelas */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className="fill-current transition-all"
                      style={{ color: '#e0b6a0' }}
                    />
                  ))}
                </div>

                {/* Texto do depoimento */}
                <p 
                  className="italic leading-relaxed mb-6 flex-grow text-sm"
                  style={{ color: '#1f545a' }}
                >
                  "{depoimento.texto}"
                </p>

                {/* Divisor */}
                <div 
                  className="h-px my-6"
                  style={{ backgroundColor: '#e0b6a0' }}
                ></div>

                {/* Informações do autor */}
                <div className="space-y-1">
                  <h3 
                    className="font-bold text-base"
                    style={{ color: '#1f545a', fontFamily: 'lexendDeca' }}
                  >
                    {depoimento.nome}
                  </h3>
                  <p 
                    className="text-xs font-medium"
                    style={{ color: '#08554c' }}
                  >
                    {depoimento.relacao}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
