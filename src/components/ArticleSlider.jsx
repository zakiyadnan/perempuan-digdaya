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
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        {articles.map((article) => (
          <SwiperSlide key={article.id}>
            <Link to={`/articles/${article.id}`}>
              <div className="relative w-full aspect-[16/9] rounded overflow-hidden">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-4 text-white">
                  <h2 className="text-lg md:text-2xl font-bold">{article.title}</h2>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
