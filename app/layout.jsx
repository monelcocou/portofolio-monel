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

// export const metadata = {
//   title: "Monel Cocou GAFFAN",
//   description:
//     "Découvrez le portfolio de Monel Cocou GAFFAN, " +
//     "expert en développement d'applications Web et Desktop. " +
//     "Spécialiste en React.js, Next.js, Nest.js, C#, WordPress, et bases de données SQL, " +
//     "j'aide les PME et startups à optimiser leur gestion quotidienne à travers des applications de gestion performantes et évolutives. " +
//     "Explorez mes réalisations et contactez-moi pour transformer vos idées en solutions performantes.",
// };

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
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
