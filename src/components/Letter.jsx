import React, { useState } from "react";
import { motion } from "framer-motion";

const Letter = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="py-16 px-4 sm:px-6 bg-white text-center">
      <div
        className={`letter-wrapper ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        {/* FRONT SIDE */}
        <motion.div
          className="letter-front"
          initial={{ opacity: 0, rotateX: 90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-xl bg-yellow-50 border border-yellow-200 shadow-2xl p-6 max-w-md mx-auto h-full flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-2">
              ✉️ Click to open your letter
            </h2>
            <p className="text-yellow-700 text-sm sm:text-base">
              Someone special left you a birthday surprise...
            </p>
          </div>
        </motion.div>

        {/* BACK SIDE */}
        <motion.div
          className="letter-back"
          initial={{ opacity: 0 }}
          animate={{ opacity: flipped ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-xl bg-pink-50 border border-yellow-300 shadow-2xl p-6 max-w-md mx-auto h-full text-left flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-pink-600 mb-4 text-center">
              💌 Happy Birthday Brother
            </h2>
            <p className="text-base sm:text-lg text-yellow-800 leading-relaxed">
              Dear Bhai,<br /><br />
              You are more than family — you’re the joy that lights up every room, the laughter in our quiet days, and the heart behind our happiest memories.
              <br /><br />
              We’re so lucky to have you. Happy Birthday, and may every dream you hold come true. 🎂🎈🎁
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Letter;
