import React, { useState } from "react";
import Navbar from "../components/global/Navbar";
import { iconsLink } from "../assets/icons/icons";
import Transition from "../components/global/Transition";

function Contact() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="h-screen relative bg-black">
        <div className="px-5 md:px-20 py-36 flex flex-col gap-12 bg-black relative">
          <h1 className="text-center text-4xl md:text-5xl text-white">
            Find Me On
          </h1>
          {/* Link */}
          <div className="flex flex-col gap-7">
            <div className="mx-auto px-5 md:px-32 flex flex-wrap gap-5 md:gap-9 justify-center items-center">
              {iconsLink.map((data, index) => {
                const Icons = data.icons;
                return (
                  <a
                    href={data.href}
                    target="_blank"
                    key={index}
                    className="bg-white hover:bg-slate-200 py-2 px-5 w-48 h-16 gap-5 rounded-xl flex flex-row justify-start items-center hover"
                  >
                    <Icons className="md:size-10 size-16" />
                    <h2 className="text-lg">{data.name}</h2>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transition(Contact);
