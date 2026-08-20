export const SITE_URL = "https://monelcocou.com";
export const SITE_NAME = "Monel Cocou GAFFAN - Portfolio";
export const AUTHOR = "Monel Cocou GAFFAN";

const OG_IMAGE = {
  url: "/assets/photo.png",
  width: 433,
  height: 577,
  alt: "Monel Cocou GAFFAN, développeur full-stack à Rennes",
};

/**
 * Construit les métadonnées d'une page.
 *
 * Next fusionne les métadonnées de façon superficielle : dès qu'une page
 * déclare un objet `openGraph`, celui du layout racine est intégralement
 * remplacé. On le reconstruit donc ici en entier pour ne pas perdre l'image
 * de partage.
 */
export function buildMetadata({ title, description, path }) {
  const fullTitle = `${title} — ${AUTHOR}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
