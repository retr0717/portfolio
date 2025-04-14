import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-6 top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/*logo*/}
        <Link href="">
          <h1 className="text-2xl font-bold">
            Alwin<span className="text-accent">.</span>
          </h1>
        </Link>
        {/*Desktop Nav*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button variant="outline" size="default" className="hover:text-black">Hire me</Button>
          </Link>
        </div>

        {/*Mobile Nav*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
