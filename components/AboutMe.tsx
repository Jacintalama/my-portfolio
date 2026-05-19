import React from "react";

const roleLanes = [
  {
    title: "Developer",
    text: "I work on React, Next.js, Laravel, Django, data flows, and production-facing web interfaces.",
  },
  {
    title: "Visual maker",
    text: "I create UI concepts, print layouts, product visuals, and marketing assets with Adobe tools.",
  },
  {
    title: "AI workflow builder",
    text: "I use Claude Code and modern tooling to move faster while keeping the output practical and inspectable.",
  },
];

const AboutMe = () => {
  return (
    <section id="about" className="section-band bg-[color:var(--paper-soft)]">
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">About</p>
            <h2 className="section-title mt-3">Practical output, not portfolio decoration.</h2>
          </div>
          <div>
            <p className="body-copy text-[1.05rem]">
              I am a full stack developer with visual design experience. My work
              sits between business systems, user interfaces, automation, and
              production assets, which helps me understand both the code and how
              it should look when a real person opens it.
            </p>
            <div className="mt-8 grid gap-4">
              {roleLanes.map((lane, index) => (
                <div
                  key={lane.title}
                  className="grid gap-4 border-t border-[color:var(--line-strong)] py-5 sm:grid-cols-[90px_1fr]"
                >
                  <span className="font-heading text-2xl font-black text-[color:var(--oxide)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-2xl font-black leading-none">
                      {lane.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--ink-muted)]">
                      {lane.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
