import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import articles from "../data/articles.json";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ArticleSlider() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        slidesPerView={1}
        spaceBetween={20}
        className="rounded-xl"
      >
        {articles.map((article) => (
          <SwiperSlide key={article.id}>
            <Link to={`/articles/${article.id}`}>
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden">

                {/* 🔹 Background blur (isi kiri kanan) */}
                <img
                  src={article.thumbnail}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl brightness-75"
                />

                {/* 🔹 Overlay gradasi */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* 🔹 Gambar utama (UTUH) */}
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="relative z-10 max-w-full max-h-full mx-auto object-contain"
                />

                {/* 🔹 Text */}
                <div className="absolute bottom-0 left-0 z-20 p-4 md:p-6 text-white max-w-3xl">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-snug">
                    {article.title}
                  </h2>
                  <p className="hidden sm:block mt-2 text-sm md:text-base text-gray-200">
                    {article.excerpt}
                  </p>
                </div>

              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
