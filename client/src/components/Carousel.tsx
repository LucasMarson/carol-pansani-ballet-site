import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const fotos = [
  { id: 1, title: 'Aulas', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663366457387/fjdwjaCuRrvPJfYtyiVHm2/carol-pansani-ballet-class-01-B95wJZiohWiUoRdWS8Q5oy.webp' },
  { id: 2, title: 'Espetáculo', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663366457387/fjdwjaCuRrvPJfYtyiVHm2/andeliraph-0968_0909eabe.webp' },
  { id: 3, title: 'Apresentação', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663366457387/fjdwjaCuRrvPJfYtyiVHm2/DSC02043_2b8faf88.webp' },
  { id: 4, title: 'Dueto', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663366457387/fjdwjaCuRrvPJfYtyiVHm2/andeliraph-2188_4984c258.webp' },
  { id: 5, title: 'Performance', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663366457387/fjdwjaCuRrvPJfYtyiVHm2/carol-pansani-ballet-performance-01-6SG3k7mJZHqN8dWvC9yBnL.webp' },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % fotos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + fotos.length) % fotos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % fotos.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="heading-section text-center mb-12">Galeria de Momentos</h2>

        <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden h-96 md:h-[500px] shadow-xl">
          {/* Carousel Items */}
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={fotos[currentIndex].image}
              alt={fotos[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
              <div>
                <p className="text-white text-3xl font-bold">{fotos[currentIndex].title}</p>
                <p className="text-white/80 mt-2">Foto {currentIndex + 1} de {fotos.length}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
          >
            <ChevronLeft size={24} className="text-primary" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
          >
            <ChevronRight size={24} className="text-primary" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {fotos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
