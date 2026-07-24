import portfolioData from "@/data/portfolio.json";
import Image from "next/image";
import React from "react";
import { Reveal } from "./Helper/Reveal";

type Metric = { value: string; label: string };
type CaseImage = { src: string; alt: string; width?: number; height?: number };
type CaseStudy = {
  title: string;
  category: string;
  status: string;
  summary: string;
  highlight?: string;
  metrics: Metric[];
  tags: string[];
  images: CaseImage[];
};

const Shot = ({ img }: { img: CaseImage }) => (
  <figure className="m-0 overflow-hidden rounded-md border border-[color:var(--line-strong)] bg-[color:var(--paper-strong)]">
    <Image
      src={img.src}
      alt={img.alt}
      width={img.width ?? 1600}
      height={img.height ?? 1000}
      sizes="(max-width: 1024px) 92vw, 560px"
      className="h-auto w-full"
    />
  </figure>
);

const Metrics = ({ metrics }: { metrics: Metric[] }) => (
  <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-[color:var(--line-strong)] bg-[color:var(--line-strong)]">
    {metrics.map((m) => (
      <div key={m.label} className="bg-[color:var(--paper-strong)] p-4 sm:p-5">
        <span className="metric-value">{m.value}</span>
        <span className="metric-label">{m.label}</span>
      </div>
    ))}
  </div>
);

const CaseStudyItem = ({ cs }: { cs: CaseStudy }) => {
  const flagship = cs.images.length >= 2;

  return (
    <Reveal className="ruled-panel overflow-hidden">
      <article className="grid gap-8 p-5 sm:p-7 lg:p-9">
        <header className="grid gap-5 md:grid-cols-[1.5fr_1fr] md:items-start md:gap-10">
          <div className="min-w-0">
            <p className="text-[0.72rem] font-black uppercase tracking-[0.12em] text-[color:var(--oxide)]">
              {cs.category}
            </p>
            <h3 className="mt-3 font-heading text-[clamp(1.85rem,4vw,2.9rem)] font-black leading-[0.98] tracking-[-0.02em] text-[color:var(--ink)]">
              {cs.title}
            </h3>
            <p className="mt-4 max-w-[54ch] text-[0.99rem] leading-7 text-[color:var(--ink-muted)]">
              {cs.summary}
            </p>
          </div>
          <div className="md:flex md:justify-end">
            <span className="status-badge">{cs.status}</span>
          </div>
        </header>

        {flagship ? (
          <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <Shot img={cs.images[0]} />
            <div className="grid content-start gap-5">
              <Shot img={cs.images[1]} />
              <Metrics metrics={cs.metrics} />
            </div>
          </div>
        ) : (
          <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
            <Shot img={cs.images[0]} />
            <Metrics metrics={cs.metrics} />
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {cs.tags.map((tag) => (
            <span key={tag} className="tag-chip">
              {tag}
            </span>
          ))}
        </div>

        {cs.highlight ? (
          <blockquote className="m-0 border-t border-[color:var(--line)] pt-6">
            <p className="grid grid-cols-[auto_1fr] gap-3 text-[0.99rem] font-semibold leading-7 text-[color:var(--ink)]">
              <span aria-hidden="true" className="font-heading text-[color:var(--oxide)]">
                &rarr;
              </span>
              <span className="max-w-[72ch]">{cs.highlight}</span>
            </p>
          </blockquote>
        ) : null}
      </article>
    </Reveal>
  );
};

const CaseStudies = () => {
  const caseStudies = portfolioData.caseStudies as CaseStudy[];

  return (
    <section id="work" className="section-band bg-[color:var(--paper-soft)]">
      <div className="page-shell">
        <div className="section-head max-w-3xl">
          <p className="section-kicker">Featured case studies</p>
          <h2 className="section-title">Systems built to be correct, then kept that way.</h2>
          <p className="body-copy">
            Two production platforms where correctness was the whole job &mdash; a multi-store
            profit engine consolidating real money, and the safety layer that guards an
            AI-mediated underwriting pipeline.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:mt-14 lg:gap-10">
          {caseStudies.map((cs) => (
            <CaseStudyItem key={cs.title} cs={cs} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
