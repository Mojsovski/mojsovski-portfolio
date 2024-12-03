import React, { useState } from "react";
import { motion } from "motion/react";

import Navbar from "../components/global/Navbar";
import image from "../assets/images/image";
import { iconsProject } from "../assets/icons/icons";
import { listProject } from "../data/listProject";
import Card from "../components/global/Card";
import Transition from "../components/global/Transition";

function Project() {
  return (
    <>
      <Navbar />
      <div className="h-screen relative bg-black">
        <div className="px-5 md:px-20 py-36 flex flex-col gap-12 bg-black relative">
          <motion.h1
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            transition={{ duration: 0.5, ease: "anticipate" }}
            className="text-center text-4xl md:text-5xl text-white"
          >
            Project
          </motion.h1>
          {/* Tech Stack */}
          <div className="flex flex-col gap-7">
            <motion.h2
              initial={{ y: -70, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              transition={{ duration: 0.5, ease: "anticipate", delay: 0.2 }}
              className="text-center text-2xl md:text-3xl text-white"
            >
              Tech Stack That I Use
            </motion.h2>
            <motion.div
              initial={{ y: -70, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              transition={{ duration: 0.5, ease: "anticipate", delay: 0.3 }}
              className="mx-auto px-5  md:px-48 flex flex-wrap gap-5 md:gap-9 justify-center items-center"
            >
              {iconsProject.map((data, index) => {
                const Icons = data.icons;
                return (
                  <div
                    key={index}
                    className="bg-white p-2 md:size-28 size-24 rounded-3xl flex flex-col justify-center items-center"
                  >
                    <Icons className="md:size-20 size-16" />
                  </div>
                );
              })}
            </motion.div>
          </div>
          {/* Project */}
          <div className="flex flex-col gap-7 relative">
            <div className="flex justify-center px-20 gap-5">
              <motion.h2
                initial={{ y: 70, opacity: 0 }}
                animate={{ y: 0, opacity: 100 }}
                transition={{ duration: 0.5, ease: "anticipate", delay: 0.2 }}
                className="text-center text-2xl md:text-lg text-white"
              >
                My Project
              </motion.h2>
              {/* <button className="text-center text-2xl md:text-lg text-white">
                All
              </button>
              <button className="text-center text-2xl md:text-lg text-white">
                Web
              </button>
              <button className="text-center text-2xl md:text-lg text-white">
                Mobile
              </button> */}
            </div>
            <motion.div
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              transition={{ duration: 0.5, ease: "anticipate", delay: 0.1 }}
              className=" md:px-10 flex flex-wrap gap-5 justify-center items-center relative"
            >
              {listProject.map((data, index) => {
                return (
                  <Card
                    key={index}
                    image={data.image}
                    title={data.title}
                    detail={data.detail}
                  />
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transition(Project);
