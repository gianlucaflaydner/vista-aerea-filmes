import { useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import clsx from "clsx";
import emailJs from "@emailjs/browser";
import taquara from "../../../public/images/taquara-visao-de-cima-colorida.jpg";
import Parallax from "@/components/motion/Parallax";
import Reveal from "@/components/motion/Reveal";
import Wipe from "@/components/motion/Wipe";
import { SignButton, SignLink } from "@/components/ui/SignButton";
import { Lettering, Shell } from "@/components/ui/Plate";
import { WHATSAPP_URL } from "@/lib/content";

/* O fim da travessia: a placa sai da frente e o que aparece é o que ele vê do
   ar. A foto aérea de Taquara é o único momento fotográfico em escala cheia
   da página, e é ela que se move em parallax.

   Chaves públicas do EmailJS: ficam no bundle do cliente por natureza. Vêm de
   variável de ambiente quando existe, com os valores atuais como reserva para
   o formulário não parar de funcionar. */
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_tp4oxm9";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_udyuiws";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "aBtCrOZetJvAx41n-";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full border-[3px] border-asphalt bg-enamel px-4 py-3.5 text-asphalt outline-none transition-colors duration-200 placeholder:text-asphalt/65 focus:border-arrow";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [erros, setErros] = useState<Record<string, string>>({});

  function validar() {
    const next: Record<string, string> = {};
    if (!nome.trim()) next.nome = "Preciso saber como te chamar.";
    if (!email.trim()) next.email = "Sem e-mail eu não consigo responder.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Esse e-mail parece incompleto.";
    if (!mensagem.trim()) next.mensagem = "Me conte o que você quer filmar.";
    setErros(next);
    return Object.keys(next).length === 0;
  }

  async function enviar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    if (!validar()) return;

    setStatus("sending");
    try {
      await emailJs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: nome, email, message: mensagem },
        PUBLIC_KEY
      );
      setStatus("sent");
      setNome("");
      setEmail("");
      setMensagem("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contato" ref={sectionRef} className="relative isolate overflow-hidden">
      {/* Parallax por transform: `background-attachment: fixed` é ignorado
          pelo Safari no iOS, e a maior parte do público chega pelo celular.
          A imagem é mais alta que a seção para o curso não expor borda. */}
      <Parallax target={sectionRef} distance={20} className="absolute inset-0 -z-10">
        <div className="relative h-[124%] w-full" style={{ top: "-12%" }}>
          <Image
            src={taquara}
            alt="Vista aérea de Taquara, no Vale do Paranhana, com o casario, a mata e os morros ao fundo"
            fill
            sizes="100vw"
            quality={72}
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </Parallax>

      {/* Scrim em degrade: pesado onde o texto pousa, leve do lado do
          formulario, para a vista aerea continuar sendo o argumento. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(96deg, rgb(var(--asphalt) / 0.88) 0%, rgb(var(--asphalt) / 0.78) 42%, rgb(var(--asphalt) / 0.42) 100%)",
        }}
      />

      <Shell className="py-24 sm:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Wipe>
              <div className="mb-8 h-[3px] w-full bg-plate" role="presentation" />
              <Lettering className="text-enamel">
                Me conte o que
                <br />
                você quer mostrar
              </Lettering>
            </Wipe>
            <div>
              <p className="mt-8 max-w-measure text-lg font-medium leading-[1.5] text-enamel/85">
                Respondo rápido no WhatsApp. Se preferir e-mail, o formulário
                chega direto para mim.
              </p>

              <div className="mt-10">
                <SignLink href={WHATSAPP_URL} external>
                  Falar no WhatsApp
                </SignLink>
              </div>

              <p className="mt-10 text-[0.6875rem] font-bold uppercase tracking-rule text-enamel/85">
                Taquara · Igrejinha · Parobé · Três Coroas · Rolante
              </p>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={0.1}>
              <form
                onSubmit={enviar}
                noValidate
                className="bg-plate p-6 sm:p-9"
              >
                <div className="space-y-5">
                  <Field
                    id="nome"
                    label="Seu nome"
                    error={erros.nome}
                    value={nome}
                    onChange={setNome}
                    autoComplete="name"
                  />
                  <Field
                    id="email"
                    label="Seu e-mail"
                    type="email"
                    error={erros.email}
                    value={email}
                    onChange={setEmail}
                    autoComplete="email"
                  />

                  <div>
                    <label
                      htmlFor="mensagem"
                      className="block text-[0.6875rem] font-bold uppercase tracking-rule text-asphalt/70"
                    >
                      O que você quer filmar
                    </label>
                    <textarea
                      id="mensagem"
                      rows={4}
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                      aria-invalid={!!erros.mensagem}
                      aria-describedby={erros.mensagem ? "erro-mensagem" : undefined}
                      className={clsx(field, "mt-2.5 resize-y", erros.mensagem && "border-arrow")}
                      placeholder="Um terreno, um evento, a empresa…"
                    />
                    {erros.mensagem && (
                      <p id="erro-mensagem" className="mt-2 text-sm font-bold text-arrow">
                        {erros.mensagem}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <SignButton
                    type="submit"
                    disabled={status === "sending"}
                    arrow={status !== "sending"}
                  >
                    {status === "sending" ? "Enviando…" : "Enviar"}
                  </SignButton>

                  {/* Estados inline em vez de modal: a tarefa não precisa
                      interromper nem proteger o foco. */}
                  <p
                    role="status"
                    aria-live="polite"
                    className="text-sm font-bold text-asphalt"
                  >
                    {status === "sent" && "Recebi. Logo entro em contato."}
                    {status === "error" && "Não consegui enviar. Tente pelo WhatsApp."}
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </Shell>
    </section>
  );
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}

/* O formulário antigo só tinha placeholder, nenhum `<label>`. */
function Field({ id, label, value, onChange, error, type = "text", autoComplete }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[0.6875rem] font-bold uppercase tracking-rule text-asphalt/70"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `erro-${id}` : undefined}
        className={clsx(field, "mt-2.5", error && "border-arrow")}
      />
      {error && (
        <p id={`erro-${id}`} className="mt-2 text-sm font-bold text-arrow">
          {error}
        </p>
      )}
    </div>
  );
}
