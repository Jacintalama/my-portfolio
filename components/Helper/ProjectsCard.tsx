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
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="ruled-panel group overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-1">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${title}`}
        className="grid h-full text-inherit no-underline"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-[color:var(--line-strong)] bg-[color:var(--paper-soft)]">
          <Image
            src={image}
            alt={`${title} project preview`}
            fill
            sizes="(max-width: 768px) 92vw, (max-width: 1180px) 45vw, 360px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          <span className="absolute left-3 top-3 rounded-[3px] border border-[color:var(--line-strong)] bg-[color:var(--paper)] px-2 py-1 font-heading text-sm font-black text-[color:var(--oxide)]">
            {number}
          </span>
        </div>
        <div className="grid gap-4 p-5">
          <div>
            <p className="mb-2 text-[0.72rem] font-black uppercase tracking-[0.12em] text-[color:var(--oxide)]">
              {category}
            </p>
            <h3 className="font-heading text-2xl font-black leading-none tracking-0 text-[color:var(--ink)]">
              {title}
            </h3>
          </div>
          <p className="text-sm leading-7 text-[color:var(--ink-muted)]">
            {summary}
          </p>
          <span className="mt-auto inline-flex text-sm font-black text-[color:var(--blueprint)]">
            View project
          </span>
        </div>
      </a>
    </article>
  );
};

export default ProjectsCard;
