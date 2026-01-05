import ProjectCard from "@/components/home/ProjectCard";
import SectionIntro from "@/components/ui/SectionIntro";
import { DATA } from "@/constants/content";

export default function ProjectsPage() {
  return (
    <>
      <section id="projects" className="space-y-8 sm:space-y-10">
        <SectionIntro
          eyebrow="Projects"
          title="All project highlights"
          description="Every project from the portfolio collection, grouped in one place."
          className="space-y-3"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.projects.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
