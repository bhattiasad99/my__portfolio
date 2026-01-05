import SectionIntro from "@/components/ui/SectionIntro";
import {
  DockerIcon,
  ExpoIcon,
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

const orbitSkills = [
  { label: "TypeScript", Icon: TypeScriptIcon, color: "#3178C6" },
  { label: "Node.js", Icon: NodeIcon, color: "#22C55E" },
  { label: "NestJS", Icon: NestIcon, color: "#E0234E" },
  { label: "PostgreSQL", Icon: PostgreSQLIcon, color: "#3B82F6" },
  { label: "MongoDB", Icon: MongoDBIcon, color: "#34D399" },
  { label: "SQL", Icon: SQLIcon, color: "#E2E8F0" },
  { label: "Docker", Icon: DockerIcon, color: "#38BDF8" },
  { label: "Storybook", Icon: StorybookIcon, color: "#FB7185" },
  { label: "React Native", Icon: ReactNativeIcon, color: "#67E8F9" },
  { label: "Expo", Icon: ExpoIcon, color: "#F8FAFC" },
  { label: "OpenAI", Icon: OpenAIIcon, color: "#F8FAFC" },
];

const SkillsShowcaseB = () => {
  return (
    <section
      id="skills-showcase-b"
      className="mt-16 rounded-[2.5rem] border border-border bg-card/70 p-6 shadow-2xl backdrop-blur sm:mt-20 sm:p-8 md:p-14"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="space-y-6">
          <SectionIntro
            eyebrow="Skill Orbit"
            title="A rotating map of the stack"
            description="Hover-ready icons in a slow orbit, anchored by systems thinking and delivery discipline."
            className="space-y-3"
          />
          <div className="grid gap-3 text-sm text-foreground/70">
            <div className="rounded-2xl border border-border bg-card/70 p-4 backdrop-blur">
              Clean architecture for scalable teams
            </div>
            <div className="rounded-2xl border border-border bg-card/70 p-4 backdrop-blur">
              Mobile + web delivery with shared patterns
            </div>
            <div className="rounded-2xl border border-border bg-card/70 p-4 backdrop-blur">
              Reliable data layers with observability
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="skill-orbit relative">
            <div className="skill-orbit-core">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
                Full Stack
              </p>
              <p className="mt-2 text-lg font-semibold text-foreground">
                Product Delivery
              </p>
            </div>
            <div className="skill-orbit-ring" />
            <ul className="skill-orbit-items">
              {orbitSkills.map((skill, index) => {
                const angle = `${(360 / orbitSkills.length) * index}deg`;
                const delay = `${index * 0.12}s`;
                return (
                  <li
                    key={skill.label}
                    className="skill-orbit-item"
                    style={
                      {
                        "--angle": angle,
                        animationDelay: delay,
                      } as React.CSSProperties
                    }
                  >
                    <div className="skill-orbit-icon">
                      <skill.Icon size={22} color={skill.color} />
                    </div>
                    <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/60">
                      {skill.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcaseB;
