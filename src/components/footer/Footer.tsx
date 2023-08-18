import Image from "next/image";
import facebookIcon from "../../../public/images/facebook-icon-white.png";
import instagramIcon from "../../../public/images/instagram-icon-dark.png";
import youtubeIcon from "../../../public/images/youtube-icon-dark.png";
import Link from "next/link";
import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"], weight: "300" });

export default function Footer() {
  return (
    <footer
      className={`w-screen h-[200px] flex flex-col pt-10 ${oswald.className}`}
    >
      <div className="w-screen flex flex-row justify-between md:px-20 px-6 border-b-2 pb-4  border-zinc-200">
        <div className="flex flex-row items-center">
          <h2 className="text-slate-200 font-bold text-lg me-4">
            Minhas redes sociais:{" "}
          </h2>
          <ul className="flex items-center gap-5">
            <li>
              <Link
                href="https://www.facebook.com/vistaaereadrone"
                target="_blank"
              >
                <Image
                  src={facebookIcon}
                  alt="ícone do facebook"
                  width={30}
                  height={40}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/vistaaereafilmes/"
                target="_blank"
              >
                <Image
                  src={instagramIcon}
                  alt="ícone do instagram"
                  width={30}
                  height={40}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/@vistaaereafilmes/videos"
                target="_blank"
              >
                <Image
                  src={youtubeIcon}
                  alt="ícone do youtube"
                  width={35}
                  height={40}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        <h2 className="text-italic text-sm text-slate-200 text-opacity-70">
          {" "}
          Proudly made by{" "}
          <Link
            className="underline"
            href="https://www.linkedin.com/in/gianluca-laydner/"
            target="_blank"
          >
            Gianluca Laydner
          </Link>
        </h2>
      </div>
    </footer>
  );
}
