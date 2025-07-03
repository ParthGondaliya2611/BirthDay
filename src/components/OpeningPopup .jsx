// components/OpeningPopup.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const OpeningPopup = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const duration = 4000;
    const end = Date.now() + duration;

    const fire = () => {
      confetti({
        particleCount: Math.floor(Math.random() * 20 + 20),
        startVelocity: 60,
        spread: 360,
        ticks: 80,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
        colors: ["#ff4ecd", "#ffdd59", "#4bcffa", "#ffa801", "#ffffff"],
      });
    };

    const interval = setInterval(() => {
      if (Date.now() < end) fire();
      else clearInterval(interval);
    }, 300);

    const timer = setTimeout(() => setShow(false), 6500);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center flex-col bg-black/60 backdrop-blur-md text-white overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent z-10 animate-pulse" />

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="text-4xl md:text-5xl text-pink-400 font-extrabold drop-shadow-2xl z-20 mb-10 text-center"
          >
            🎉 Happy Birthday, Vivek Bhai! 🎂
          </motion.h1>

          {/* Photo stack */}
          <div className="relative w-52 h-64 sm:w-60 sm:h-72 z-30">
            <motion.img
              src="/img/9.JPG"
              className="absolute w-full h-full object-cover rounded-xl shadow-2xl z-10 border-4 border-white"
              initial={{ x: "-150%", rotate: -15, opacity: 0 }}
              animate={{ x: "-30px", rotate: -8, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1.6 }}
            />
            <motion.img
              src="/img/20.JPG"
              className="absolute w-full h-full object-cover rounded-xl shadow-2xl z-20 border-4 border-white"
              initial={{ x: "150%", rotate: 15, opacity: 0 }}
              animate={{ x: "30px", rotate: 8, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1.6 }}
            />
            <motion.img
              src="/img/6.JPG"
              className="absolute w-full h-full object-cover rounded-xl shadow-2xl z-30 border-4 border-white"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.4 }}
            />
          </div>

          {/* Floating hearts */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-400 text-xl z-10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ y: [0, -30], opacity: [1, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2 + Math.random() * 2,
                delay: Math.random(),
              }}
            >
              ❤️
            </motion.div>
          ))}

          <audio autoPlay>
            <source src="/fireworks.mp3" type="audio/mpeg" />
          </audio>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningPopup;
