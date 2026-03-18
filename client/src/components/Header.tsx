import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Diferenciais', id: 'diferenciais' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Modalidades', id: 'modalidades' },
    { label: 'Sobre Carol', id: 'sobre' },
    { label: 'Galeria', id: 'galeria' },
    { label: 'Redes Sociais', id: 'feed-social' },
    { label: 'Mapas', id: 'mapas' },
    { label: 'Contato', id: 'contato' },
  ];

  const handleNavClick = (id: string) => {
    onNavClick(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 border-b-2" style={{ borderColor: '#e0b6a0' }}>
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <a href="#" onClick={() => handleNavClick('home')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663366457387/fjdwjaCuRrvPJfYtyiVHm2/CarolPansani-variacaologos-01_43682f9d.webp"
            alt="Carol Pansani Ballet"
            className="h-20 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="transition-colors text-sm font-medium"
              style={{ color: '#1f545a' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#08554c'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#1f545a'}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/5519982640644"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Agende Agora
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ color: '#1f545a' }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t-2 py-4" style={{ borderColor: '#e0b6a0' }}>
          <nav className="container flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left transition-colors py-2 border-b"
                style={{ color: '#1f545a', borderColor: '#ece0ca' }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5519982640644"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button justify-center mt-2"
            >
              Agende Agora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
