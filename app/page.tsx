import HeroSection from "@/components/home/HeroSection";
import JobExperienceSection from "@/components/home/JobExperienceSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import SkillsShowcaseA from "@/components/home/SkillsShowcaseA";
import InViewFade from "@/components/common/InViewFade";

export default function Home() {
  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-30 mix-blend-screen">
        <span className="firework firework-1" />
        <span className="firework firework-2" />
        <span className="firework firework-3" />
        <span className="firework firework-4" />
        <span className="firework firework-5" />
      </div>
      <InViewFade>
        <HeroSection />
      </InViewFade>
      <InViewFade>
        <SkillsShowcaseA />
      </InViewFade>
      <InViewFade>
        <ProjectsSection />
      </InViewFade>
      <InViewFade>
        <JobExperienceSection />
      </InViewFade>
    </div>
  );
}
