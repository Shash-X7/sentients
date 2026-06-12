import { forwardRef } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";
type Size    = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const base = `inline-flex items-center justify-center gap-2 font-medium rounded-[999px]
  transition-all duration-200 active:scale-[0.98] focus-visible:outline-none
  focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2
  disabled:opacity-40 disabled:pointer-events-none select-none cursor-pointer whitespace-nowrap`;

const variants: Record<Variant, string> = {
  primary:   "bg-[#111111] text-white hover:bg-[#555555] shadow-sm hover:shadow-md",
  secondary: "bg-transparent text-[#111111] border border-[#E5E5E5] hover:border-[#CCCCCC] hover:bg-[#FAFAFA]",
  ghost:     "bg-transparent text-[#555555] hover:text-[#111111] hover:bg-[#FAFAFA]",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[0.8125rem]",
  md: "px-6 py-2.5 text-[0.875rem]",
  lg: "px-8 py-3.5 text-[0.9375rem]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant="primary", size="md", href, external=false, icon, iconPosition="right", className="", children, ...props }, ref) => {
    const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
    const content = (<>{icon && iconPosition==="left" && <span className="shrink-0">{icon}</span>}{children}{icon && iconPosition==="right" && <span className="shrink-0">{icon}</span>}</>);
    if (href) return (<Link href={href} className={cls} {...(external ? {target:"_blank",rel:"noopener noreferrer"} : {})}>{content}</Link>);
    return (<button ref={ref} className={cls} {...props}>{content}</button>);
  }
);
Button.displayName = "Button";
