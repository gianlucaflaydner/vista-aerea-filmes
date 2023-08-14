import clsx from "clsx";
import { useEffect, useState } from "react";
import emailJs from "@emailjs/browser";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("animated-object");
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verificar a visibilidade inicial
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function sendEmail(e: any) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos para entrar em contato!");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailJs
      .send(
        "service_tp4oxm9",
        "template_udyuiws",
        templateParams,
        "aBtCrOZetJvAx41n-"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO!", response.status, response.text);
          alert("Email enviado com sucesso! Aguarde e entrarei em contato.");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          alert(
            "Ocorreu algum erro no envio do email. Tente novamente ou entre em contato por Whatsapp!"
          );
          console.log("ERROR: ", error);
        }
      );
  }

  return (
    <section
      id="contato"
      className={`bg-cover bg-no-repeat w-screen flex items-center justify-center bg-white/10`}
      style={{
        backgroundImage: 'url("images/taquara-visao-de-cima-colorida.jpg")',
        height: "650px",
      }}
    >
      <div
        className={clsx(
          "bg-white/60 md:w-1/3 w-[95%] h-[600px] rounded flex flex-col items-center justify-center",
          `animated-object ${isVisible ? "visible" : ""}`
        )}
        id="animated-object"
      >
        <h1
          className="text-white text-3xl font-bold mb-10 text-center "
          style={{
            textShadow: "1px 1px 2px pink",
          }}
        >
          Entre em contato comigo:
        </h1>
        <form
          className="flex flex-col justify-between items-center gap-10 w-full"
          onSubmit={sendEmail}
        >
          <input
            className="md:w-[350px] w-[90%] h-10 px-1 py-1 border-solid border-[1px] border-black/40 rounded-sm"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            className="md:w-[350px] w-[90%] h-10 px-1 py-1 border-solid border-[1px] border-black/40 rounded-sm"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            className="md:w-[350px] w-[90%] h-20 px-1 py-1 border-solid border-[1px] border-black/40 rounded-sm"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input
            className="cursor-pointer bg-slate-600 rounded text-white h-8 hover:bg-slate-700 transition duration-150 ease-in-out w-[50%]"
            type="submit"
            value="Enviar"
          />
        </form>
      </div>
    </section>
  );
}
