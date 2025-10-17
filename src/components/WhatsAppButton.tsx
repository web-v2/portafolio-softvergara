import { MessageCircle } from "lucide-react";

export default function WhatsAppButton(): JSX.Element {
  const phoneNumber = "573004122688"; // Reemplaza con tu número (código país + número)
  const message = "¡Hola! Quiero más información.";

  const handleClick = (): void => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-20 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
      aria-label="WhatsApp"
      title="Escríbenos por WhatsApp"
    >
      <MessageCircle size={22} />
    </button>
  );
}
