import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

interface SimpleSectionProps {
  reverse: boolean;
  className?: string;
  backgroundChange?: boolean;
  imageSource: StaticImageData;
  imageAltText: string;
  sectionTitle: string;
  sectionText: string;
  italic?: boolean;
}

export default function SimpleSection(props: SimpleSectionProps) {
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
        `w-screen flex flex-col gap-10 items-center px-5 md:px-10 pt-15 py-10`,
        className,
        reverse ? "md:flex-row-reverse" : "md:flex-row",
        backgroundChange &&
          "bg-slate-100 text-[#9b9b9e] bg-gradient-to-r from-slate-100 to-slate-300"
      )}
    >
      <div className=" w-screen md:w-1/2 flex items-center justify-center">
        <Image src={imageSource} alt={imageAltText} width={300} height={100} />
      </div>

      <div className="flex flex-col items-center justify-center gap-6 text-center w-screen px-5 md:w-1/2 ">
        <h1 className="text-2xl md:text-5xl font-extrabold"> {sectionTitle}</h1>
        <p className={clsx("text-slate-500  text-md md:text-lg font-semibold")}>
          {sectionText}
        </p>
      </div>
    </section>
  );
}
