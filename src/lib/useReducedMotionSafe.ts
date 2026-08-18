import { useEffect, useState } from "react";

/* O `useReducedMotion` do Motion já lê a media query no primeiro render do
   cliente, enquanto o servidor sempre renderiza `false`, o que quebra a
   hidratação e derruba a árvore inteira para client rendering.

   Este hook devolve `false` no servidor e no primeiro render do cliente, e só
   então assume o valor real. A regra que acompanha: nunca ramificar a
   ESTRUTURA por movimento reduzido dentro de conteúdo renderizado no
   servidor. Só neutralizar valores. */
export function useReducedMotionSafe() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
