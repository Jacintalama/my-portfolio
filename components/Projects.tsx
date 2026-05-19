import portfolioData from "@/data/portfolio.json";
import Image from "next/image";
import React from "react";
import ProjectsCard from "./Helper/ProjectsCard";

const Projects = () => {
  const { selectedWork, designArchive } = portfolioData;

  return (
    <section id="projects" className="section-band bg-[color:var(--paper-soft)]">
      <div className="page-shell">
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="section-kicker">Selected Work</p>
            <h2 className="section-title mt-3">Business systems first.</h2>
          </div>
          <p className="body-copy md:ml-auto">
            A curated front row of the strongest shipped work, followed by a
            compact archive for design and production pieces.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="section-kicker">Design Archive</p>
            <h3 className="mt-3 font-heading text-4xl font-black leading-none">
              The visual work stays visible, just cleaner.
            </h3>
          </div>
          <div className="ruled-panel p-4 sm:p-6">
            {designArchive.map((item, index) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="archive-link"
                aria-label={`Open ${item.title}`}
              >
                <span className="font-heading text-xl font-black text-[color:var(--oxide)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
