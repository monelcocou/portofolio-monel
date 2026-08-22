import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Réalisations",
  description:
    "Medica, Medivio, Cica Laboratoire : trois produits conçus et livrés, utilisés au quotidien par 70 cliniques et laboratoires.",
  path: "/realisations",
});

export default function RealisationsLayout({ children }) {
  return children;
}
