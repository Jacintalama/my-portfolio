import portfolioData from "@/data/portfolio.json";
import React from "react";

const Skills = () => {
  const { capabilityGroups } = portfolioData;

  return (
    <section id="skills" className="section-band">
      <div className="page-shell">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="section-kicker">Capabilities</p>
            <h2 className="section-title mt-3">Built across code and visual production.</h2>
            <p className="body-copy mt-6">
              No percentage bars. The useful signal is the type of work I can
              take from unclear request to shipped output.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {capabilityGroups.map((group, index) => (
              <section key={group.title} className="ruled-panel p-5">
                <p className="mb-5 font-heading text-4xl font-black leading-none text-[color:var(--oxide)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-heading text-2xl font-black leading-none">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-t border-[color:var(--line)] pt-3 text-sm font-bold text-[color:var(--ink-muted)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
