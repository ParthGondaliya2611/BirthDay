import React from "react";
import { motion } from "framer-motion";

const Message = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-center py-14 px-4 sm:px-6 bg-yellow-100 rounded-t-3xl shadow-inner"
      aria-label="Personal birthday message"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-yellow-700 leading-tight">
        From Me to Bhai 💪
      </h2>
      <p className="max-w-xl mx-auto text-base sm:text-lg md:text-xl text-yellow-800 leading-relaxed px-2">
        Dear VivekBhai, I just want to say how lucky we are to have you in our
        lives. May your day be filled with surprises, smiles, and lots of love!
      </p>
    </motion.div>
  );
};

export default Message;
