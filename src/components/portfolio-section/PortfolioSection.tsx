import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Merriweather } from "next/font/google";

import "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Link from "next/link";

const merriweather = Merriweather({ subsets: ["latin"], weight: "300" });

export default function PortfolioSection() {
  return (
    <section
      id="portifolio"
      className={`w-screen flex flex-col gap-10 items-center px-5 md:px-10 pt-10 py-10 ${merriweather.className}`}
    >
      <h1 className="font-bold text-transparent text-2xl md:text-3xl bg-clip-text bg-gradient-to-r from-white to-gray-400">
        P O R T F Ó L I O
      </h1>
      <div className="flex w-screen items-center justify-center">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          centeredSlides
          navigation={true}
          longSwipes
          loop
          className=" w-screen md:w-1/2 h-[400px]"
        >
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col gap-4">
              <h1 className="font-bold text-md text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                E V E N T O S
              </h1>
              <iframe
                className="md:w-[70%] h-[300px] w-[90%]"
                width={400}
                height={400}
                src="https://www.youtube.com/embed/mE9et4biPgs"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="eager"
              ></iframe>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center justify-center flex-col gap-4">
              <h1 className="font-bold text-md text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                E M P R E S A R I A L
              </h1>
              <iframe
                className="md:w-[70%] h-[300px] w-[90%]"
                src="https://www.youtube.com/embed/v33g_LEVk3w"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="eager"
              ></iframe>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center justify-center flex-col gap-4">
              <h1 className="font-bold text-md text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                E V E N T O S
              </h1>
              <iframe
                className="md:w-[70%] h-[300px] w-[90%]"
                src="https://www.youtube.com/embed/4Ek0g1Ws6ys"
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="eager"
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col gap-4">
              <h1 className="font-bold text-md text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                E V E N T O S
              </h1>
              <iframe
                className="md:w-[70%] h-[300px] w-[90%]"
                src="https://www.youtube.com/embed/mE9et4biPgs"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="eager"
              ></iframe>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Link
        className="transform w-[120px] py-2 flex items-center justify-center text-lg bg-slate-600 text-white md:mt-5 mt-2 rounded shadow-lg transition duration-150 ease-in-out hover:scale-105 cursor-pointer hover:bg-slate-700"
        href="https://www.youtube.com/@vistaaereafilmes"
        target="_blank"
      >
        VER MAIS
      </Link>
    </section>
  );
}

{
  /* <div className="flex flex-col items-center justify-center w-screen"></div>; */
}
