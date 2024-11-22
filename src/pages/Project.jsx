import React, { useState } from "react";
import Navbar from "../components/global/Navbar";
import image from "../assets/images/image";
import { Icons } from "../assets/icons/icons";
import { listProject } from "../data/listProject";
import Card from "../components/global/Card";

function Project() {
  return (
    <>
      <Navbar />
      <div className="h-screen relative bg-black">
        <div className="px-5 md:px-20 py-36 flex flex-col gap-12 bg-black relative">
          <h1 className="text-center text-4xl md:text-5xl text-white">
            Project
          </h1>
          {/* Tech Stack */}
          <div className="flex flex-col gap-7">
            <h2 className="text-center text-2xl md:text-3xl text-white">
              Tech Stack That I Use
            </h2>
            <div className="mx-auto px-5 md:px-48 flex flex-wrap gap-5 md:gap-9 justify-center items-center">
              {Icons.map((data, index) => {
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
            </div>
          </div>
          {/* Project */}
          <div className="flex flex-col gap-7 relative">
            <div className="flex justify-center px-20 gap-5">
              <button className="text-center text-2xl md:text-lg text-white">
                All
              </button>
              <button className="text-center text-2xl md:text-lg text-white">
                Web
              </button>
              <button className="text-center text-2xl md:text-lg text-white">
                Mobile
              </button>
            </div>
            <div className=" md:px-10 flex flex-wrap gap-5 justify-center items-center relative">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
