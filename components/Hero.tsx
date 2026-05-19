import portfolioData from "@/data/portfolio.json";
import Image from "next/image";
import React from "react";

const Hero = () => {
  const { hero, stats } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen pt-24 md:pt-28">
      <div className="page-shell">
        <div className="grid min-h-[calc(100vh-7rem)] items-center gap-10 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div>
            <p className="section-kicker mb-5">{hero.eyebrow}</p>
            <h1 className="display-title max-w-[820px]">{hero.primaryTitle}</h1>
            <p className="body-copy mt-7 text-[1.05rem] md:text-[1.1rem]">
              {hero.summary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={hero.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="print-button"
              >
                My Resume
              </a>
              <a href="#projects" className="print-button secondary">
                View Selected Work
              </a>
            </div>

            <div className="mt-10 grid border-y border-[color:var(--line-strong)] sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-b border-[color:var(--line)] py-4 sm:border-b-0 sm:border-r sm:px-4 sm:last:border-r-0"
                >
                  <strong className="font-heading text-[2.1rem] leading-none text-[color:var(--oxide)]">
                    {stat.value}
                  </strong>
                  <span className="mt-2 block text-[0.76rem] font-extrabold uppercase leading-snug tracking-[0.08em] text-[color:var(--ink-muted)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="ruled-panel relative overflow-hidden p-3 shadow-[12px_12px_0_var(--oxide-soft)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-[color:var(--paper-soft)]">
                <Image
                  src={hero.portrait}
                  alt="Portrait of Jacint Alama"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 460px"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-4 border-t border-[color:var(--line-strong)] pt-4">
                <span className="font-heading text-4xl font-black text-[color:var(--oxide)]">
                  J
                </span>
                <p className="text-sm font-semibold leading-relaxed text-[color:var(--ink-muted)]">
                  Practical web systems, visual production, and AI-assisted
                  workflows for business projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
