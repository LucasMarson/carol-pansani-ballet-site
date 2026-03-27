export default function SobreCarol() {
  return (
    <section id="sobre" className="py-20" style={{ background: 'linear-gradient(135deg, rgba(236, 224, 202, 0.3), rgba(224, 182, 160, 0.1))' }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Carol Portrait Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/Carol.jpg"
              alt="Carol Pansani - Diretora e Bailarina"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div>
              <h2 className="heading-section">Quem é a Carol Pansani?</h2>
              <div className="section-divider"></div>
            </div>

            <p className="text-body">
              Essa parte é para quem ainda não conhece a nossa fundadora, diretora e professora: a Carol.
            </p>

            <p className="text-body">
              A dança entrou na vida dela muito cedo e, desde então, tornou-se um símbolo do que mais importava pra ela: expressão, disciplina e sensibilidade.
            </p>

            <p className="text-body">
              Sua formação foi construída dentro de uma das instituições mais respeitadas da dança no país, a Escola do Teatro Bolshoi no Brasil, reconhecida pelo MEC. Foi ali que desenvolveu uma base técnica sólida e compreendeu que a dança vai além dos passos: ela forma caráter, disciplina e sensibilidade artística.
            </p>

            <p className="text-body">
              Ao longo de sua jornada, a Carol também viveu intensamente a experiência do palco. Atuou como bailarina no Beto Carrero World, ampliando sua vivência cênica e fortalecendo sua relação com o público e com a arte de se apresentar.
            </p>

            <p className="text-body">
              Sua trajetória como intérprete também ganhou reconhecimento internacional ao conquistar o 1º lugar em duo contemporâneo no Certamen Ciutat de Barcelona, uma importante competição internacional de dança.
            </p>

            <p className="text-body">
              Movida pela busca constante por conhecimento, a Carol aprofundou sua formação com estudos na Royal Academy of Dance, além de cursos de metodologia pela Escola do Teatro Bolshoi no Brasil. Também realizou formação em preparação física para bailarinos e certificação em fitting de sapatilhas de ponta.
            </p>

            <p className="text-body">
              Com toda essa trajetória nasceu a Carol Pansani Ballet. Mais do que uma Escola de dança, nosso espaço foi criado para ser uma comunidade onde a arte é vivida com respeito, cuidado e acolhimento.
            </p>

            <p className="text-body">
              Hoje, Carol dedica seu trabalho a formar não apenas bailarinos, mas pessoas que aprendem a serem quem sempre sonharam ser através da dança.
            </p>

            <div className="bg-white p-6 rounded-lg border-l-4 mt-8" style={{ borderColor: '#e0b6a0' }}>
              <p className="italic" style={{ color: '#1f545a' }}>
                "Porque, pra mim, dança não é apenas aprendizado. É uma forma de crescer, se expressar e encontrar o seu lugar – na arte e na vida."
              </p>
              <p className="mt-4 font-semibold" style={{ color: '#e0b6a0' }}>Com carinho,<br/>Carol Pansani 💕</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
