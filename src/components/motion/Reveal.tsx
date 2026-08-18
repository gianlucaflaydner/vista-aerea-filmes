import { motion, type HTMLMotionProps } from "motion/react";
import { useMemo, type ReactNode } from "react";
import { EASE_PASS } from "@/lib/motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

/* `ref` sai do tipo: os tipos do Motion 13 e os do React 18 discordam sobre
   LegacyRef, e o componente não repassa ref de qualquer forma. */
interface RevealProps extends Omit<HTMLMotionProps<"div">, "children" | "ref"> {
  children: ReactNode;
  delay?: number;
  /** Deslocamento inicial, em px, no sentido da travessia. */
  from?: number;
}

/* O gesto do mundo é a passagem: a placa entra do lado de onde você vem e
   assenta. Borda dura, sem desfoque: chapa pintada não desfoca.

   A forma das props é constante: movimento reduzido neutraliza os valores em
   vez de trocar a estrutura, senão a hidratação quebra. */
export default function Reveal({
  children,
  delay = 0,
  from = 34,
  ...rest
}: RevealProps) {
  const reduced = useReducedMotionSafe();

  const { initial, transition } = useMemo(
    () => ({
      initial: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: from },
      transition: reduced ? { duration: 0 } : { duration: 0.85, delay, ease: EASE_PASS },
    }),
    [reduced, from, delay]
  );

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
