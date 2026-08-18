import Head from "next/head";
import { SignLink } from "@/components/ui/SignButton";
import { Lettering, Panel, Shell } from "@/components/ui/Plate";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Página não encontrada | Vista Aérea Filmes</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Panel field="plate" className="flex min-h-[100svh] items-center pt-[4.5rem]">
        <Shell className="py-20">
          <div className="mb-8 h-[3px] w-full bg-arrow" role="presentation" />
          <Lettering as="h1" className="text-asphalt">
            Essa saída
            <br />
            não existe
          </Lettering>
          <p className="mt-8 max-w-measure text-lg font-medium leading-[1.5] text-asphalt/80">
            Você passou da entrada. Volte ao início e siga pela placa.
          </p>
          <div className="mt-10">
            <SignLink href="/">Voltar ao início</SignLink>
          </div>
        </Shell>
      </Panel>
    </>
  );
}
