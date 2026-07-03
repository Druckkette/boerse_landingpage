const withBasePath = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

// LAUNCH BLOCKER:
// - BOOK_LINKS müssen vor Veröffentlichung auf echte Produktseiten zeigen.
// - LEGAL_LINKS.contact braucht die echte Kontaktadresse, sobald sie vorliegt.

export const IMAGE_PATHS = {
  cover: withBasePath("assets/book-cover.jpg"),
  author: withBasePath("assets/author.jpg")
} as const;

// TODO LINKS: Produktlinks ersetzen, sobald die finalen Shop- und Buchhandelsseiten live sind.
export const BOOK_LINKS = {
  springer: "https://www.springer.com/",
  amazon: "https://www.amazon.de/",
  bookstore: "https://www.buchhandel.de/"
} as const;

export const LEGAL_LINKS = {
  imprint: withBasePath("impressum.html"),
  privacy: withBasePath("datenschutz.html"),
  contact: withBasePath("impressum.html#kontakt")
} as const;
