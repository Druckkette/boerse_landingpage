const withBasePath = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const IMAGE_PATHS = {
  cover: withBasePath("assets/book-cover.jpg"),
  author: withBasePath("assets/author.jpg")
} as const;

export const BOOK_LINKS = {
  springer: "https://link.springer.com/book/9783658518509",
  amazon: "https://amzn.to/4y4nI2a"
} as const;

export const LEGAL_LINKS = {
  imprint: withBasePath("impressum.html"),
  privacy: withBasePath("datenschutz.html"),
  contact: "mailto:dr.michael.groos@gmail.com"
} as const;
