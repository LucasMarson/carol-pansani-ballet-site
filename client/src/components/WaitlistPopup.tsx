import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  modalidade: string;
}

export const WaitlistPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    modalidade: '',
  });

  // Mostrar popup após 8 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Montar mensagem para WhatsApp
    const mensagemWhatsApp = `
*LISTA DE ESPERA - JAGUARIÚNA* 📝

Nome: ${formData.nome}
Email: ${formData.email}
Telefone: ${formData.telefone}
Modalidade: ${formData.modalidade}

Enviado via: Carol Pansani Ballet - Nova Unidade Jaguariúna
    `.trim();

    // Codificar para URL
    const mensagemCodificada = encodeURIComponent(mensagemWhatsApp);
    
    // Número do WhatsApp
    const numeroWhatsApp = '5519982640644';

    // Abrir WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    window.open(urlWhatsApp, '_blank');

    // Mostrar sucesso
    setTimeout(() => {
      alert('✅ Obrigado! Você será redirecionado para o WhatsApp. Envie a mensagem para confirmar sua inscrição!');
      setIsOpen(false);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        modalidade: '',
      });
      setIsSubmitting(false);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative bg-white rounded-2xl w-full max-w-5xl shadow-2xl overflow-hidden">
        {/* Botão fechar */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 p-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition z-10 flex items-center justify-center"
          title="Fechar"
        >
          <X className="w-4 h-4 text-gray-700" />
        </button>

        {/* Layout Grid: Imagem Esquerda + Formulário Direita */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* LADO ESQUERDO - IMAGEM */}
          <div className="hidden md:flex items-center justify-center bg-cover bg-center h-96">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663366457387/fjdwjaCuRrvPJfYtyiVHm2/carol-pansani-jaguariana-waitlist-popup-6h5mT3ErZfzUYWgCkd4NTP.webp"
              alt="Carol Pansani Ballet - Jaguariúna"
              className="w-full h-full object-cover"
            />
          </div>

          {/* LADO DIREITO - CONTEÚDO E FORMULÁRIO */}
          <div className="p-5 md:p-6 flex flex-col justify-between" style={{height: '572px'}}>
            {/* Imagem em mobile (topo) */}
            <div className="md:hidden mb-3">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663366457387/fjdwjaCuRrvPJfYtyiVHm2/carol-pansani-jaguariana-waitlist-popup-6h5mT3ErZfzUYWgCkd4NTP.webp"
                alt="Carol Pansani Ballet - Jaguariúna"
                className="w-full h-24 object-cover rounded-lg"
              />
            </div>

            {/* Título */}
            <h2 className="text-xl md:text-2xl font-black text-[#1f545a] mb-1.5 leading-tight">
              Um novo espaço para viver a dança 💛
            </h2>

            {/* Subtítulo */}
            <p className="text-xs md:text-sm text-[#08554c] font-semibold mb-1">
              A nova unidade da Carol Pansani Ballet está chegando em Jaguariúna ✨
            </p>

            {/* Descrição */}
            <p className="text-xs text-gray-700 mb-2 leading-snug">
              Um lugar pensado para acolher, desenvolver e transformar através do movimento.
            </p>

            {/* Destaque */}
            <div className="bg-gradient-to-r from-[#ece0ca] to-[#f5ede0] border-l-4 border-[#e0b6a0] p-2 mb-3 rounded-lg">
              <p className="text-[#1f545a] font-bold text-xs leading-tight">
                🎁 Desconto + presente exclusivo para os 30 primeiros matriculados
              </p>
            </div>

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="space-y-2">
              {/* Nome */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-0.5">
                  Nome *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e0b6a0] focus:border-transparent transition"
                  placeholder="Seu nome"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-0.5">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e0b6a0] focus:border-transparent transition"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Telefone */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-0.5">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e0b6a0] focus:border-transparent transition"
                  placeholder="(11) 99999-9999"
                />
              </div>

              {/* Modalidade */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-0.5">
                  Modalidade *
                </label>
                <select
                  name="modalidade"
                  value={formData.modalidade}
                  onChange={handleInputChange}
                  required
                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e0b6a0] focus:border-transparent transition"
                >
                  <option value="">Selecione uma modalidade</option>
                  <option value="Ballet">Ballet</option>
                  <option value="Jazz">Jazz</option>
                  <option value="Dança Contemporânea">Dança Contemporânea</option>
                </select>
              </div>

              {/* Botão Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#e0b6a0] to-[#d7a590] hover:from-[#d7a590] hover:to-[#c89580] text-white font-bold py-2 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed mt-2 shadow-md text-xs md:text-sm"
              >
                {isSubmitting ? 'Enviando...' : 'Quero fazer parte'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
