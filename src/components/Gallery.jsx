import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

const shapes = [
  "rounded-xl",
  "rounded-2xl",
  "rounded-[1.5rem]",
  "rounded-tl-[40%] rounded-br-[40%]",
];

const Gallery = () => {
  const photos = [
    "/img/6.JPG",
    "/img/2.jpg",
    "/img/12.JPG",
  ];

  return (
    <div className="py-16 bg-white px-4 sm:px-6 md:px-10">
      {/* <h2 className="text-center text-3xl sm:text-4xl font-bold text-pink-600 mb-10 leading-tight">
        💕 Beautiful Memories
      </h2> */}

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
              <motion.img
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.4 }}
                src={src}
                alt={`Memory ${idx + 1}`}
                className={`mx-auto shadow-xl w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover ${shapes[idx % shapes.length]}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
