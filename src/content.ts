export const bookProduct = {
  publisher: "Springer-Fachbuch",
  pageCount: 361,
  colorIllustrationCount: 179,
  monochromeIllustrationCount: 11,
  binding: "Softcover",
  price: "27,99 €",
  isbn: "978-3-658-51850-9",
  ebookFormat: "E-Book"
} as const;

export const bookProductDisplay = {
  pages: `${bookProduct.pageCount} Seiten`,
  illustrations: `${bookProduct.colorIllustrationCount + bookProduct.monochromeIllustrationCount} Abbildungen`,
  illustrationDetails: `${bookProduct.colorIllustrationCount} farbige und ${bookProduct.monochromeIllustrationCount} schwarz-weiße Abbildungen`,
  bindingAndPrice: `${bookProduct.binding} ${bookProduct.price}`,
  ebookAvailability: `auch als ${bookProduct.ebookFormat} erhältlich`
} as const;

export const heroContent = {
  description:
    "Ein vollständiges, regelbasiertes System für Privatanleger – von Marktphase und Aktienauswahl über Kauf und Verkauf bis zum Risikomanagement.",
  benefits: [
    "Emotionale Fehlentscheidungen durch klare Regeln ersetzen",
    "Starke Aktien systematisch auswählen und richtig timen",
    "Verluste begrenzen und Gewinne strukturiert absichern"
  ]
} as const;

export const purchaseContent = {
  kicker: "Buch bestellen",
  title: "Baue deinen eigenen regelbasierten Investmentprozess auf.",
  description:
    "Das Buch verbindet Marktverständnis, Aktienauswahl, Chartanalyse, Kaufregeln, Verkaufsregeln und Risikomanagement zu einem vollständigen Ablauf.",
  facts: [
    bookProductDisplay.pages,
    bookProductDisplay.illustrationDetails,
    bookProductDisplay.bindingAndPrice,
    bookProductDisplay.ebookAvailability,
    bookProduct.publisher,
    "Geeignet für die Umsetzung neben dem Beruf"
  ]
} as const;

export const authorContent = {
  introduction:
    "Dr. Aljoscha Michael Groos ist promovierter Wirtschaftswissenschaftler, Diplom-Wirtschaftsingenieur und verfügt über mehr als 15 Jahre praktische Erfahrung im Aktieninvestment an internationalen Börsen.",
  background:
    "Sein Interesse an Börse und Aktien begann früh mit einem selbst geführten Spieldepot, das er anhand von Kursen aus der Tageszeitung pflegte. Eigene Fehler, Lernschleifen und praktische Markterfahrung haben seinen Blick geschärft. Auch Verluste im familiären Umfeld während der Dotcom-Blase verstärkten die Erkenntnis, dass fehlendes Wissen und blinde Abhängigkeit von fremden Empfehlungen teuer werden können.",
  approach:
    "Daraus entstand der Ansatz hinter „Börse ohne Bauchgefühl“: Anlegern Finanzwissen verständlich zu vermitteln und sie dabei zu unterstützen, Entscheidungen selbstbestimmt, regelbasiert und mit einem klaren Blick auf Risiken vorzubereiten.",
  signals: [
    { label: "Fokus", value: "Marktstruktur & relative Stärke" },
    { label: "Ansatz", value: "Regeln, Checklisten, Routinen" },
    { label: "Erfahrung", value: "Über 15 Jahre Aktienmärkte" },
    { label: "Ziel", value: "Selbstbestimmte Entscheidungen" }
  ]
} as const;

export const problems = [
  {
    thought: "Die Aktie kommt bestimmt wieder zurück.",
    pattern:
      "Hoffnung ersetzt Risikomanagement. Verluste werden ausgesessen, obwohl Kapital an anderer Stelle besser arbeiten könnte."
  },
  {
    thought: "Alle reden darüber – ich muss jetzt rein.",
    pattern:
      "FOMO führt zu Käufen weit über dem sinnvollen Einstiegspunkt. Der Plan entsteht erst, wenn der Trade schon läuft."
  },
  {
    thought: "Der Markt sieht doch stark aus.",
    pattern:
      "Ein Index kann stabil wirken, obwohl die Marktbreite bröckelt und nur noch wenige Schwergewichte tragen."
  }
];

