// /lib/contact.ts
const DEFAULT_E164_TEL = process.env.NEXT_PUBLIC_PHONE_E164 || "+529992360153"; // tel:+52...
const DEFAULT_WA = process.env.NEXT_PUBLIC_WHATSAPP || "529992360153";         // wa.me/52999...

function normalizeDigits(n?: string) {
  return (n || "").replace(/[^\d]/g, "");
}

export function telHref(number = DEFAULT_E164_TEL) {
  return `tel:${number}`;
}

export function waHref(opts: { number?: string; text?: string }) {
  const num = normalizeDigits(opts.number || DEFAULT_WA);
  const q = opts.text ? `?text=${encodeURIComponent(opts.text)}` : "";
  return `https://wa.me/${num}${q}`;
}
