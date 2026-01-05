"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "react-cool-inview";

type InViewFadeProps = {
  children: ReactNode;
  className?: string;
  once?: boolean;
};

const InViewFade = ({ children, className, once = true }: InViewFadeProps) => {
  const { observe, inView } = useInView({
    rootMargin: "0px 0px -15% 0px",
    threshold: 0.15,
    onEnter: ({ unobserve }) => {
      if (once) {
        unobserve();
      }
    },
  });

  return (
    <div
      ref={observe}
      className={cn("inview-fade", inView && "is-visible", className)}
    >
      {children}
    </div>
  );
};

export default InViewFade;
