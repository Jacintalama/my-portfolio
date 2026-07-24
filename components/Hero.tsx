import portfolioData from "@/data/portfolio.json";
import Image from "next/image";
import React from "react";

const Hero = () => {
  const { hero, stats } = portfolioData;

  return (
    <section id="home" className="relative pt-24 md:pt-28">
      <div className="page-shell">
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-10 py-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
          <div className="min-w-0">
            <p className="section-kicker hero-rise mb-6" style={{ animationDelay: "40ms" }}>
              {hero.eyebrow}
            </p>

            <h1
              className="display-title hero-rise max-w-[820px]"
              style={{ animationDelay: "120ms" }}
              aria-label={hero.primaryTitle}
            >
              <span className="block">Developer</span>
              <span className="block">and visual</span>
              <span className="block">
                maker<span className="text-[color:var(--oxide)]">.</span>
              </span>
            </h1>

            <p
              className="body-copy hero-rise mt-7 text-[1.05rem] md:text-[1.12rem]"
              style={{ animationDelay: "240ms" }}
            >
              {hero.summary}
            </p>

            <div
              className="hero-rise mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "340ms" }}
            >
              <a
                href="#work"
                className="print-button w-full sm:w-auto"
              >
                View Case Studies
              </a>
              <a
                href={hero.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="print-button secondary w-full sm:w-auto"
              >
                My Resume
              </a>
            </div>

            <div
              className="hero-rise mt-11 grid border-y border-[color:var(--line-strong)] sm:grid-cols-4"
              style={{ animationDelay: "440ms" }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-b border-[color:var(--line)] py-4 sm:border-b-0 sm:border-r sm:px-4 sm:last:border-r-0 sm:first:pl-0"
                >
                  <strong className="font-heading text-[2.1rem] font-black leading-none text-[color:var(--oxide)]">
                    {stat.value}
                  </strong>
                  <span className="mt-2 block text-[0.74rem] font-extrabold uppercase leading-snug tracking-[0.06em] text-[color:var(--ink-muted)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="hero-rise relative mx-auto w-full max-w-[290px] lg:mx-0 lg:ml-auto"
            style={{ animationDelay: "200ms" }}
          >
            <div className="ruled-panel relative overflow-hidden p-2.5 shadow-[8px_8px_0_var(--oxide-soft)]">
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
              <div className="mt-2.5 grid grid-cols-[auto_1fr] items-center gap-3 border-t border-[color:var(--line-strong)] pt-3">
                <span className="font-heading text-2xl font-black leading-none text-[color:var(--oxide)]">
                  JA
                </span>
                <p className="text-[0.8rem] font-semibold leading-snug text-[color:var(--ink-muted)]">
                  Practical web systems, tested end to end, plus the visual work to match.
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
