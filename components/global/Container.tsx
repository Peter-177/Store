import { cn } from "@/lib/utils";
import React from "react";

interface Prop {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Prop) => {
  return (
    <div className={cn("mx-auto max-w-6xl xl:max-w-7xl px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
