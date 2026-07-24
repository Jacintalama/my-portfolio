import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";

interface Props {
  openNav: () => void;
}

const links = [
  { label: "Home", href: "#home", match: ["home"] },
  { label: "Work", href: "#work", match: ["work", "projects"] },
  { label: "Skills", href: "#skills", match: ["skills"] },
  { label: "About", href: "#about", match: ["about"] },
  { label: "Contact", href: "#contact", match: ["contact"] },
];

const sectionIds = ["home", "work", "projects", "skills", "about", "contact"];

const Nav = ({ openNav }: Props) => {
  const [navSticky, setNavSticky] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => setNavSticky(window.scrollY >= 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0 || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-[var(--z-overlay)] w-full border-b transition-colors duration-300 ${
        navSticky
          ? "border-[color:var(--line)] bg-[color:var(--paper)]/95 backdrop-blur-md"
          : "border-transparent bg-[color:var(--paper)]/70"
      }`}
    >
      <div className="page-shell flex h-20 items-center justify-between">
        <a
          href="#home"
          className="font-heading text-xl font-black tracking-[-0.01em] text-[color:var(--ink)] no-underline"
        >
          Jacint Alama
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const isActive = link.match.includes(activeId);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`text-sm font-extrabold no-underline transition-colors duration-200 ${
                  isActive
                    ? "text-[color:var(--oxide)]"
                    : "text-[color:var(--ink-muted)] hover:text-[color:var(--ink)]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={openNav}
          className="grid h-11 w-11 place-items-center rounded-[4px] border border-[color:var(--line-strong)] bg-transparent text-[color:var(--ink)] transition-colors hover:bg-[color:var(--oxide-soft)] md:hidden"
          aria-label="Open navigation"
        >
          <Bars3CenterLeftIcon className="h-6 w-6 rotate-180" />
        </button>
      </div>
    </header>
  );
};

export default Nav;
