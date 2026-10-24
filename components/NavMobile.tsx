import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const links = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const NavMobile = ({ closeNav, showNav }: Props) => {
  const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div aria-hidden={!showNav}>
      <button
        type="button"
        className={`fixed inset-0 z-[var(--z-drawer)] bg-[color:var(--ink)]/30 transition-opacity duration-300 ${
          showNav ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeNav}
        aria-label="Close navigation overlay"
      />
      <nav
        className={`${navOpenStyle} fixed left-0 top-0 z-[calc(var(--z-drawer)+1)] flex h-full w-[82%] max-w-[360px] transform flex-col justify-between border-r-2 border-[color:var(--line-strong)] bg-[color:var(--paper)] p-7 transition-transform duration-300`}
      >
        <div className="flex items-center justify-between">
          <span className="font-heading text-xl font-black">Jacint</span>
          <button
            type="button"
            onClick={closeNav}
            className="grid h-10 w-10 place-items-center border border-[color:var(--line-strong)] bg-transparent"
            aria-label="Close navigation"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="grid gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeNav}
              className="border-t border-[color:var(--line)] pt-5 font-heading text-4xl font-black leading-none no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-sm font-semibold leading-6 text-[color:var(--ink-muted)]">
          Developer, automation builder, and AI-assisted workflow builder.
        </p>
      </nav>
    </div>
  );
};

export default NavMobile;
