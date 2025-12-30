import { ReactNode } from "react";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

const SectionIntro = ({
  eyebrow,
  title,
  description,
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: SectionIntroProps) => {
  const baseEyebrow =
    "text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50";
  const baseTitle =
    "text-3xl font-semibold tracking-tight text-foreground sm:text-4xl";
  const baseDescription = "text-sm text-foreground/70 md:text-base";

  return (
    <div className={className}>
      <p className={`${baseEyebrow} ${eyebrowClassName ?? ""}`.trim()}>
        {eyebrow}
      </p>
      <h2 className={`${baseTitle} ${titleClassName ?? ""}`.trim()}>
        {title}
      </h2>
      {description ? (
        <div
          className={`${baseDescription} ${descriptionClassName ?? ""}`.trim()}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
};

export default SectionIntro;
