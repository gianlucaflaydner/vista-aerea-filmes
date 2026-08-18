import clsx from "clsx";
import type { ReactNode } from "react";

/* A chapa: cada região da página é uma placa física, com esmalte, grão de
   tinta e sangria até a borda. Nenhuma região ganha isenção de "card web". */

type Field = "plate" | "asphalt" | "enamel" | "route";

const fields: Record<Field, string> = {
  plate: "bg-plate text-asphalt",
  asphalt: "bg-asphalt text-enamel",
  enamel: "bg-enamel text-asphalt",
  route: "bg-route text-enamel",
};

export function Panel({
  field,
  children,
  className,
  id,
  sheen = true,
}: {
  field: Field;
  children: ReactNode;
  className?: string;
  id?: string;
  sheen?: boolean;
}) {
  return (
    <section
      id={id}
      className={clsx(
        "relative isolate overflow-hidden painted",
        fields[field],
        sheen && "enamel-sheen",
        className
      )}
    >
      <div className="relative z-[2]">{children}</div>
    </section>
  );
}

/** Coluna de conteúdo com as goteiras do sistema. */
export function Shell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx("mx-auto w-full max-w-shell", className)}
      style={{ paddingLeft: "var(--shell-gutter)", paddingRight: "var(--shell-gutter)" }}
    >
      {children}
    </div>
  );
}

/** Nome pintado: a letra de placa, enorme e em caixa alta. */
export function Lettering({
  children,
  className,
  as: Tag = "h2",
  size = "var(--step-title)",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  size?: string;
}) {
  return (
    <Tag className={clsx("lettering", className)} style={{ fontSize: size }}>
      {children}
    </Tag>
  );
}

export function Body({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={clsx("max-w-measure leading-[1.65]", className)}
      style={{ fontSize: "var(--step-body)" }}
    >
      {children}
    </p>
  );
}

export function Lead({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={clsx("max-w-measure font-medium leading-[1.5]", className)}
      style={{ fontSize: "var(--step-lead)" }}
    >
      {children}
    </p>
  );
}
