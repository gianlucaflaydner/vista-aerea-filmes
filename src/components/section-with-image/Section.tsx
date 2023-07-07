import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

interface SectionProps {
  reverse: boolean;
  className?: string;
  backgroundChange: boolean;
  imageSource: StaticImageData;
  imageAltText: string;
  sectionTitle: string;
  sectionText: string;
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
  } = props;

  return (
    <section
      className={clsx(
        "w-screen flex flex-col gap-10 items-center px-5 md:px-10 pt-15 py-10 ",
        className,
        reverse ? "md:flex-row-reverse" : "md:flex-row",
        backgroundChange &&
          "bg-slate-100 text-[#181823] bg-gradient-to-r from-slate-100 to-slate-300"
      )}
    >
      <div className=" w-screen md:w-1/2 flex items-center justify-center">
        <Image
          src={imageSource}
          alt={imageAltText}
          width={300}
          height={100}
          className=""
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-6 text-center w-screen px-5 md:w-1/2 ">
        <h1 className="text-2xl md:text-4xl font-bold"> {sectionTitle}</h1>
        <p className="text-xl font-medium">
          {" "}
          <i>{sectionText}</i>
        </p>
      </div>
    </section>
  );
}
