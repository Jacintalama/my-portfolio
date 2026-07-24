import React from "react";
import { Reveal } from "./Helper/Reveal";

const roleLanes = [
  {
    title: "Developer",
    text: "React, Next.js, TypeScript, Laravel, Django, and PostgreSQL/Prisma data layers behind production-facing web interfaces.",
  },
  {
    title: "Testing & reliability",
    text: "Test-driven development, regression matrices, and safety layers that keep AI-assisted and multi-store systems trustworthy in production.",
  },
  {
    title: "Visual maker",
    text: "UI concepts, print layouts, product visuals, and brand assets, produced with the Adobe suite and a real eye for how it reads.",
  },
];

const AboutMe = () => {
  return (
    <section id="about" className="section-band">
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="section-head">
            <p className="section-kicker">About</p>
            <h2 className="section-title">Practical output, not portfolio decoration.</h2>
          </div>
          <div>
            <p className="body-copy text-[1.05rem]">
              I am a full-stack developer with real visual design experience. My work sits
              between business systems, user interfaces, automation, and the tests that keep
              them honest, which means I understand both the code and how it should
              look when a real person opens it.
            </p>

            <Reveal group className="mt-8 grid gap-4">
              {roleLanes.map((lane, index) => (
                <div
                  key={lane.title}
                  className="reveal-item grid gap-2 border-t border-[color:var(--line-strong)] py-5 sm:grid-cols-[190px_1fr] sm:gap-6"
                  style={{ "--i": index } as React.CSSProperties}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 rounded-[2px] bg-[color:var(--oxide)]"
                    />
                    <h3 className="font-heading text-xl font-black leading-none">
                      {lane.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-7 text-[color:var(--ink-muted)]">
                    {lane.text}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
