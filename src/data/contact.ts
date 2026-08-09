/** Placeholder - replace with your real number (no "+", no spaces, e.g. "919876543210"). */
export const WHATSAPP_NUMBER = "917665082222";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Mahak! I have an app idea I'd love to talk through.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_DEFAULT_MESSAGE,
)}`;

export const CONTACT_EMAIL = "mchhabra1808@gmail.com";

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mahak1808/",
    icon: "work",
  },
  // { label: "Twitter", href: "https://twitter.com", icon: "alternate_email" },
  { label: "WhatsApp", href: WHATSAPP_URL, icon: "chat" },
];
