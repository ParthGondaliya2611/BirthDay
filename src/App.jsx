import React from "react";
import BirthdayMusic from "./components/BirthdayMusic";
import Balloons from "./components/Ballons";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Letter from "./components/Letter";
import Message from "./components/Message";
import BirthdayCollage from "./components/BirthdayCollege";
import OpeningPopup from "./components/OpeningPopup ";

function App() {
  return (
    <div className="relative bg-gradient-to-br from-pink-50 to-yellow-100 min-h-screen font-sans overflow-x-hidden">
      <OpeningPopup />
      <Balloons />
      <BirthdayMusic />
      <Hero />
      <Gallery />
      <Letter />
      <Message />
      <BirthdayCollage />
    </div>
  );
}

export default App;
