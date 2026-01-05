"use client";

import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import SectionIntro from "@/components/ui/SectionIntro";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DATA } from "@/constants/content";

const JobExperienceSection = () => {
  const entries = useMemo(() => DATA.jobExperience ?? [], []);
  const [activeId, setActiveId] = useState("");

  const activeJob = entries.find((entry) => entry.id === activeId);

  return (
    <section
      id="experience"
      className="mt-16 rounded-[2.5rem] border border-border bg-card/70 p-6 shadow-2xl backdrop-blur sm:mt-20 sm:p-8 md:p-14"
    >
      <SectionIntro
        eyebrow="Job Experience"
        title="A focused timeline of roles and promotions"
        description="Select a company to explore each role in detail."
        className="space-y-3"
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-10">
        <div className="relative space-y-3 sm:space-y-4">
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="flex w-full flex-col items-start gap-2 rounded-2xl border border-border bg-card/80 px-4 py-3 text-left text-sm font-semibold text-foreground shadow-sm backdrop-blur transition-colors hover:bg-muted"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/50">
                    Select Experience
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {activeJob?.title ?? "Choose an experience"}
                  </span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72">
                <DropdownMenuLabel>Select Experience</DropdownMenuLabel>
                {entries.map((entry) => {
                  const isActive = entry.id === activeId;
                  return (
                    <DropdownMenuItem
                      key={entry.id}
                      onSelect={() => setActiveId(entry.id)}
                      className="flex items-start gap-2 py-2"
                    >
                      <span
                        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${isActive ? "border-primary" : "border-border"
                          } bg-background`}
                      >
                        {isActive ? (
                          <Check className="h-3 w-3 text-primary" />
                        ) : null}
                      </span>
                      <span className="flex flex-col">
                        <span className="text-sm font-semibold">
                          {entry.company}
                        </span>
                        <span className="text-xs text-foreground/60">
                          {entry.period}
                        </span>
                      </span>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden space-y-3 sm:space-y-4 lg:block">
            {entries.map((entry) => {
              const isActive = entry.id === activeId;
              return (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => setActiveId(entry.id)}
                  className={`relative flex w-full items-start gap-3 rounded-2xl border px-4 py-3 text-left text-xs font-semibold transition-colors sm:text-sm ${isActive
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-foreground/70 hover:bg-muted"
                    }`}
                  aria-pressed={isActive}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${isActive ? "border-primary" : "border-border"
                      } bg-background`}
                  >
                    {isActive ? (
                      <Check className="h-3 w-3 text-primary" />
                    ) : null}
                  </span>
                  <span className="flex flex-1 flex-col gap-1">
                    <span className="text-sm font-semibold leading-snug text-foreground">
                      {entry.company}
                    </span>
                    <span className="text-xs font-semibold text-foreground/50">
                      {entry.period}
                    </span>
                    <span className="text-xs font-semibold text-foreground/50">
                      {entry.labelSubtitle ?? entry.title}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {activeJob ? (
          <div className="space-y-6 rounded-[2rem] border border-border bg-card/80 p-6 shadow-xl backdrop-blur md:p-8">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/50">
                {activeJob.company} - {activeJob.location}
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
        ) : (
          <div className="flex min-h-[260px] items-center justify-center rounded-[2rem] border border-border bg-card/50 p-6 text-center text-sm text-foreground/60 shadow-lg backdrop-blur md:p-8">
            Select an experience to see details.
          </div>
        )}
      </div>
    </section>
  );
};

export default JobExperienceSection;
