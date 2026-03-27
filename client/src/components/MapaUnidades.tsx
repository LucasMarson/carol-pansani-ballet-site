import { useState } from 'react';
import { Phone, MapPin } from 'lucide-react';

interface UnidadeInfo {
  id: string;
  nome: string;
  endereco: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  cep: string;
  telefone: string;
  mapEmbed: string;
}

const unidades: UnidadeInfo[] = [
  {
    id: 'pedreira',
    nome: 'Pedreira',
    endereco: 'Rua XV de Novembro, nº 337',
    rua: 'Rua XV de Novembro',
    numero: '337',
    bairro: 'Centro',
    cidade: 'Pedreira',
    cep: '13920-009',
    telefone: '(19) 98264-0644',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.6597215390166!2d-46.908745724984115!3d-22.740885731962422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8dea5c9867bb1%3A0x4d005b529ae901b9!2sCarol%20Pansani%20Ballet!5e0!3m2!1spt-BR!2sbr!4v1774541214762!5m2!1spt-BR!2sbr',
  },
  {
    id: 'jaguariuna',
    nome: 'Jaguariúna',
    endereco: 'Rua Cândido Bueno, nº 1299, Sala 10, 2º andar',
    rua: 'Rua Cândido Bueno',
    numero: '1299',
    bairro: 'Centro',
    cidade: 'Jaguariúna',
    cep: '13910-033',
    telefone: '(19) 98264-0644',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.6128818792067!2d-46.987814321342924!3d-22.705450577561287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8e8071e58db99%3A0xa74436cbc662ee6b!2sR.%20C%C3%A2ndido%20Bueno%2C%201299%20-%20Centro%2C%20Jaguari%C3%BAna%20-%20SP%2C%2013820-000!5e0!3m2!1spt-BR!2sbr!4v1774541290276!5m2!1spt-BR!2sbr',
  },
];

export default function MapaUnidades() {
  const [selectedUnidade, setSelectedUnidade] = useState<UnidadeInfo>(unidades[0]);

  return (
    <section id="mapas" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-section">Nossas Unidades</h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-body max-w-2xl mx-auto">
            Visite-nos em uma de nossas duas unidades em Pedreira e Jaguariúna
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mapa */}
          <div className="lg:col-span-2">
            <div className="rounded-xl overflow-hidden shadow-lg border-2" style={{ borderColor: '#e0b6a0' }}>
              <iframe
                src={selectedUnidade.mapEmbed}
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa - ${selectedUnidade.nome}`}
              ></iframe>
            </div>
          </div>

          {/* Sidebar com Unidades */}
          <div className="space-y-4">
            {unidades.map((unidade) => (
              <button
                key={unidade.id}
                onClick={() => setSelectedUnidade(unidade)}
                className="w-full p-6 rounded-xl transition-all text-left border-2"
                style={{
                  background: selectedUnidade.id === unidade.id ? '#e0b6a0' : '#ffffff',
                  color: selectedUnidade.id === unidade.id ? '#1f545a' : '#1f545a',
                  borderColor: selectedUnidade.id === unidade.id ? '#e0b6a0' : '#d7c0b6',
                  boxShadow: selectedUnidade.id === unidade.id ? '0 8px 16px rgba(224, 182, 160, 0.3)' : 'none',
                }}
              >
                <h3 className="font-bold text-lg mb-2">{unidade.nome}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <p>{unidade.rua}, nº {unidade.numero}</p>
                      <p>{unidade.bairro} - {unidade.cidade}-SP</p>
                      <p>CEP: {unidade.cep}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2 border-t" style={{ borderColor: selectedUnidade.id === unidade.id ? 'rgba(31, 84, 90, 0.2)' : 'rgba(31, 84, 90, 0.1)' }}>
                    <Phone size={16} />
                    <a
                      href={`https://wa.me/5519982640644`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {unidade.telefone}
                    </a>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
