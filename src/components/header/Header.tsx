import Image from "next/image";
import siteLogo from "../../../public/images/vista-aerea-logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-screen h-20 px-4 sm:px-10 bg-black bg-opacity-20 fixed mb-10">
      <div className="flex flex-row items-center gap-10">
        <Image
          src={siteLogo}
          alt="Logo base"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h1 className="text-2xl md:block hidden font-bold text-white">
          {" "}
          VISTA AÉREA FILMES
        </h1>
      </div>
      <nav>
        <ul className="flex items-start justify-between flex-row gap-4 sm:gap-10 sm:me-10">
          <li className="sm:text-xl">
            <Link
              href="/sobre"
              className="hover:text-orange-200 transition delay-150 ease-in-out text-white"
            >
              Sobre mim
            </Link>
          </li>
          <li className="sm:text-xl">
            <a
              href="#portifolio"
              className="hover:text-orange-200 transition delay-150 ease-in-out text-white scroll-smooth"
            >
              Portfólio
            </a>
          </li>
          <li className="sm:text-xl">
            <a
              href="#contato"
              className="hover:text-orange-200 transition delay-150 ease-in-out text-white scroll-smooth"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
