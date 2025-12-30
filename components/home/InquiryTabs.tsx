"use client";

import { useMemo, useState } from "react";
import { Check } from "lucide-react";

const options = ["Consultation", "Frontend", "Backend", "Partnership"] as const;

const InquiryTabs = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const labels = useMemo(() => options, []);

  const toggleOption = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <div className="flex flex-wrap gap-3">
      {labels.map((label) => {
        const isActive = selected.includes(label);
        return (
          <button
            key={label}
            type="button"
            onClick={() => toggleOption(label)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition-colors ${
              isActive
                ? "border-primary bg-primary/15 text-primary"
                : "border-border text-foreground/70 hover:bg-muted"
            }`}
            aria-pressed={isActive}
          >
            {isActive ? <Check className="h-3 w-3" /> : null}
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default InquiryTabs;
