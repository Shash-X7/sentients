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
  disabled:opacity-40 disabled:pointer-events-none select-none cursor-pointer whitespace-nowrap`;

/* Use CSS custom properties so all variants respond to theme changes */
const variants: Record<Variant, string> = {
  primary:   "bg-[var(--s-cta)] text-[var(--s-cta-t)] hover:opacity-85",
  secondary: "bg-transparent text-[var(--s-out-t)] border border-[var(--s-out-bdr)] hover:opacity-70",
  ghost:     "bg-transparent text-[var(--s-ink2)] hover:text-[var(--s-ink)] hover:bg-[var(--s-card)]",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-6 py-2.5 text-[14px]",
  lg: "px-8 py-3.5 text-[14px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant="primary", size="md", href, external=false, icon, iconPosition="right", className="", children, ...props }, ref) => {
    const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
    const content = (
      <>
        {icon && iconPosition==="left"  && <span className="shrink-0">{icon}</span>}
        {children}
        {icon && iconPosition==="right" && <span className="shrink-0">{icon}</span>}
      </>
    );
    if (href) return (
      <Link href={href} className={cls} {...(external ? { target:"_blank", rel:"noopener noreferrer" } : {})}>
        {content}
      </Link>
    );
    return <button ref={ref} className={cls} {...props}>{content}</button>;
  }
);
Button.displayName = "Button";
