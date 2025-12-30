import { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  className?: string;
};

const Pill = ({ children, className }: PillProps) => {
  return <span className={`rounded-full ${className ?? ""}`.trim()}>{children}</span>;
};

export default Pill;
