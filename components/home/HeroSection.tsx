import ImageComponent from "@/components/common/ImageComponent";
import { Download, Github, Linkedin } from "lucide-react";
import { HERO } from "@/constants/content";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative grid items-center gap-10 overflow-hidden rounded-[2.5rem] border border-border bg-card/75 p-10 shadow-2xl backdrop-blur-lg md:grid-cols-[1.2fr_0.8fr] md:p-14"
    >
      <div className="absolute -left-20 top-6 h-64 w-64 rounded-full glow-top-left opacity-70 blur-3xl" />
      <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full glow-top-right opacity-70 blur-3xl" />

      <div className="relative space-y-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-accent/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent-foreground">
          {HERO.designation}
        </span>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {HERO.name}
          </h1>

        </div>
        <div className="space-y-3 text-sm leading-relaxed text-foreground/70 md:text-base text-justify">
          {HERO.description}
        </div>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-background shadow-lg transition-transform hover:-translate-y-0.5"
            href="/cv.pdf"
          >
            Book a Meeting
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            href="#projects"
          >
            View Projects
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border bg-card/70 shadow-xl backdrop-blur-md">
          <div className="flex h-full w-full items-center justify-center text-sm font-semibold uppercase tracking-[0.3em] text-foreground/40">
            <ImageComponent
              source="/HomePage/ProfilePic.jpg"
              altText="Your Photo"
              width={200}
              height={250}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60 shadow-lg backdrop-blur">
          Available for collaborations
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
