import React from "react";
import Navbar from "../components/global/Navbar";
import ParticleComponent from "../components/global/Particles";
import TextAnimation from "../components/global/TextAnimation.Jsx";

function LandingPage() {
  return (
    <>
      <ParticleComponent />
      <Navbar />
      <div className="h-screen px-20 pt-28 relative">
        <div className="h-[500px] flex flex-col justify-center items-center gap-2 ">
          <h2 className=" text-white text-2xl">Hi there, i'm</h2>
          <h1 className=" text-white text-6xl">Amratta Tegar Lazuardy</h1>
          <TextAnimation />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
