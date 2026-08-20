import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Parcours & compétences",
  description:
    "Plus de 8 ans d’expérience, du C# / SQL Server aux plateformes SaaS Next.js et NestJS. Master 2 MIAGE à l’Université de Rennes, en alternance chez Samsic.",
  path: "/propos",
});

export default function ProposLayout({ children }) {
  return children;
}
