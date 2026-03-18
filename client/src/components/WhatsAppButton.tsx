import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '5519982640644';
  const whatsappMessage = 'Olá! Gostaria de saber mais sobre as aulas de ballet da Carol Pansani Ballet.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
      style={{
        background: 'linear-gradient(135deg, #25d366, #20ba58)',
      }}
      title="Enviar mensagem no WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
}
