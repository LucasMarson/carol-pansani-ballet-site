import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GaleriaItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'performance' | 'aula' | 'studio' | 'detalhe';
}

const galeriaItems: GaleriaItem[] = [
  {
    id: '1',
    title: 'Performance Solo',
    description: 'Apresentação elegante de ballet clássico',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663366457387/fjdwjaCuRrvPJfYtyiVHm2/carol-pansani-ballet-hero-01-5VF7Xn7CF6xp2bCMM3cEDb.webp',
    category: 'performance',
  },
  {
    id: '2',
    title: 'Aula de Ballet',
    description: 'Instrução personalizada na barra',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663366457387/fjdwjaCuRrvPJfYtyiVHm2/carol-pansani-ballet-class-01-B95wJZiohWiUoRdWS8Q5oy.webp',
    category: 'aula',
  },
  {
    id: '3',
    title: 'Espetáculo Ensemble',
    description: 'Apresentação sincronizada do elenco',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663366457387/fjdwjaCuRrvPJfYtyiVHm2/carol-pansani-ballet-performance-01-nZaetCrjDwgVYLzQNDq2ox.webp',
    category: 'performance',
  },
  {
    id: '4',
    title: 'Studio Profissional',
    description: 'Espaço elegante e bem iluminado',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663366457387/fjdwjaCuRrvPJfYtyiVHm2/carol-pansani-ballet-studio-interior-maHniPdU2waeDzK4yqqAhy.webp',
    category: 'studio',
  },
  {
    id: '5',
    title: 'Sapatilhas de Ponta',
    description: 'Detalhe artístico do equipamento',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663366457387/fjdwjaCuRrvPJfYtyiVHm2/carol-pansani-ballet-detail-pointe-ET2hAewx34JHUeRgw2LPMp.webp',
    category: 'detalhe',
  },
];

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState<GaleriaItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galeriaItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galeriaItems.length) % galeriaItems.length);
  };

  const openImage = (item: GaleriaItem) => {
    setSelectedImage(item);
    setCurrentIndex(galeriaItems.findIndex((i) => i.id === item.id));
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleModalNext = () => {
    const nextIndex = (currentIndex + 1) % galeriaItems.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galeriaItems[nextIndex]);
  };

  const handleModalPrev = () => {
    const prevIndex = (currentIndex - 1 + galeriaItems.length) % galeriaItems.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galeriaItems[prevIndex]);
  };

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-section">Galeria de Fotos</h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-body max-w-2xl mx-auto">
            Conheça nossos espaços, aulas e apresentações através de momentos capturados da nossa comunidade
          </p>
        </div>

        {/* Grid de Galeria */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galeriaItems.map((item) => (
            <button
              key={item.id}
              onClick={() => openImage(item)}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 md:h-72"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
              >
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://instagram.com/carolpansaniballet"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Ver Mais no Instagram
          </a>
        </div>
      </div>

      {/* Modal Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>

          <div className="relative w-full max-w-4xl">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />

            {/* Navegação */}
            <button
              onClick={handleModalPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={handleModalNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight size={40} />
            </button>

            {/* Informações */}
            <div className="mt-6 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300 mb-4">{selectedImage.description}</p>
              <p className="text-sm text-gray-400">
                {currentIndex + 1} de {galeriaItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
