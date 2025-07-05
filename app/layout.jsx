import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { DefaultSeo } from 'next-seo';


const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const defaultSEOConfig = {
  title: 'Monel Cocou GAFFAN - Développeur Full-Stack',
  description: 'Portfolio de Monel Cocou GAFFAN, développeur expert en React.js, Next.js, Nest.js, C# et bases de données. Spécialiste applications de gestion pour PME et startups à Rennes.',
  canonical: 'https://monelcocou.com',
  openGraph: {
    type: 'website',
    url: 'https://monelcocou.com',
    title: 'Monel Cocou GAFFAN - Développeur Expert',
    description: 'Portfolio professionnel de Monel Cocou GAFFAN, développeur expert basé à Rennes',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={jetbrainsMono.variable}>
      <DefaultSeo {...defaultSEOConfig} />
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
