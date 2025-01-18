import Link from "next/Link";
import { Button } from "./ui/button";

//Components
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 textwhite ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Monel<span className="text-accent">.</span>
          </h1>
        </Link>

        {/*Desktop nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/assets/CV%20Monel%20GAFFAN.pdf">
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
