import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Link from "next/link";

export default function PortfolioSection() {

  return (
    <section
      id="portfolio"
      className={`w-screen flex flex-col gap-10 items-center px-5 md:px-10 pt-10 py-10 `}
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
                EVENTOS
              </h1>
              <iframe
                className="md:w-[70%] h-[300px] w-[90%]"
                width={400}
                height={400}
                src="https://www.youtube.com/embed/mE9et4biPgs"
                title="Video de gravação de eventos"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center justify-center flex-col gap-4">
              <h1 className="font-bold text-md text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                EMPRESARIAL
              </h1>
              <iframe
                className="md:w-[70%] h-[300px] w-[90%]"
                src="https://www.youtube.com/embed/v33g_LEVk3w"
                title="Video de gravação de propaganda empresarial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col gap-4">
              <h1 className="font-bold text-md text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                INSTITUCIONAL
              </h1>
              <iframe
                className="md:w-[70%] h-[300px] w-[90%]"
                src="https://www.youtube.com/embed/YBO7tqJDLyU"
                title="Vídeo de gravação institucional"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col gap-4">
              <h1 className="font-bold text-md text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                IMOBILIÁRIO
              </h1>
              <iframe
                className="md:w-[70%] h-[300px] w-[90%]"
                src="https://www.youtube.com/embed/gYyZac-mPoI"
                title="Vídeo de setor imobiliário"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col gap-4">
              <h1 className="font-bold text-md text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                EVENTOS ORGANIZACIONAIS
              </h1>
              <iframe
                className="md:w-[70%] h-[300px] w-[90%]"
                src="https://www.youtube.com/embed/4Ek0g1Ws6ys"
                title="Vídeo de gravação de eventos"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col gap-4">
              <h1 className="font-bold text-md text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                UM POUCO SOBRE MIM
              </h1>
              <iframe
                className="md:w-[70%] h-[300px] w-[90%]"
                src="https://www.youtube.com/embed/jym3R8kso_I"
                title="Vídeo de curriculum vitae"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col gap-4">
              <h1 className="font-bold text-md text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                APRESENTAÇÃO EMPRESARIAL
              </h1>
              <iframe
                className="md:w-[70%] h-[300px] w-[90%]"
                src="https://www.youtube.com/embed/J2mDWGbRbMM"
                title="Vídeo de apresentação empresarial"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Link
        className="transform w-[120px] py-2 flex items-center justify-center text-lg bg-slate-600 text-white md:mt-5 mt-2 shadow-lg transition duration-150 ease-in-out hover:scale-105 cursor-pointer hover:bg-slate-700"
        href="https://www.instagram.com/vistaaereafilmes/"
        target="_blank"
      >
        VER MAIS
      </Link>
    </section>
  );
}





