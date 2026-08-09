import Icon from "./Icon";
import { WHATSAPP_URL } from "@/data/contact";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 flex items-center gap-2 pl-4 pr-5 py-3.5 rounded-full bg-primary-container text-on-primary-container border-2 border-on-surface shadow-[0_10px_30px_-10px_rgba(22,29,31,0.4)] hover:scale-105 active:scale-95 transition-transform duration-200"
    >
      <Icon name="chat" size={22} />
      <span className="hidden sm:inline font-body text-sm font-semibold">
        Chat on WhatsApp
      </span>
    </a>
  );
}
