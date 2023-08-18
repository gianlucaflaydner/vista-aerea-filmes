import Image from "next/image";
import cameraPng from "../../../public/images/camera-image.png";
import dronePng from "../../../public/images/drone-image.png";

export default function SpecificationsSection() {
  return (
    <section className="w-screen flex flex-col-reverse sm:flex-row-reverse gap-6 items-center px-5 md:px-10 pt-15 py-10 bg-slate-100 text-[#9b9b9e] bg-gradient-to-r from-slate-100 to-slate-300">
      <div className=" w-screen md:w-1/2 flex items-center md:flex-row flex-col justify-center md:gap-6">
        <Image
          src={cameraPng}
          alt="Imagem de câmera ilustrativa"
          width={200}
          height={200}
        />
        <Image src={dronePng} alt="Imagem de drone " width={250} height={200} />
      </div>

      <div className="flex flex-col gap-8 items-center w-full px-5 md:w-1/2">
        <h1 className="text-2xl md:text-5xl font-extrabold">EQUIPAMENTOS</h1>
        <ul>
          <li className="font-bold text-xl list-disc">
            CÂMERAS:
            <ul className=" font-normal">
              <li>Sony a57</li>
              <li>Sony ZV1 4K</li>
            </ul>
          </li>
          <li className="font-bold text-xl list-disc">
            {" "}
            DRONES:
            <ul className=" font-normal">
              <li>DJI Mavic Mini</li>
              <li>Phanton 3 Advanced</li>
            </ul>
          </li>

          <li className="font-bold text-xl list-disc">
            SETUP COM ILUMINAÇÃO E CAPTAÇÃO DE ÁUDIO
          </li>
        </ul>
      </div>
    </section>
  );
}
