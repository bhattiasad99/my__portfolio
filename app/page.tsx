import ContactSection from "@/components/home/ContactSection";
import HeaderNav from "@/components/home/HeaderNav";
import HeroSection from "@/components/home/HeroSection";
import JobExperienceSection from "@/components/home/JobExperienceSection";
import ProjectsSection from "@/components/home/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-hero">
      <HeaderNav />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-12">
        <HeroSection />
        <ProjectsSection />
        <JobExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}
