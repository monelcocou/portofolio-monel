import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
    metadataBase: new URL('https://monelcocou.com'),
    title: {
        default: 'Monel Cocou GAFFAN - Développeur Full-Stack',
        template: '%s — Monel Cocou GAFFAN',
    },
    description: 'Développeur full-stack, plus de 8 ans d’expérience. Logiciels métier en production chez 70 cliniques et laboratoires. Master 2 MIAGE à Rennes, en alternance.',
    keywords: 'Monel Cocou GAFFAN, développeur full-stack, React.js, Next.js, NestJS, Symfony, Laravel, C#, MIAGE, développeur Rennes',
    authors: [{ name: 'Monel Cocou GAFFAN' }],
    creator: 'Monel Cocou GAFFAN',
    alternates: {
        canonical: '/',
    },
    robots: {
        index: true,
        follow: true,
    },
    verification: {
        google: '1jRaFlBzW6GIb-u_zO1gWAZ63YQCQsHmIyIA-f5p5Hc',
    },
    openGraph: {
        title: 'Monel Cocou GAFFAN - Développeur Expert',
        description: 'Développeur full-stack basé à Rennes. Des logiciels métier en production chez 70 cliniques et laboratoires.',
        url: 'https://monelcocou.com',
        siteName: 'Monel Cocou GAFFAN - Portfolio',
        locale: 'fr_FR',
        type: 'website',
        images: [
            {
                url: '/assets/photo.png',
                width: 433,
                height: 577,
                alt: 'Monel Cocou GAFFAN, développeur full-stack à Rennes',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: 'Monel Cocou GAFFAN - Développeur Expert',
        description: 'Développeur full-stack basé à Rennes. Des logiciels métier en production chez 70 cliniques et laboratoires.',
        images: ['/assets/photo.png'],
    },
};

export default function RootLayout({ children }) {
  return (
      <html lang="fr">
      <body className={jetbrainsMono.variable}>
      <Header />
      <StairTransition />
      <PageTransition>{children}</PageTransition>
      <Footer />
      </body>
      </html>
  );
}