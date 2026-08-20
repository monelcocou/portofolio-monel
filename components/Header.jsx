import Link from "next/link";
import { Button } from "./ui/button";

//Components
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-primary py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-4xl font-semibold">
            Monel<span className="text-accent">.</span>
          </span>
        </Link>

        {/*Desktop nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link
            href="/assets/Monel-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Mon CV</Button>
          </Link>
        </div>

        {/*Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
