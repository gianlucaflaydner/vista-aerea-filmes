import clsx from "clsx";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/* A seta vermelha só aparece onde há direção ou ação, que é o que a torna
   legível como direção. Placas não têm canto arredondado nem sombra suave:
   são chapas retas, parafusadas. */

type Variant = "arrow" | "plate" | "outline";

const base =
  "group inline-flex items-center justify-center gap-4 px-8 py-4 text-sm font-bold uppercase tracking-rule transition-colors duration-300 ease-pass disabled:cursor-not-allowed disabled:opacity-55 sm:py-5";

const variants: Record<Variant, string> = {
  arrow: "bg-arrow text-enamel hover:bg-asphalt",
  plate: "bg-asphalt text-plate hover:bg-arrow hover:text-enamel",
  outline:
    "border-[3px] border-current text-current hover:bg-asphalt hover:border-asphalt hover:text-plate",
};

function Chevron() {
  return (
    <svg
      viewBox="0 0 20 16"
      aria-hidden
      className="h-4 w-5 shrink-0 transition-transform duration-300 ease-pass group-hover:translate-x-1.5"
      fill="currentColor"
    >
      <path d="M11.2 0 20 8l-8.8 8-2.3-2.2 4.2-4.2H0V6.4h13.1L8.9 2.2z" />
    </svg>
  );
}

interface LinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  arrow?: boolean;
}

export function SignLink({
  href,
  children,
  variant = "arrow",
  className,
  external,
  arrow = true,
}: LinkProps) {
  return (
    <Link
      href={href}
      className={clsx(base, variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      {arrow && <Chevron />}
    </Link>
  );
}

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: Variant;
  arrow?: boolean;
}

export function SignButton({
  children,
  variant = "arrow",
  className,
  arrow = true,
  ...rest
}: ButtonProps) {
  return (
    <button className={clsx(base, variants[variant], className)} {...rest}>
      <span>{children}</span>
      {arrow && <Chevron />}
    </button>
  );
}
