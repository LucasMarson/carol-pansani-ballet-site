import { Heart } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
}


export default function Footer({ onNavClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (id: string) => {
    onNavClick(id);
    setIsMenuOpen(false);
  };
  return (
    <footer className="text-white py-12" style={{ background: '#1f545a' }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <a href="#" onClick={() => handleNavClick('home')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img 
            src="/images/Logo5.png"
            alt="Carol Pansani Ballet"
            className="h-20 w-auto"
          />
        </a>
            <p className="text-gray-300 text-sm leading-relaxed">
              Profissionalismo, sensibilidade e acolhimento em forma de arte. Uma comunidade de dança em Pedreira e Jaguariúna.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ color: '#e0b6a0' }}>Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#modalidades" className="hover:text-white transition-colors">
                  Modalidades
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre Carol
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ color: '#e0b6a0' }}>Contato</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="https://wa.me/5519982640644"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: (19) 98264-0644
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/carolpansaniballet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram: @carolpansaniballet
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@carolpansaniballet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  TikTok: @carolpansaniballet
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8" style={{ borderColor: 'rgba(224, 182, 160, 0.3)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
            <p>
              © 2026 Carol Pansani Ballet. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-2 mt-4 md:mt-0">
              Feito com <Heart size={16} style={{ color: '#e0b6a0' }} className="fill-current" /> para a dança
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
