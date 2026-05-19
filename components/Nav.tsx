import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";

interface Props {
  openNav: () => void;
}

const links = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Nav = ({ openNav }: Props) => {
  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavSticky(window.scrollY >= 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-[1000] w-full border-b border-[color:var(--line)] transition-colors duration-300 ${
        navSticky ? "bg-[color:var(--paper)]/95 backdrop-blur-md" : "bg-[color:var(--paper)]/80"
      }`}
    >
      <div className="page-shell flex h-20 items-center justify-between">
        <a
          href="#home"
          className="font-heading text-xl font-black tracking-0 text-[color:var(--ink)] no-underline"
        >
          Jacint Alama
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-extrabold text-[color:var(--ink-muted)] no-underline transition-colors duration-200 hover:text-[color:var(--oxide)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={openNav}
          className="grid h-11 w-11 place-items-center border border-[color:var(--line-strong)] bg-transparent text-[color:var(--ink)] md:hidden"
          aria-label="Open navigation"
        >
          <Bars3CenterLeftIcon className="h-6 w-6 rotate-180" />
        </button>
      </div>
    </header>
  );
};

export default Nav;
