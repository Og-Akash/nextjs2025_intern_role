import React from "react";
import { cn } from "@/utils/cn";

export type ButtonVariants = "default" | "active" | "notActive" | "created" | "draft" | "secondary" | "gray" | "publish";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  className,
  children,
  ...props
}) => {
  const variantStyles: Record<ButtonVariants, string> = {
    default: "text-[var(--color-foreground)]",
    active: "bg-[var(--color-active)] text-white",
    notActive: "bg-[var(--color-notActive)] text-[var(--foreground)]",
    secondary: "bg-[var(--color-secondary)] text-[var(--color-active)]",
    gray: "bg-[var(--color-gray)] text-white",
    publish: "bg-[#E4FFF8] text-[#0DAD82]",
    created: "bg-[var(--color-created)] text-[var(--color-created-text)]",
    draft: "bg-[var(--color-draft)] text-[var(--color-gray)]",
  };

  return (
    <button
      className={cn(
        "inline-flex gap-2 items-center px-2 py-2 rounded-md font-medium transition-colors duration-200",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
