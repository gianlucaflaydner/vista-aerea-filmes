import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import type { ReactNode, RefObject } from "react";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

interface ParallaxProps {
  children: ReactNode;
  /** Seção que serve de referência para o progresso do scroll. */
  target: RefObject<HTMLElement>;
  /** Curso total do deslocamento, em porcentagem da altura do filho. */
  distance?: number;
  className?: string;
}

/* Parallax por transform, não por `background-attachment: fixed`, porque o Safari
   no iOS ignora o segundo, e boa parte do público chega pelo celular.
   O filho precisa ser mais alto que o container para o curso não expor borda.

   Movimento reduzido zera o curso mantendo a mesma estrutura de nós. */
export default function Parallax({
  children,
  target,
  distance = 16,
  className,
}: ParallaxProps) {
  const reduced = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  });

  const travel = reduced ? 0 : distance;
  const y: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 1],
    [`${-travel / 2}%`, `${travel / 2}%`]
  );

  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
