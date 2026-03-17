import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Diferenciais', id: 'diferenciais' },
    { label: 'Servicos', id: 'servicos' },
    { label: 'Modalidades', id: 'modalidades' },
    { label: 'Sobre Carol', id: 'sobre' },
    { label: 'Mapas', id: 'mapas' },
    { label: 'Contato', id: 'contato' },
  ];

  const handleNavClick = (id: string) => {
    onNavClick(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
            CPB
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold" style={{ color: '#2C3E50' }}>Carol Pansani</h1>
            <p className="text-xs text-gray-600">Ballet</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
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
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <nav className="container flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100"
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
