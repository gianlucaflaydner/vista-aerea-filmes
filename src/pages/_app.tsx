import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import SmoothScroll from "@/components/motion/SmoothScroll";
import { display, sans } from "@/lib/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F2B705" />
      </Head>
      <div className={`${display.variable} ${sans.variable} font-sans`}>
        <SmoothScroll />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
