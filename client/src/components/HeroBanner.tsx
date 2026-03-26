import { useState } from 'react';
import { Mail, Phone, User, Sparkles } from 'lucide-react';

export default function HeroBanner() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    modalidade: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Enviar para WhatsApp
    const mensagem = `Olá! Gostaria de me inscrever nas aulas de ballet.\n\nNome: ${formData.nome}\nEmail: ${formData.email}\nTelefone: ${formData.telefone}\nModalidade de interesse: ${formData.modalidade || 'A definir'}`;
    const numeroWhatsApp = '5519982640644';
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(urlWhatsApp, '_blank');
    setIsSubmitted(true);
    
    setTimeout(() => {
      setFormData({ nome: '', email: '', telefone: '', modalidade: '' });
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <section 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663366457387/fjdwjaCuRrvPJfYtyiVHm2/DSC02043_2b8faf88.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay elegante */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(31, 84, 90, 0.7) 0%, rgba(8, 85, 76, 0.6) 50%, rgba(31, 84, 90, 0.7) 100%)',
        }}
      />

      {/* Conteúdo - Formulário */}
      <div className="container relative z-10 py-12 md:py-0">
        <div className="max-w-md mx-auto">
          {/* Título */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Sparkles className="text-primary" size={32} />
            </div>
            <h2 className="heading-section text-white mb-2">Inscreva-se</h2>
            <p className="text-white/90 text-sm">Comece sua jornada na dança</p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nome */}
            <div className="relative">
              <User size={18} className="absolute left-4 top-4 text-primary/60" />
              <input
                type="text"
                name="nome"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 bg-white/95 backdrop-blur rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-gray-800 placeholder-gray-500"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail size={18} className="absolute left-4 top-4 text-primary/60" />
              <input
                type="email"
                name="email"
                placeholder="Seu email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 bg-white/95 backdrop-blur rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-gray-800 placeholder-gray-500"
              />
            </div>

            {/* Telefone */}
            <div className="relative">
              <Phone size={18} className="absolute left-4 top-4 text-primary/60" />
              <input
                type="tel"
                name="telefone"
                placeholder="(19) 9 9999-9999"
                value={formData.telefone}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 bg-white/95 backdrop-blur rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-gray-800 placeholder-gray-500"
              />
            </div>

            {/* Modalidade */}
            <select
              name="modalidade"
              value={formData.modalidade}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/95 backdrop-blur rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-gray-800"
            >
              <option value="">Escolha uma modalidade</option>
              <option value="Ballet">Ballet</option>
              <option value="Jazz">Jazz</option>
              <option value="Dança Contemporânea">Dança Contemporânea</option>
              <option value="Yoga">Yoga</option>
              <option value="Não tenho certeza">Não tenho certeza</option>
            </select>

            {/* Botão Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg"
              style={{
                background: '#e0b6a0',
                color: '#1f545a',
              }}
            >
              {isSubmitted ? '✓ Redirecionando...' : 'Enviar Inscrição'}
            </button>

            {/* Texto auxiliar */}
            <p className="text-center text-white/80 text-xs">
              Você será redirecionado para o WhatsApp para confirmar sua inscrição
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
