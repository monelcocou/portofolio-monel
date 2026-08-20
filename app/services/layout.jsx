import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Expertise",
  description:
    "Applications métier, plateformes SaaS, API REST, déploiement Docker et CI/CD : les domaines où j’interviens, adossés à des produits en production.",
  path: "/services",
});

export default function ServicesLayout({ children }) {
  return children;
}
