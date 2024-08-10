import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: String;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className, ...props }) => {
  return (
    <button
      className={cn(
        "border-2 border-myWhite px-4 py-3 mt-4 rounded-full w-full grid place-items-center mx-auto cursor-pointer lg:mx-0 transition-all",
        className
      )}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
