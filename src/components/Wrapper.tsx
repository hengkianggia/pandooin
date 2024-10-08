import { cn } from "@/lib/utils";
import React from "react";

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px]  relative", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
