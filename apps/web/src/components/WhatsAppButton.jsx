import React from 'react';
import { MessageCircle } from 'lucide-react';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9731361100"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
      aria-label="Chat With Us Instantly on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-semibold hidden md:inline-block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
        <span className="pl-2">Chat With Us Instantly</span>
      </span>
    </a>
  );
}

export default WhatsAppButton;