import Image from "next/image";
import whatsappIcon from "../../../public/images/whatsapp-icon.png";

export default function Fab() {
  return (
    <div>
      <a
        className="fixed bottom-8 right-3 transform hover:scale-110 z-[999]"
        href="https://api.whatsapp.com/send?phone=984065735
  &text=Olá, gostaria de entrar em contato!"
        target="_blank"
        rel="noopener"
      >
        <Image
          src={whatsappIcon}
          alt="Icone do Whatsapp"
          width={40}
          height={40}
          className="rounded-full"
        />
      </a>
    </div>
  );
}
