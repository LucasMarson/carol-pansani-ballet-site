import { useRef, useState } from 'react';
import { MapView } from './Map';
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
  lat: number;
  lng: number;
  telefone: string;
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
    lat: -22.7419,
    lng: -47.4087,
    telefone: '(19) 98264-0644',
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
    lat: -22.7081775,
    lng: -46.9895503,
    telefone: '(19) 98264-0644',
  },
];

export default function MapaUnidades() {
  const [selectedUnidade, setSelectedUnidade] = useState<UnidadeInfo>(unidades[0]);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;
    addMarkers(map);
  };

  const addMarkers = (map: google.maps.Map) => {
    // Limpar marcadores antigos
    markersRef.current.forEach(marker => marker.element?.remove());
    markersRef.current = [];

    // Adicionar novos marcadores
    unidades.forEach((unidade) => {
      const marker = new google.maps.marker.AdvancedMarkerElement({
        map,
        position: { lat: unidade.lat, lng: unidade.lng },
        title: unidade.nome,
      });

      marker.addListener('click', () => {
        setSelectedUnidade(unidade);
        map.setCenter({ lat: unidade.lat, lng: unidade.lng });
        map.setZoom(16);
      });

      markersRef.current.push(marker);
    });
  };

  const handleSelectUnidade = (unidade: UnidadeInfo) => {
    setSelectedUnidade(unidade);
    if (mapRef.current) {
      mapRef.current.setCenter({ lat: unidade.lat, lng: unidade.lng });
      mapRef.current.setZoom(16);
    }
  };

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
            <div className="rounded-xl overflow-hidden shadow-lg">
              <MapView
                initialCenter={{ lat: selectedUnidade.lat, lng: selectedUnidade.lng }}
                initialZoom={14}
                onMapReady={handleMapReady}
                className="w-full h-[500px]"
              />
            </div>
          </div>

          {/* Sidebar com Unidades */}
          <div className="space-y-4">
            {unidades.map((unidade) => (
              <button
                key={unidade.id}
                onClick={() => handleSelectUnidade(unidade)}
                className={`w-full p-6 rounded-xl transition-all text-left ${
                  selectedUnidade.id === unidade.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white border-2 border-gray-200 hover:border-primary'
                }`}
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
                  <div className="flex items-center gap-2 pt-2 border-t border-current border-opacity-20">
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

        {/* Informações Detalhadas */}
        <div className="mt-12 bg-rose-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {unidades.map((unidade) => (
              <div key={unidade.id} className="space-y-4">
                <h3 className="text-2xl font-bold" style={{ color: '#2C3E50' }}>
                  {unidade.nome}
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="font-semibold text-primary mb-1">Endereço</p>
                    <p>{unidade.endereco}</p>
                    <p>{unidade.bairro} - {unidade.cidade}-SP</p>
                    <p>CEP: {unidade.cep}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Contato</p>
                    <a
                      href={`https://wa.me/5519982640644`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-semibold"
                    >
                      {unidade.telefone}
                    </a>
                  </div>
                  <div>
                    <a
                      href={`https://www.google.com/maps/search/${encodeURIComponent(unidade.endereco + ', ' + unidade.cidade)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
                    >
                      <MapPin size={16} />
                      Ver no Google Maps
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
