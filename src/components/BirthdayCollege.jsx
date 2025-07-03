import React from "react";

const BirthdayCollage = () => {
  const photos = [
    "/img/6.JPG",
    "/img/12.JPG",
    "/img/10.JPG",
    "/img/4.JPG",
    "/img/10.JPG",
    "/img/8.JPG",
    "/img/5.JPG",
    "/img/11.JPG",
    "/img/9.JPG",
  ];

  const rotations = [
    "rotate-2",
    "-rotate-3",
    "rotate-1",
    "-rotate-2",
    "rotate-3",
    "-rotate-1",
  ];

  return (
    <div className="min-h-screen bg-pink-100 py-16 px-4 sm:px-6 lg:px-10 text-center overflow-hidden">
      {/* 🎀 Header */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-pink-700 mb-4 drop-shadow-md leading-tight">
        🎉 Happy Birthday 🎈
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-10 text-pink-600 tracking-wide font-medium max-w-2xl mx-auto">
        Wishing you all the magic, memories, and moments that bring joy ✨
      </p>

      {/* 🖼️ Polaroid Grid */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
        {photos.map((src, idx) => (
          <div
            key={idx}
            className={`bg-white p-1 sm:p-2 shadow-lg rounded-xl w-[110px] h-[150px] xs:w-[130px] xs:h-[170px] sm:w-[160px] sm:h-[190px] md:w-[180px] md:h-[210px] lg:w-[200px] lg:h-[230px] transform ${
              rotations[idx % rotations.length]
            } hover:scale-105 transition duration-300`}
          >
            <img
              src={src}
              alt={`Memory ${idx + 1}`}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* 🎊 Footer Text */}
      <div className="mt-14 text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-pink-500 tracking-wider drop-shadow-lg">
        🎂💖 Many Many Returns of The Day 💖🎂
      </div>
    </div>
  );
};

export default BirthdayCollage;
