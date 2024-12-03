import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/global/Navbar";
import ParticleComponent from "../components/global/Particles";
import TextAnimation from "../components/global/TextAnimation.Jsx";
import { motion } from "motion/react";
import Transition from "../components/global/Transition";

function Home() {
  return (
    <>
      <ParticleComponent />
      {/* <Navbar /> */}
      <div className="h-screen px-10 md:px-20 pt-28 relative">
        <div className="lg:mx-52 h-[600px] flex flex-col justify-center items-center   ">
          <div className="h-3/5 text-center text-white space-y-2 flex flex-col justify-center ">
            <h2 className="text-2xl">Hi there 👋 , i'm</h2>
            <h1 className="text-6xl ">Amratta Tegar Lazuardy</h1>
            <TextAnimation />
          </div>
          <div className="w-1/2 space-y-2">
            {/* <h2 className=" text-center text-white text-lg">
              Focus on build a ReactJS website with emphasizing responsiveness,
              aesthetics, and functionality.
            </h2> */}
            <div className="flex flex-col justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Link
                  className="px-7 py-2 bg-gray-950 rounded-xl text-slate-400 hover:bg-slate-900 hover:text-white"
                  to="/about"
                >
                  read more
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transition(Home);
