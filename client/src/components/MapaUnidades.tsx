import { useState, useRef, useEffect } from 'react';
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
  const infoWindowsRef = useRef<google.maps.InfoWindow[]>([]);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;
    // Definir limites do mapa para mostrar ambas as unidades
    const bounds = new google.maps.LatLngBounds();
    unidades.forEach(unidade => {
      bounds.extend({ lat: unidade.lat, lng: unidade.lng });
    });
    map.fitBounds(bounds);
    
    // Adicionar um padding para melhor visualização
    map.setZoom(12);
    
    addMarkers(map);
  };

  const createMarkerContent = (unidade: UnidadeInfo, isSelected: boolean) => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.width = isSelected ? '48px' : '40px';
    container.style.height = isSelected ? '48px' : '40px';
    container.style.borderRadius = '50%';
    container.style.backgroundColor = isSelected ? '#e0b6a0' : '#08554c';
    container.style.border = '3px solid white';
    container.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
    container.style.cursor = 'pointer';
    container.style.transition = 'all 0.3s ease';
    container.style.fontSize = isSelected ? '24px' : '20px';

    const icon = document.createElement('span');
    icon.textContent = unidade.id === 'pedreira' ? '🩰' : '✨';
    container.appendChild(icon);

    return container;
  };

  const createInfoWindowContent = (unidade: UnidadeInfo) => {
    return `
      <div style="font-family: Arial, sans-serif; padding: 12px; max-width: 250px;">
        <h3 style="margin: 0 0 8px 0; color: #1f545a; font-size: 16px; font-weight: bold;">
          ${unidade.nome}
        </h3>
        <div style="color: #555; font-size: 13px; line-height: 1.5;">
          <p style="margin: 4px 0;"><strong>📍 Endereço:</strong></p>
          <p style="margin: 0 0 8px 0;">${unidade.rua}, nº ${unidade.numero}</p>
          <p style="margin: 4px 0;"><strong>Bairro:</strong> ${unidade.bairro}</p>
          <p style="margin: 4px 0;"><strong>CEP:</strong> ${unidade.cep}</p>
          <p style="margin: 8px 0 4px 0;"><strong>📱 Telefone:</strong></p>
          <a href="https://wa.me/5519982640644" target="_blank" rel="noopener noreferrer" style="color: #08554c; text-decoration: none; font-weight: bold;">
            ${unidade.telefone}
          </a>
        </div>
      </div>
    `;
  };

  const addMarkers = (map: google.maps.Map) => {
    // Limpar marcadores e info windows antigos
    markersRef.current.forEach(marker => marker.element?.remove());
    infoWindowsRef.current.forEach(infoWindow => infoWindow.close());
    markersRef.current = [];
    infoWindowsRef.current = [];

    // Adicionar novos marcadores
    unidades.forEach((unidade) => {
      const marker = new google.maps.marker.AdvancedMarkerElement({
        map,
        position: { lat: unidade.lat, lng: unidade.lng },
        title: unidade.nome,
        content: createMarkerContent(unidade, selectedUnidade.id === unidade.id),
      });

      // Criar info window
      const infoWindow = new google.maps.InfoWindow({
        content: createInfoWindowContent(unidade),
      });

      marker.addListener('click', () => {
        // Fechar todas as info windows
        infoWindowsRef.current.forEach(iw => iw.close());
        
        // Abrir a info window do marcador clicado
        infoWindow.open(map, marker);
        
        // Atualizar seleção
        setSelectedUnidade(unidade);
        map.setCenter({ lat: unidade.lat, lng: unidade.lng });
        map.setZoom(15);
      });

      markersRef.current.push(marker);
      infoWindowsRef.current.push(infoWindow);
    });

    // Abrir info window da unidade selecionada por padrão
    if (markersRef.current.length > 0) {
      infoWindowsRef.current[0].open(map, markersRef.current[0]);
    }
  };

  const handleSelectUnidade = (unidade: UnidadeInfo) => {
    setSelectedUnidade(unidade);
    if (mapRef.current) {
      // Fechar todas as info windows
      infoWindowsRef.current.forEach(iw => iw.close());
      
      // Encontrar o marcador correspondente e abrir sua info window
      const markerIndex = unidades.findIndex(u => u.id === unidade.id);
      if (markerIndex !== -1 && infoWindowsRef.current[markerIndex]) {
        infoWindowsRef.current[markerIndex].open(mapRef.current, markersRef.current[markerIndex]);
      }
      
      mapRef.current.setCenter({ lat: unidade.lat, lng: unidade.lng });
      mapRef.current.setZoom(15);
    }
  };

  // Atualizar marcadores quando a unidade selecionada mudar
  useEffect(() => {
    if (mapRef.current) {
      markersRef.current.forEach((marker, index) => {
        const unidade = unidades[index];
        marker.content = createMarkerContent(unidade, selectedUnidade.id === unidade.id);
      });
    }
  }, [selectedUnidade]);

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
              <MapView
                initialCenter={{ lat: -22.7250, lng: -47.1990 }}
                initialZoom={12}
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
