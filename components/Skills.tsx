import portfolioData from "@/data/portfolio.json";
import React from "react";
import { Reveal } from "./Helper/Reveal";

const Skills = () => {
  const { capabilityGroups } = portfolioData;

  return (
    <section id="skills" className="section-band bg-[color:var(--paper-soft)]">
      <div className="page-shell">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="section-head">
            <p className="section-kicker">Capabilities</p>
            <h2 className="section-title">Across code, testing, and automation.</h2>
            <p className="body-copy">
              No percentage bars. The useful signal is the kind of work I can take from an
              unclear request to a shipped, tested result.
            </p>
          </div>

          <Reveal group className="grid gap-4 md:grid-cols-3">
            {capabilityGroups.map((group, index) => (
              <section
                key={group.title}
                className="reveal-item ruled-panel p-5"
                style={{ "--i": index } as React.CSSProperties}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-[2px] bg-[color:var(--oxide)]"
                  />
                  <h3 className="font-heading text-xl font-black leading-none">
                    {group.title}
                  </h3>
                </div>
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
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;
