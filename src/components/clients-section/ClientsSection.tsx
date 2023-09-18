import Image, { StaticImageData } from "next/image";
import logoBand from "../../../public/images/logos/band-rs.png";
import logoBloque from "../../../public/images/logos/bloque.jpeg";
import logoSmaniotto from "../../../public/images/logos/smaniotto.png";
import logoViacavaImoveis from "../../../public/images/logos/viacava-imoveis.png";
import logoPauloAndreImoveis from "../../../public/images/logos/paulo-andre-imoveis.png";
import logoPlastcromoDesign from "../../../public/images/logos/plastcromo-design.png";
import logoCristofoli from "../../../public/images/logos/cristofoli.png";
import logoMilhasDoZero from "../../../public/images/logos/milhas-do-zero.png";
import logoLionsClube from "../../../public/images/logos/lions-clube.png";
import logoCarrosECarangas from "../../../public/images/logos/carros-e-carangas.jpg";
import logoHoffmann from "../../../public/images/logos/hoffmann.png";
import logoFontana from "../../../public/images/logos/fontana.png";

export default function ClientsSection() {


  interface Logo {
    id: number;
    src: StaticImageData;
    alt: string;
  }

  const logos: Logo[]  = [
    {
      id: 0,
      src: logoBloque,
      alt: 'Logotipo Bloque'
    },
    {
      id: 1,
      src: logoBand,
      alt: 'Logotipo Band RS'
    }, 
    {
      id: 2,
      src: logoSmaniotto,
      alt: 'Logotipo Smaniotto'
    },
    {
      id: 3,
      src: logoViacavaImoveis,
      alt: 'Logotipo Viacava Imóveis'
    },
    {
      id: 4,
      src: logoPauloAndreImoveis,
      alt: 'Logotipo Paulo André Imóveis'
    },
    {
      id: 5,
      src: logoPlastcromoDesign,
      alt: 'Logotipo Plastcromo Design'
    },
    {
      id: 6,
      src: logoCristofoli,
      alt: 'Logotipo Cristofoli'
    },
    {
      id: 7,
      src: logoMilhasDoZero,
      alt: 'Logotipo Milhas do Zero'
    },
    {
      id: 8,
      src: logoLionsClube,
      alt: 'Logotipo Lions Clube'
    },
    {
      id: 9,
      src: logoCarrosECarangas,
      alt: 'Logotipo Carros e Carangas'
    },
    {
      id: 10,
      src: logoHoffmann,
      alt: 'Logotipo Hoffmann'
    },
    {
      id: 11,
      src: logoFontana,
      alt: 'Logotipo Fontana'
    }
  ];

  return (
    <section
      id="clientes"
      className={`w-screen h-[600px] md:h-[400px] flex gap-10 md:gap-[120px] md:flex-row flex-col items-center justify-center px-5 md:px-10 pt-10 py-10 bg-slate-100 text-[#9b9b9e] bg-gradient-to-r from-slate-100 to-slate-300}`}
    >
      <div className="flex items-center flex-col justify-center">
        <h1 className="font-bold text-transparent text-center text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-black to-gray-800">
          Clientes atendidos
        </h1>
        <div className="h-[2px] bg-gray-700 rounded w-[80%] md:w-[50%] mt-7"></div>
      </div>
      <div className="w-[2px] bg-gray-900 rounded md:h-[90%]"></div>
      <div className="grid sm:grid-cols-6 grid-cols-4 gap-6">
        {logos.map((logo: Logo) => (
          <Image src={logo.src} key={logo.id} alt={logo.alt} width={90} height={90}/>
        ))}
      </div>
    </section>
  );
}
