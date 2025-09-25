import React from "react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300  ${isScrolled ? "py-3bg-background/80 backdrop-blur-md shadow-xs" : "py-5"}`}>
      <div className="container flex items-center justify-between">
        <a
          className="font-bold text-xl text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Rohit</span> Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex  space-x-8">
          {navItems.map((items, key) => (
            <a
              key={key}
              href={items.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {items.name}
            </a>
          ))}
        </div>



        {/* mobile menu button */}
        <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="md:hidden text-foreground hover:text-primary transition-colors duration-300 relative z-50"
        >
        {isMenuOpen ? <X size={24}/> : <Menu size={24}/> }
        </button>

        
        {/* mobile nav */}
        
        <div className={`fixed inset-0 z-40 flex items-center justify-center transition-all duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div className="flex flex-col items-center space-y-8 text-2xl">
            {navItems.map((items, key) => (
              <a
                key={key}
                href={items.href}
                className="text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {items.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