export const processSteps = [
  {
    title: "Psychologie verstehen",
    text:
      "Erkenne, wie Verlustangst, Gier, Hoffnung, FOMO und Selbstüberschätzung deine Entscheidungen verzerren."
  },
  {
    title: "Marktphase einordnen",
    text:
      "Prüfe, ob der Markt Rückenwind gibt oder ob Korrektur, Distribution und schwache Marktbreite zur Vorsicht mahnen."
  },
  {
    title: "Aktien systematisch auswählen",
    text:
      "Filtere nach Branche, relativer Stärke, Wachstum, Qualität, Volatilität und technischer Position statt nach Bauchgefühl."
  },
  {
    title: "Charts regelbasiert lesen",
    text:
      "Nutze Kurs, Volumen, gleitende Durchschnitte, Basismuster und Warnsignale, um Timing und Risiko planbar zu machen."
  },
  {
    title: "Käufe vorbereiten",
    text:
      "Definiere Kaufzone, Einstiegssignal, Stopp, Positionsgröße und Quartalszahlen-Risiko, bevor du eine Order platzierst."
  },
  {
    title: "Verkäufe planen",
    text:
      "Sichere Gewinne in Stärke, reduziere in Schwäche und verhindere, dass aus einem guten Trade ein schlechter wird."
  },
  {
    title: "Risiko steuern",
    text:
      "Begrenze Verluste, arbeite mit sinnvollen Positionsgrößen und passe deinen Investitionsgrad an Markt und Depotkurve an."
  },
  {
    title: "Aus Trades lernen",
    text:
      "Dokumentiere Käufe und Verkäufe, prüfe deine Regeln und entwickle aus Fehlern ein belastbares persönliches System."
  }
];

