/**
 * Helpers that make contact links robust to however a number is entered in the
 * Studio (e.g. "918018726", "+351 918 018 726", "+351918018726").
 */

const PT_DIAL = "351";

/** `tel:` href with a clean E.164-ish number. */
export function telHref(phone?: string): string | undefined {
  if (!phone) return undefined;
  let value = phone.replace(/[^\d+]/g, "");
  if (!value) return undefined;
  if (!value.startsWith("+")) {
    // Bare 9-digit PT national number → prefix country code.
    value = value.length === 9 ? `+${PT_DIAL}${value}` : `+${value}`;
  }
  return `tel:${value}`;
}

/** Human-readable phone, always shown with the +351 prefix once. */
export function phoneDisplay(phone?: string): string | undefined {
  if (!phone) return undefined;
  const trimmed = phone.trim();
  if (trimmed.startsWith("+")) return trimmed;
  return `+${PT_DIAL} ${trimmed}`;
}

/** wa.me link from a number that may contain spaces, +, or the leading 00. */
export function whatsappHref(whatsapp?: string): string | undefined {
  if (!whatsapp) return undefined;
  let digits = whatsapp.replace(/\D/g, "");
  if (!digits) return undefined;
  // A bare 9-digit national number needs the country code for wa.me.
  if (digits.length === 9) digits = `${PT_DIAL}${digits}`;
  return `https://wa.me/${digits}`;
}
