import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

const shapes = [
  "rounded-xl",
  "rounded-2xl",
  "rounded-[1.5rem]",
  "rounded-tl-[40%] rounded-br-[40%]",
  "rounded-full",
  "rounded-tr-[3rem] rounded-bl-[3rem]",
  "rounded-t-[2rem]",
];

const photos = [
  "/img/7.JPG",
  "/img/2.jpg",
  "/img/5.JPG",
  "/img/9.JPG",
  "/img/11.JPG",
  "/img/21.JPG",
  "/img/22.JPG",
  "/img/23.JPG",
  "/img/24.JPG",
  "/img/13.JPG",
  "/img/25.JPG",

];

const Gallery = () => {
  return (
    <div className="py-16 bg-white px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            480: { slidesPerView: 1.3 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
            1280: { slidesPerView: 3 },
          }}
        >
          {photos.map((src, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 60, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className={`overflow-hidden w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] shadow-xl hover:shadow-pink-200 hover:shadow-2xl transition-shadow duration-500 mx-auto ${shapes[idx % shapes.length]}`}
              >
                <img
                  src={src}
                  alt={`Memory ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
