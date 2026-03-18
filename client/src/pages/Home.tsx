import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import Diferenciais from '@/components/Diferenciais';
import Servicos from '@/components/Servicos';
import Carousel from '@/components/Carousel';
import Modalidades from '@/components/Modalidades';
import SobreCarol from '@/components/SobreCarol';
import Depoimentos from '@/components/Depoimentos';
import Contato from '@/components/Contato';
import MapaUnidades from '@/components/MapaUnidades';
import Galeria from '@/components/Galeria';
import InstagramFeed from '@/components/InstagramFeed';
import Footer from '@/components/Footer';

/**
 * Design Philosophy: Elegância Clássica com Modernidade
 * - Rosa Pâle (#E8D4D0) como cor primária elegante
 * - Azul Profundo (#2C3E50) para profissionalismo
 * - Tipografia Serif (Playfair Display) para títulos
 * - Espaçamento generoso e ritmo visual com alternância de cores
 * - Animações suaves e transições fluidas
 */
export default function Home() {
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onNavClick={handleNavClick} />
      
      <main className="flex-1">
        <HeroBanner />
        <Diferenciais />
        <Servicos />
        <Carousel />
        <Modalidades />
        <SobreCarol />
        <Galeria />
        <InstagramFeed />
        <Depoimentos />
        <MapaUnidades />
        <Contato />
      </main>

      <Footer />
    </div>
  );
}
