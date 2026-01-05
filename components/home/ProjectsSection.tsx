import SectionIntro from "@/components/ui/SectionIntro";
import ProjectCard from "@/components/home/ProjectCard";
import { DATA } from "@/constants/content";

const ProjectsSection = () => {
  return (
    <section id="projects" className="mt-14 space-y-8 sm:mt-16 sm:space-y-10">
      <SectionIntro
        eyebrow="Work Experience"
        title="Selected roles and highlights"
        description="A focused snapshot of the projects and responsibilities that define my recent work."
        className="space-y-3"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {DATA.projects.slice(0, 4).map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-border/70" aria-hidden="true" />
        <a
          href="/projects"
          className="inline-flex items-center justify-center rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80 backdrop-blur transition-colors hover:bg-card"
        >
          View All Projects
        </a>
        <div className="h-px flex-1 bg-border/70" aria-hidden="true" />
      </div>
    </section>
  );
};

export default ProjectsSection;
