import { useState } from 'react';
import { X } from 'lucide-react';

interface Imagem {
  id: string;
  src: string;
  alt: string;
  titulo: string;
}

const imagens: Imagem[] = [
  {
    id: '1',
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663366457387/fjdwjaCuRrvPJfYtyiVHm2/DSC02043_2b8faf88.webp',
    alt: 'Apresentação de Ballet',
    titulo: 'Apresentação em Palco'
  },
  {
    id: '2',
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663366457387/fjdwjaCuRrvPJfYtyiVHm2/andeliraph-0968_0909eabe.webp',
    alt: 'Espetáculo Colorido',
    titulo: 'Espetáculo Especial'
  },
  {
    id: '3',
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663366457387/fjdwjaCuRrvPJfYtyiVHm2/carol-pansani-ballet-performance-01-6SG3k7mJZHqN8dWvC9yBnL.webp',
    alt: 'Performance de Dança',
    titulo: 'Momento de Performance'
  },
];

export default function GaleriaMomentos() {
  const [selectedImage, setSelectedImage] = useState<Imagem | null>(null);

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-section">Galeria de Momentos</h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-body max-w-2xl mx-auto">
            Momentos especiais de apresentações, aulas e eventos da Carol Pansani Ballet
          </p>
        </div>

        {/* Grid de Imagens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {imagens.map((imagem) => (
            <div
              key={imagem.id}
              onClick={() => setSelectedImage(imagem)}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-64 md:h-72"
            >
              <img
                src={imagem.src}
                alt={imagem.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
              >
                <p className="text-white font-semibold text-lg">{imagem.titulo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
            
            <p className="text-white text-center mt-4 text-lg font-semibold">
              {selectedImage.titulo}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
