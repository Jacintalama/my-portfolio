import portfolioData from "@/data/portfolio.json";
import Image from "next/image";
import React from "react";
import ProjectsCard from "./Helper/ProjectsCard";
import { Reveal } from "./Helper/Reveal";

const Projects = () => {
  const { selectedWork, designArchive } = portfolioData;

  return (
    <section id="projects" className="section-band">
      <div className="page-shell">
        <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div className="section-head">
            <p className="section-kicker">Selected work</p>
            <h2 className="section-title">Products, tools, and systems.</h2>
          </div>
          <p className="body-copy md:ml-auto">
            Client platforms, storefronts, and automation work shipped to production &mdash;
            each one live or delivered to a real team.
          </p>
        </div>

        <Reveal group className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {selectedWork.map((project, index) => (
            <ProjectsCard
              key={project.title}
              title={project.title}
              category={project.category}
              url={project.url}
              image={project.image}
              summary={project.summary}
              index={index}
            />
          ))}
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="section-head">
            <p className="section-kicker">Design archive</p>
            <h3 className="font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-black leading-[1.02] tracking-[-0.01em]">
              The visual work, kept as a clean index.
            </h3>
            <p className="body-copy">
              UI concepts, print layouts, and brand collateral from the design side of the
              practice.
            </p>
          </div>
          <Reveal group className="ruled-panel p-4 sm:p-6">
            {designArchive.map((item, index) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="archive-link reveal-item"
                style={{ "--i": index } as React.CSSProperties}
                aria-label={`Open ${item.title} (opens in a new tab)`}
              >
                <span className="font-heading text-base font-black tabular-nums text-[color:var(--ink-faint)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <strong className="block font-heading text-lg font-black leading-tight">
                    {item.title}
                  </strong>
                  <span className="text-sm font-semibold text-[color:var(--ink-muted)]">
                    {item.type}
                  </span>
                </span>
                <span className="relative hidden h-14 w-20 overflow-hidden rounded-[4px] border border-[color:var(--line)] bg-[color:var(--paper-soft)] sm:block">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </span>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Projects;
