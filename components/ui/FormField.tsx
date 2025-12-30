import { ReactNode } from "react";

type FormFieldProps = {
  label: string;
  children: ReactNode;
  className?: string;
  labelClassName?: string;
};

const FormField = ({
  label,
  children,
  className,
  labelClassName,
}: FormFieldProps) => {
  const baseLabel =
    "text-xs font-semibold uppercase tracking-[0.25em] text-foreground/50";

  return (
    <div className={`space-y-2 ${className ?? ""}`.trim()}>
      <label className={`${baseLabel} ${labelClassName ?? ""}`.trim()}>
        {label}
      </label>
      {children}
    </div>
  );
};

export default FormField;
