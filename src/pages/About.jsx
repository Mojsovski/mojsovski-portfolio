import React, { useState, useEffect } from "react";
import Navbar from "../components/global/Navbar";
import image from "../assets/images/image";
import experience from "../data/experience.json";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="h-screen relative bg-black">
        <div className="px-5 md:px-20 py-36 flex flex-col gap-24 bg-black">
          {/* about */}
          <div className="flex flex-col gap-12">
            <h1 className="text-center text-4xl md:text-5xl text-white">
              About Me
            </h1>
            <div className="mx-auto px-5 md:px-28 flex flex-col xl:flex-row justify-center items-center gap-10">
              <div className="w-full md:w-[400px] h-[400px]">
                <img
                  className="aspect-auto w-full h-full object-cover rounded-3xl"
                  src={image.author}
                />
              </div>
              <div className="my-10 text-justify w-full md:w-3/4 flex flex-col gap-3">
                <p className="text-white text-lg md:text-2xl">
                  I am a graduate of Information Systems at Dian Nuswantoro
                  University, with an interest in software development. Have
                  experience in front-end developer using HTML, CSS, Javascript,
                  and now focusing on ReactJS with emphasizing responsiveness,
                  aesthetics, and functionality. Involved in team and individual
                  projects with reference to SDLC and methodology.
                </p>
                <p className="text-white text-justify text-lg md:text-2xl">
                  In addition, I am also experienced as IT Support, handling
                  computer hardware software maintenance, supervising local
                  network operations, and providing services to users.
                </p>
              </div>
            </div>
          </div>
          {/* experience */}
          <div className="flex flex-col gap-12">
            <h1 className="text-center text-4xl md:text-5xl text-white">
              Experience
            </h1>
            <VerticalTimeline>
              {experience.map((data, index) => (
                <VerticalTimelineElement
                  key={index}
                  contentStyle={{
                    background: "rgb(239,239,239)",
                    color: isMobile ? "#000" : "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid rgb(239,239,239)",
                  }}
                  className="vertical-timeline-element--work gap-5"
                  date={data.date}
                  iconStyle={{ background: "rgb(0, 0, 0)", color: "" }}
                >
                  <h1 className="vertical-timeline-element-title text-lg md:text-xl font-semibold text-black">
                    {data.title}
                  </h1>
                  <h4 className="vertical-timeline-element-subtitle text-black">
                    {data.location}
                  </h4>
                  <p className="text-justify text-black">{data.detail}</p>
                  <p className="text-black">{data.role}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
