export default function AboutSection() {
  return (
    <section
      id="sobre"
      className={`w-screen h-[600px] sm:h-[400px] flex flex-col gap-10 items-center px-5 md:px-10 pt-10 py-10}`}
    >
      <div
        role="separator"
        className="h-[2px] bg-slate-200 rounded w-[60%] "
      ></div>
      <h1 className="font-bold text-transparent text-2xl md:text-4xl bg-clip-text bg-gradient-to-r from-white to-gray-400">
        QUEM SOU
      </h1>
      <p className="text-center  text-md md:text-xl font-bold md:w-[50%] w-[90%] text-slate-300">
        Sou Leandro Laydner. Um corredor amador, pai de família e também
        produtor, com minha produtora caseira Vista Aérea Filmes. Como todo
        sonhador sempre quis desenvolver a arte que via em comerciais de TV,
        filmes e documentários. Então, com um drone iniciei meus estudos de
        audiovisual e a coisa tomou corpo, o que me levou a expandir além do
        aéreo. Amo o que faço e isso basta para querer sempre estudar, aprimorar
        e entregar.
      </p>
    </section>
  );
}
