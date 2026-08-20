import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Une opportunité, un projet ou une question ? Écrivez-moi via le formulaire, je réponds sous 48 heures.",
  path: "/contact",
});

export default function ContactLayout({ children }) {
  return children;
}
