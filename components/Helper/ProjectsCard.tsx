import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  category: string;
  url: string;
  image: string;
  summary: string;
  index: number;
}

const ProjectsCard = ({ title, category, url, image, summary, index }: Props) => {
  return (
    <article
      className="reveal-item ruled-panel group overflow-hidden"
      style={{ "--i": index } as React.CSSProperties}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${title} (opens in a new tab)`}
        className="grid h-full text-inherit no-underline transition-transform duration-300 ease-out hover:-translate-y-1"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-[color:var(--line-strong)] bg-[color:var(--paper-soft)]">
          <Image
            src={image}
            alt={`${title} project preview`}
            fill
            sizes="(max-width: 768px) 92vw, (max-width: 1180px) 45vw, 360px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        </div>
        <div className="grid gap-3 p-5">
          <p className="text-[0.72rem] font-black uppercase tracking-[0.12em] text-[color:var(--oxide)]">
            {category}
          </p>
          <h3 className="font-heading text-2xl font-black leading-none text-[color:var(--ink)]">
            {title}
          </h3>
          <p className="text-sm leading-7 text-[color:var(--ink-muted)]">{summary}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-black text-[color:var(--blueprint)]">
            View project
            <span
              aria-hidden="true"
              className="transition-transform duration-300 ease-out group-hover:translate-x-1"
            >
              &#8599;
            </span>
          </span>
        </div>
      </a>
    </article>
  );
};

export default ProjectsCard;
