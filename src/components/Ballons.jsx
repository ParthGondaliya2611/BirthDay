// components/Balloons.jsx
import React from "react";

const Balloons = () => {
  return (
    <div className="balloon-container pointer-events-none fixed inset-0 overflow-hidden z-10">
      {[...Array(10)].map((_, i) => (
        <div key={i} className={`balloon balloon-${i + 1}`} />
      ))}
    </div>
  );
};

export default Balloons;
