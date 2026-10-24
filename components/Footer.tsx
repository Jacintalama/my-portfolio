import portfolioData from "@/data/portfolio.json";
import React from "react";

const footerLinks = [
  { label: "Case studies", href: "#work" },
  { label: "Selected work", href: "#projects" },
  { label: "Capabilities", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const { contact, hero } = portfolioData;
  const year = 2026;

  return (
    <footer className="site-footer">
      <div className="page-shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr] md:py-14">
        <div className="max-w-md">
          <a
            href="#home"
            className="font-heading text-2xl font-black tracking-[-0.01em] text-[color:var(--ink)] no-underline"
          >
            {hero.name}
          </a>
          <p className="mt-4 text-sm leading-7 text-[color:var(--ink-muted)]">
            Full-stack developer and automation builder making manual work automatic with
            scrapers, bots, and tested web systems. Open to roles, contracts, and system builds.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a href={`mailto:${contact.email}`} className="print-button px-4 py-2.5 text-[0.78rem]">
              Email me
            </a>
            <a
              href={hero.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="print-button secondary px-4 py-2.5 text-[0.78rem]"
            >
              Resume
            </a>
          </div>
        </div>

        <nav className="grid content-start gap-3" aria-label="Footer">
          <p className="text-[0.72rem] font-black uppercase tracking-[0.14em] text-[color:var(--oxide)]">
            Sections
          </p>
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="w-fit text-sm font-bold text-[color:var(--ink-muted)] no-underline transition-colors hover:text-[color:var(--oxide)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-[color:var(--line)]">
        <div className="page-shell flex flex-col gap-2 py-5 text-xs font-semibold text-[color:var(--ink-faint)] sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {year} {hero.name}. All rights reserved.</span>
          <span>Built with Next.js &amp; TypeScript.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