export const bookContents = [
  {
    title: "Psychologie und Mindset",
    lead: "Du erkennst deine größten Gegner: Angst, Gier und Hoffnung.",
    text:
      "Du lernst, warum Verluste emotional stärker wirken als Gewinne, warum viele Anleger schwache Aktien zu lange halten und warum ständiges Depot-Checken dein mentales Kapital verbraucht. Ziel ist, dass du nicht impulsiv reagierst, sondern auch in schwierigen Marktphasen handlungsfähig bleibst."
  },
  {
    title: "Den Markt verstehen",
    lead: "Du lernst, wann der Markt Rückenwind gibt – und wann er gegen dich arbeitet.",
    text:
      "Märkte bewegen sich in Zyklen: Akkumulation, Aufwärtstrend, Distribution und Abwärtstrend. Das Buch zeigt dir, wie du diese Phasen im Kurs- und Volumenverhalten erkennst, wie sich Korrekturen ankündigen und warum Marktbreite wichtig ist. Ein Index kann stark aussehen, obwohl nur wenige Schwergewichte ihn tragen. Genau diesen Blick unter die Haube lernst du."
  },
  {
    title: "Aktienauswahl",
    lead: "Du findest nicht irgendeine Aktie – sondern die richtigen Kandidaten.",
    text:
      "Ein Aufwärtstrend im Index ist nur Rückenwind. Die eigentliche Stärke entsteht durch wenige Aktien, die den Markt anführen. Deshalb lernst du, Aktien nach Branche, Sektor, Kategorie, Lebenszyklus, relativer Stärke, Fundamentaldaten, technischen Kennzahlen und Volatilität einzuordnen. Aus tausenden Aktien wird so eine kurze, fokussierte Watchlist."
  },
  {
    title: "Chartanalyse",
    lead: "Du übersetzt Kursbewegungen in ein klares Bild.",
    text:
      "Du lernst, Chartkerzen, Volumen, gleitende Durchschnitte und Basismuster wie Cup-with-Handle, Double Bottom oder Boxmuster zu lesen. Entscheidend ist nicht, ob ein Chart gut aussieht, sondern ob Timing, Nachfrage und Risiko zusammenpassen. Das Kapitel zeigt dir auch Warnzeichen, positive Signale und eine Checkliste für die tägliche Analyse."
  },
  {
    title: "Kaufregeln",
    lead:
      "Du kaufst nicht, weil eine Aktie spannend klingt – sondern weil die Voraussetzungen stimmen.",
    text:
      "Das Buch zeigt dir klare Einstiegssignale: Ausbrüche aus Basen, Rückläufe an gleitende Durchschnitte, relative Stärke, Volumenbestätigung und gestaffelten Positionsaufbau. Eine zentrale Regel: Du kaufst nicht in Schwäche und jagst Aktien nicht hinterher, wenn sie bereits zu weit vom optimalen Kaufpunkt entfernt sind."
  },
  {
    title: "Verkaufsregeln und Gewinnsicherung",
    lead: "Du lernst, gute Trades nicht wieder in schlechte Trades zu verwandeln.",
    text:
      "Viele Anleger beschäftigen sich intensiv mit dem Kauf – aber kaum mit dem Verkauf. Dabei entscheidet der Ausstieg oft über die Qualität des gesamten Trades. Du lernst drei Verkaufsarten: den Verkauf nach definierter Verlusthöhe, den Verkauf in Stärke zur Gewinnsicherung und den Verkauf in Schwäche, wenn ein Trend kippt."
  },
  {
    title: "Risiko- und Portfoliomanagement",
    lead: "Du schützt dein Kapital, bevor du an Gewinnmaximierung denkst.",
    text:
      "Das Buch macht deutlich: Gute Aktien reichen nicht, wenn das Risikomanagement nicht stimmt. Du lernst, Verluste früh zu begrenzen, Positionsgrößen sinnvoll zu wählen, Portfolio-Risiken über Volatilität, ATR und Beta zu steuern und besondere Ereignisse wie Quartalszahlen einzuordnen."
  },
  {
    title: "Lernen aus Trades",
    lead: "Du entwickelst dein eigenes System weiter.",
    text:
      "Ein Handelstagebuch sorgt dafür, dass du nicht nur Ergebnisse siehst, sondern Ursachen erkennst. Du dokumentierst Kaufgrund, Marktumfeld, Setup, Stopp, Ziel, Emotionen, Verkauf und Ergebnis. Durch Ex-post-Analysen erkennst du wiederkehrende Fehler – etwa FOMO-Käufe, zu späte Verkäufe oder das Festhalten an alten Gewinnern."
  }
];

export const audiences = [
  {
    title: "Für ambitionierte Privatanleger",
    text:
      "Wenn du Einzelaktien nicht nur kaufen, sondern verstehen, auswählen, timen und managen möchtest."
  },
  {
    title: "Für Berufstätige",
    text:
      "Wenn du keine Zeit für permanente Marktbeobachtung hast, aber trotzdem mit klaren Routinen und Checklisten arbeiten willst."
  },
  {
    title: "Für Anleger mit ersten Fehlern",
    text:
      "Wenn du schon erlebt hast, wie FOMO, Hoffnung oder zu spätes Verkaufen dein Depot belasten."
  },
  {
    title: "Für strukturierte Einsteiger",
    text:
      "Wenn du von Anfang an lernen willst, Risiko, Marktphase und Positionsgröße ernst zu nehmen, bevor du größere Trades platzierst."
  },
  {
    title: "Für Fortgeschrittene",
    text:
      "Wenn du deine Aktienauswahl, Chartanalyse, Kaufregeln und Verkaufsregeln zu einem einheitlichen Prozess verbinden möchtest."
  }
];

