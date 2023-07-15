import { Swiper } from "swiper/react";
import "swiper/css";

export default function PortfolioSection() {
  return (
    <section className="w-screen flex flex-col gap-10 items-center px-5 md:px-10 pt-10 py-10 ">
      <h1 className="font-extrabold text-transparent text-6xl md:text-8xl bg-clip-text bg-gradient-to-r from-white to-gray-400 underline">
        Portólio
      </h1>
      <div className="h-1 bg-white rounded w-4/6"> </div>
      <div className="flex flex-row justify-around items-center w-screen">
        <div className="flex flex-col items-center justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Ryu_1tQwEUM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="grid gap-4 grid-cols-2">
          <iframe
            width="230"
            height="160"
            src="https://www.youtube.com/embed/Ryu_1tQwEUM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="230"
            height="160"
            src="https://www.youtube.com/embed/Ryu_1tQwEUM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="230"
            height="160"
            src="https://www.youtube.com/embed/Ryu_1tQwEUM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="230"
            height="160"
            src="https://www.youtube.com/embed/Ryu_1tQwEUM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className=" flex self-center"> TESTE</div>
        </div>
      </div>
    </section>
  );
}
