import SectionIntro from "@/components/ui/SectionIntro";
import {
  DockerIcon,
  ExpressIcon,
  MongoDBIcon,
  NestIcon,
  NodeIcon,
  OpenAIIcon,
  PostgreSQLIcon,
  ReactNativeIcon,
  SQLIcon,
  StorybookIcon,
  TypeScriptIcon,
} from "@/constants/icons";

const skillCards = [
  { label: "TypeScript", Icon: TypeScriptIcon, color: "#3178C6" },
  { label: "Node.js", Icon: NodeIcon, color: "#22C55E" },
  { label: "NestJS", Icon: NestIcon, color: "#E0234E" },
  { label: "Express", Icon: ExpressIcon, color: "#E5E7EB" },
  { label: "MongoDB", Icon: MongoDBIcon, color: "#34D399" },
  { label: "PostgreSQL", Icon: PostgreSQLIcon, color: "#3B82F6" },
  { label: "SQL", Icon: SQLIcon, color: "#CBD5F5" },
  { label: "Docker", Icon: DockerIcon, color: "#38BDF8" },
  { label: "Storybook", Icon: StorybookIcon, color: "#FB7185" },
  { label: "React Native", Icon: ReactNativeIcon, color: "#67E8F9" },
  { label: "OpenAI", Icon: OpenAIIcon, color: "#F8FAFC" },
];

const SkillsShowcaseA = () => {
  return (
    <section
      id="skills-showcase-a"
      className="mt-16 rounded-[2.5rem] border border-border bg-card/60 p-6 shadow-2xl backdrop-blur sm:mt-20 sm:p-8 md:p-14"
    >
      <div className="relative overflow-hidden rounded-[2rem]">
        <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="relative grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="space-y-6">
          <SectionIntro
            eyebrow="Skill Spectrum"
            title="Precision tools for modern product builds"
            description="A curated mix of backend depth, system reliability, and UI craft. Built to ship fast without cutting corners."
            className="space-y-3"
          />
          <div className="grid gap-3 text-sm text-foreground/70 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card/70 p-4 backdrop-blur">
              API design, auth, and data pipelines
            </div>
            <div className="rounded-2xl border border-border bg-card/70 p-4 backdrop-blur">
              UI systems with accessible components
            </div>
            <div className="rounded-2xl border border-border bg-card/70 p-4 backdrop-blur">
              Performance budgets and observability
            </div>
            <div className="rounded-2xl border border-border bg-card/70 p-4 backdrop-blur">
              Deployment and infrastructure hygiene
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {skillCards.map((skill, index) => {
            const delay = `${index * 0.08}s`;
            return (
              <div
                key={skill.label}
                className="skill-card group rounded-3xl border border-border bg-card/70 p-4 text-center shadow-lg backdrop-blur transition-transform hover:-translate-y-1"
                style={{ animationDelay: delay }}
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background/70 shadow-sm">
                  <skill.Icon size={28} color={skill.color} />
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
                  {skill.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcaseA;
