import './globals.css';

export const metadata = {
  metadataBase: new URL('https://procar31.fr'),
  title: "PROCAR 31 | Carrosserie, Peinture & Calibrage ADAS à L'Union (31)",
  description: "Carrosserie PROCAR 31 à L'Union (Toulouse) : Spécialiste carrosserie toutes marques, peinture automobile haute précision, géométrie 3D et calibrage ADAS Autel IA900WA. 0€ avance de frais, véhicule de prêt offert. Tél : 09 81 76 61 76.",
  keywords: [
    "carrosserie l'union",
    "carrosserie toulouse",
    "calibrage adas 31",
    "geometrie autel ia900wa",
    "peinture auto toulouse",
    "reparation carrosserie",
    "reparation pare-brise",
    "procar 31"
  ],
  authors: [{ name: "PROCAR 31" }],
  openGraph: {
    title: "PROCAR 31 | Carrosserie & Calibrage ADAS Haut de Gamme",
    description: "Atelier de carrosserie toutes marques, peinture haute précision et banc de calibrage ADAS Autel IA900WA à L'Union (31). 0€ d'avance de frais et véhicule de prêt gratuit.",
    url: "https://procar31.fr",
    siteName: "PROCAR 31",
    images: [
      {
        url: "/assets/procar31.jpg",
        width: 1200,
        height: 630,
        alt: "Carrosserie PROCAR 31",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/assets/logo-procar31.png",
  },
};

export const viewport = {
  themeColor: "#0a0b0e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "CARROSSERIE PROCAR 31",
    "image": "/assets/procard3111.jpg",
    "telephone": "09 81 76 61 76",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "L'Union",
      "postalCode": "31240",
      "addressRegion": "Haute-Garonne",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.6558,
      "longitude": 1.4883
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:30"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card, Insurance direct billing"
  };

  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
