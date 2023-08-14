import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({ subsets: ["latin"], weight: "300" });

interface SectionProps {
  reverse: boolean;
  className?: string;
  backgroundChange?: boolean;
  imageSource: StaticImageData;
  imageAltText: string;
  sectionTitle: string;
  sectionText: string;
  italic?: boolean;
}

export default function Section(props: SectionProps) {
  const {
    reverse,
    backgroundChange,
    imageSource,
    imageAltText,
    sectionTitle,
    className,
    sectionText,
    italic,
  } = props;

  return (
    <section
      className={clsx(
        `w-screen flex flex-col gap-10 items-center px-5 md:px-10 pt-15 py-10  ${merriweather.className}`,
        className,
        reverse ? "md:flex-row-reverse" : "md:flex-row",
        backgroundChange &&
          "bg-slate-100 text-[#9b9b9e] bg-gradient-to-r from-slate-100 to-slate-300"
      )}
    >
      <div className=" w-screen md:w-1/2 flex items-center justify-center">
        <Image
          src={imageSource}
          alt={imageAltText}
          width={300}
          height={100}
          className="rounded"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-6 text-center w-screen px-5 md:w-1/2 ">
        <h1 className="text-2xl md:text-4xl font-extrabold"> {sectionTitle}</h1>
        <p
          className={clsx(
            "text-transparent text-md bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 font-semibold",
            italic && "italic"
          )}
        >
          {sectionText}
        </p>
      </div>
    </section>
  );
}
