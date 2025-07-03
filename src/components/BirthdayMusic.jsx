import React, { useRef, useState, useEffect } from "react";
import { FaPause } from "react-icons/fa";

const BirthdayMusic = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.9;
      audio.play()
        .then(() => {
          setPlaying(true);
        })
        .catch(() => {
          setAutoplayBlocked(true); // Show "Tap to Start Music" screen
        });
    }
  }, []);

  const startMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().then(() => {
        setPlaying(true);
        setAutoplayBlocked(false);
      });
    }
  };

  const stopMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      {/* Overlay if autoplay is blocked */}
      {autoplayBlocked && (
        <div
          className="fixed inset-0 bg-black/10 bg-opacity-80 flex items-center justify-center z-50"
          onClick={startMusic}
        >
          <button className="bg-white absolute top-10 text-pink-600 text-lg px-6 py-3 rounded-full shadow-lg animate-pulse">
            Tap to Start Music 🎵
          </button>
        </div>
      )}

      {/* Stop Music button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
        {playing && (
          <button
            onClick={stopMusic}
            className="flex items-center gap-2 bg-pink-500 text-white py-2 px-4 sm:py-2.5 sm:px-5 text-sm sm:text-base rounded-full shadow-xl hover:bg-pink-600 transition-all duration-300"
          >
            <FaPause />
            Stop Music
          </button>
        )}
      </div>

      <audio ref={audioRef} loop>
        <source src="/Birthday.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default BirthdayMusic;
