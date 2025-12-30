import { ProjectCardDetails } from "@/constants/work-experience.constants";
import SectionIntro from "@/components/ui/SectionIntro";
import ProjectCard from "@/components/home/ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="mt-16 space-y-10">
      <SectionIntro
        eyebrow="Work Experience"
        title="Selected roles and highlights"
        description="A focused snapshot of the projects and responsibilities that define my recent work."
        className="space-y-3"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {ProjectCardDetails.slice(0, 4).map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
