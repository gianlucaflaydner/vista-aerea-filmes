import { motion } from "motion/react";
import { useMemo, type ReactNode } from "react";
import { EASE_PASS } from "@/lib/motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

/* O gesto próprio dos títulos: a chapa é descoberta da esquerda para a
   direita, como quem passa por ela na estrada. É um recorte, não um fade:
   borda dura, do jeito que tinta pintada aparece.

   Existe para que a página não repita a mesma entrada em toda seção: o
   parallax do contato é o momento autoral, os títulos têm este gesto, e o
   corpo de texto simplesmente já está lá. */
export default function Wipe({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotionSafe();

  const { initial, transition } = useMemo(
    () => ({
      initial: reduced
        ? { clipPath: "inset(0 0% 0 0)" }
        : { clipPath: "inset(0 100% 0 0)" },
      transition: reduced
        ? { duration: 0 }
        : { duration: 0.9, delay, ease: EASE_PASS },
    }),
    [reduced, delay]
  );

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
