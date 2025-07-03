import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative text-center py-20 sm:py-24 md:py-32 bg-gradient-to-br from-pink-300 via-yellow-100 to-pink-100 overflow-hidden px-4 sm:px-6">
      {/* 🎉 Emoji Confetti Background */}
      <div className="absolute inset-0 z-0 animate-pulse text-5xl sm:text-6xl opacity-10 pointer-events-none leading-relaxed break-words">
        🎉🎈🎂🎁💖💐
      </div>

      {/* 🎂 Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-pink-700 drop-shadow-lg relative z-10 leading-tight max-w-3xl mx-auto"
      >
        🎉 Happy Birthday,Big Brother! 🎂
      </motion.h1>

      {/* 💬 Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-base sm:text-lg md:text-xl text-pink-800 z-10 relative max-w-2xl mx-auto px-2"
      >
        Wishing you a day full of love, joy, and sparkle!
      </motion.p>
    </div>
  );
};

export default Hero;
