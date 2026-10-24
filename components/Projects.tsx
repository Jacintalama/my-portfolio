import portfolioData from "@/data/portfolio.json";
import React from "react";
import ProjectsCard from "./Helper/ProjectsCard";
import { Reveal } from "./Helper/Reveal";

const Projects = () => {
  const { selectedWork } = portfolioData;

  return (
    <section id="projects" className="section-band">
      <div className="page-shell">
        <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div className="section-head">
            <p className="section-kicker">Selected work</p>
            <h2 className="section-title">Products, tools, and systems.</h2>
          </div>
          <p className="body-copy md:ml-auto">
            Client platforms, storefronts, and automation work shipped to production,
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
      </div>
    </section>
  );
};

export default Projects;
