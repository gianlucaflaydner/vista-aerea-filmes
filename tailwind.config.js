/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* `screens` ficava FORA de `extend`, o que apagava os breakpoints
         padrão do Tailwind, então `xl:` e `2xl:` simplesmente não existiam e
         falhavam em silêncio. Os três originais seguem preservados. */
      screens: {
        sm: "576px",
        md: "960px",
        lg: "1440px",
        xl: "1728px",
      },
      colors: {
        /* Placa de beira de estrada. A cor manda em regiões inteiras da
           página, nunca em respingos sobre um fundo neutro. */
        plate: "rgb(var(--plate) / <alpha-value>)",
        asphalt: "rgb(var(--asphalt) / <alpha-value>)",
        arrow: "rgb(var(--arrow) / <alpha-value>)",
        route: "rgb(var(--route) / <alpha-value>)",
        enamel: "rgb(var(--enamel) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        rule: "0.18em",
        plate: "0.3em",
      },
      maxWidth: {
        shell: "100rem",
        measure: "36rem",
      },
      transitionTimingFunction: {
        /* Saída exponencial: a placa passa rápido e assenta. */
        pass: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      opacity: {
        3: "0.03",
        6: "0.06",
        8: "0.08",
        12: "0.12",
        14: "0.14",
        15: "0.15",
        18: "0.18",
        35: "0.35",
        45: "0.45",
        55: "0.55",
        65: "0.65",
        85: "0.85",
      },
      /* Faixa infinita de logotipos. O deslocamento é de exatamente 1/3 da
         pista porque a lista é repetida três vezes: ao completar um terço, a
         segunda cópia está no lugar exato onde a primeira começou, e o laço
         fecha sem salto. Mudar o número de repetições no componente obriga a
         mudar esta fração junto. */
      keyframes: {
        drift: {
          from: { transform: "translate3d(0,0,0)" },
          to: { transform: "translate3d(-33.3333%,0,0)" },
        },
        driftBack: {
          from: { transform: "translate3d(-33.3333%,0,0)" },
          to: { transform: "translate3d(0,0,0)" },
        },
      },
      animation: {
        drift: "drift 60s linear infinite",
        "drift-back": "driftBack 68s linear infinite",
      },
    },
  },
  plugins: [],
};
