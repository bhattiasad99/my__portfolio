import { CardDetailType } from "@/utils/types";

type ProjectCardProps = {
  item: CardDetailType;
};

const ProjectCard = ({ item }: ProjectCardProps) => {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border bg-card/75 p-6 shadow-xl backdrop-blur-md transition-transform hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
          <p className="text-sm text-foreground/60">{item.company}</p>
        </div>
        {item.timePeriod ? (
          <span className="rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-semibold text-foreground/80 backdrop-blur">
            {item.timePeriod}
          </span>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-foreground/70">
        {item.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.technologies?.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-semibold text-foreground/70 backdrop-blur"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/40">
          Highlights
        </span>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
        >
          Read More
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
