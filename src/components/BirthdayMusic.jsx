import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const BirthdayMusic = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.7;
  }, []);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <button
        onClick={togglePlay}
        className="flex items-center gap-2 bg-pink-500 text-white py-2 px-4 sm:py-2.5 sm:px-5 text-sm sm:text-base rounded-full shadow-xl hover:bg-pink-600 transition-all duration-300"
        aria-label={playing ? "Pause birthday music" : "Play birthday music"}
      >
        {playing ? <FaPause /> : <FaPlay />}
        {playing ? "Pause Music" : "Play Music"}
      </button>

      <audio ref={audioRef} loop>
        <source src="/birthday.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default BirthdayMusic;
