"use client";

import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import SectionIntro from "@/components/ui/SectionIntro";

type JobPosition = {
  title: string;
  period: string;
  summary: string;
};

type JobEntry = {
  id: string;
  company: string;
  location: string;
  title: string;
  labelSubtitle?: string;
  period: string;
  summary: string;
  highlights: string[];
  positions?: JobPosition[];
};

const jobEntries: JobEntry[] = [
  {
    id: "ziel-global",
    company: "Ziel Global",
    location: "Islamabad, Pakistan · Hybrid",
    title: "Senior Software Developer",
    labelSubtitle: "Senior Software Developer",
    period: "2021 - Present",
    summary:
      "Led architecture and development of enterprise-grade ERPs, internal platforms, and AI-driven applications with a focus on clean architecture, real-time functionality, and measurable performance gains.",
    highlights: [
      "Built scalable systems serving 20K+ monthly users with 90+ Lighthouse scores and sub-2s page loads.",
      "Engineered NestJS microservices with REST/GraphQL, PostgreSQL, Redis, and WebSockets.",
      "Delivered AI-assisted features that improved efficiency and decision-making.",
      "Implemented CI/CD pipelines, containerized deployments, and automated testing.",
      "Developed shared permissions packages for dynamic RBAC across teams.",
    ],
    positions: [
      {
        title: "Senior Software Developer",
        period: "Nov 2024 - Present",
        summary:
          "Led architecture and delivery of ERPs, internal platforms, and AI-driven tools using Next.js, React, NestJS, Stripe, Recurly, and PostgreSQL.",
      },
      {
        title: "Engineering Operations Manager",
        period: "Jan 2023 - Nov 2024",
        summary:
          "Oversaw cross-functional delivery, defined engineering KPIs, and drove CI/CD, QA automation, and release governance.",
      },
      {
        title: "Frontend Developer",
        period: "Mar 2022 - Jan 2023",
        summary:
          "Built responsive, component-based UIs in React and improved performance with code splitting and accessibility best practices.",
      },
    ],
  },
  {
    id: "nisa-nursing-home",
    company: "Nisa Nursing Home",
    location: "Adyala Road, Rawalpindi · Hybrid",
    title: "Technical Consultant",
    labelSubtitle: "Technical Consultant",
    period: "Nov 2021 - Jun 2025",
    summary:
      "Engineered a custom ERP platform that unified hospital departments and improved PHC compliance from 52% to 93%.",
    highlights: [
      "Architected a full-stack ERP with NestJS, React, and PostgreSQL.",
      "Implemented real-time workflows with WebSockets and Redis.",
      "Built RBAC, audit trails, SOP monitoring, and risk dashboards.",
      "Delivered executive reporting for compliance metrics and KPIs.",
    ],
  },
  {
    id: "software-apprenticeship",
    company: "Software Apprenticeship",
    location: "Islamabad, Pakistan",
    title: "Full Stack Developer",
    labelSubtitle: "Full Stack Developer",
    period: "Apr 2021 - Feb 2022",
    summary:
      "Built a stock brokerage admin panel and delivered a TypeScript Express backend for a fitness app with structured data planning.",
    highlights: [
      "Built a stock brokerage admin panel with MERN and Material UI.",
      "Delivered a TypeScript Express backend for a mobile fitness app.",
      "Designed ERDs and automated Excel-to-plan workflows.",
    ],
  },
];

const JobExperienceSection = () => {
  const entries = useMemo(() => jobEntries, []);
  const [activeId, setActiveId] = useState(entries[0]?.id ?? "");

  const activeJob = entries.find((entry) => entry.id === activeId) ?? entries[0];

  return (
    <section
      id="experience"
      className="mt-20 rounded-[2.5rem] border border-border bg-card/70 p-10 shadow-2xl backdrop-blur md:p-14"
    >
      <SectionIntro
        eyebrow="Job Experience"
        title="A focused timeline of roles and promotions"
        description="Select a company to explore each role in detail."
        className="space-y-3"
      />

      <div className="mt-10 grid gap-10 md:grid-cols-[320px_1fr]">
        <div className="relative space-y-4">
          {entries.map((entry) => {
            const isActive = entry.id === activeId;
            return (
              <button
                key={entry.id}
                type="button"
                onClick={() => setActiveId(entry.id)}
                className={`relative flex w-full flex-col items-start gap-1 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-foreground/70 hover:bg-muted"
                }`}
                aria-pressed={isActive}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                      isActive ? "border-primary" : "border-border"
                    } bg-background`}
                  >
                    {isActive ? (
                      <Check className="h-3 w-3 text-primary" />
                    ) : null}
                  </span>
                  <span className="text-sm font-semibold leading-snug">
                    {entry.company} | {entry.period}
                  </span>
                </span>
                <span className="pl-9 text-xs font-semibold text-foreground/50">
                  {entry.labelSubtitle ?? entry.title}
                </span>
              </button>
            );
          })}
        </div>

        {activeJob ? (
          <div className="space-y-6 rounded-[2rem] border border-border bg-card/80 p-6 shadow-xl backdrop-blur md:p-8">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/50">
                {activeJob.company} · {activeJob.location}
              </p>
              <h3 className="text-2xl font-semibold text-foreground">
                {activeJob.title}
              </h3>
              <p className="text-sm font-semibold text-foreground/70">
                {activeJob.period}
              </p>
            </div>

            <p className="text-sm text-foreground/70 md:text-base">
              {activeJob.summary}
            </p>

            {activeJob.positions ? (
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/50">
                  Promotions
                </p>
                <div className="grid gap-3">
                  {activeJob.positions.map((position) => (
                    <div
                      key={position.title}
                      className="rounded-2xl border border-border bg-card/80 p-4"
                    >
                      <p className="text-sm font-semibold text-foreground">
                        {position.title}
                      </p>
                      <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                        {position.period}
                      </p>
                      <p className="mt-2 text-sm text-foreground/70">
                        {position.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/50">
                Highlights
              </p>
              <ul className="grid gap-2 text-sm text-foreground/70">
                {activeJob.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default JobExperienceSection;