export const notForYou = [
  "schnelle Aktientipps ohne eigenes Denken suchst",
  "garantierte Renditen erwartest",
  "ohne Regeln in Hypes springen möchtest",
  "Verluste lieber aussitzt, statt sie zu begrenzen"
];

export const takeaways = [
  {
    segments: [
      { text: "Du nimmst ein Regelwerk mit, das " },
      { text: "Angst, Gier, Hoffnung und FOMO", bold: true },
      { text: " in echten Marktsituationen erkennbar macht. Vor dem Kauf prüfst du " },
      { text: "Marktphase, Marktbreite und Aktienqualität", bold: true },
      {
        text:
          ", statt einzelnen Tipps oder steigenden Kursen hinterherzulaufen. Starke Kandidaten entstehen aus Sektor, Industriegruppe, relativer Stärke und Fundamentaldaten."
      }
    ]
  },
  {
    segments: [
      { text: "Für Timing und Risiko nutzt du " },
      { text: "Chartmuster, Volumen und gleitende Durchschnitte", bold: true },
      {
        text:
          ". Einstieg, Stopp, Positionsgröße und Cashquote werden vorab geplant; Gewinne sicherst du in Stärke, Verluste begrenzt du konsequent. Mit "
      },
      { text: "Handelstagebuch und Ex-post-Analyse", bold: true },
      { text: " wird aus jedem Trade Material für bessere Entscheidungen." }
    ]
  }
];

export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
};

export const testimonials: Testimonial[] = [
  // {
  //   quote: "Stimme aus Lektorat oder Testlesen hier ergänzen.",
  //   name: "Name",
  //   role: "Lektorat / Testleser"
  // }
];

export const affiliateDisclosure =
  "* Amazon-Partnerlink (Affiliate-Link): Bei einem Kauf kann eine Provision entstehen; dein Preis bleibt unverändert. Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.";

export const faqs = [
  {
    question: "Für wen ist das Buch geeignet?",
    answer:
      "Für Privatanleger, berufstätige Anleger, strukturierte Einsteiger und Fortgeschrittene, die einen vollständigen und wiederholbaren Investmentprozess suchen."
  },
  {
    question: "Ist das Buch auch für Anfänger geeignet?",
    answer:
      "Ja, wenn du bereit bist, dich ernsthaft mit Marktphase, Risiko, Aktienauswahl und Regeln auseinanderzusetzen. Es ist kein oberflächliches „Schnell reich werden“-Buch, sondern führt Schritt für Schritt durch einen strukturierten Prozess."
  },
  {
    question: "Geht es eher um langfristiges Investieren oder Trading?",
    answer:
      "Das Buch verbindet langfristiges Denken bei der Aktienauswahl mit regelbasiertem Positionsmanagement, Kaufzeitpunkten, Verkaufsregeln und Risikobegrenzung."
  },
  {
    question: "Enthält das Buch konkrete Aktienempfehlungen?",
    answer:
      "Nein. Das Buch enthält keine aktuellen Aktientipps oder Kaufempfehlungen. Du lernst, Kandidaten selbst zu finden, zu prüfen und zu managen."
  },
  {
    question: "Wie viel Zeit brauche ich für die Umsetzung?",
    answer:
      "Die beschriebenen Routinen sind so aufgebaut, dass sie grundsätzlich neben dem Beruf umsetzbar sind. Als Orientierung kannst du mit etwa 30 bis 45 Minuten täglicher Beschäftigung rechnen; der tatsächliche Zeitaufwand hängt von deinem Vorgehen und der Marktlage ab."
  },
  {
    question: "In welchen Formaten ist das Buch erhältlich?",
    answer:
      `Das Buch ist als ${bookProduct.binding} und als ${bookProduct.ebookFormat} erhältlich.`
  },
  {
    question: "Ist das Buch eine Anlageberatung?",
    answer:
      "Nein. Das Buch bietet keine individuelle Anlage- oder Finanzberatung und ist keine Aufforderung zum Kauf oder Verkauf von Wertpapieren."
  }
];
