const withBasePath = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

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

// TODO NEWSLETTER: Durch den Formular-Endpunkt von Mailchimp, Brevo, ConvertKit o. ae. ersetzen.
export const NEWSLETTER_FORM_ENDPOINT = "";

export const LEGAL_LINKS = {
  imprint: "#impressum-platzhalter",
  privacy: "#datenschutz-platzhalter",
  contact: "mailto:kontakt@example.com"
} as const;
