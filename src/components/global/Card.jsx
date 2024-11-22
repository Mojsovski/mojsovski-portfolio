import React, { useState } from "react";

function Card({ image, title, detail }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-96 h-[280px] rounded-t-2xl relative overflow-hidden"
    >
      <img
        className="aspect-auto w-full h-[190px] object-cover rounded-t-2xl"
        src={image}
        alt={title}
      />
      <div
        className={`absolute ${
          isHovered ? "top-20 h-[200px]" : "top-40 h-[120px]"
        } px-5 py-4 w-full bg-slate-900 rounded-2xl flex flex-col justify-start items-start transition-all duration-300`}
      >
        <h2 className="text-white text-lg">{title}</h2>
        <p className="text-white text-sm text-justify ">
          {isHovered ? detail.substring(0, 200) : detail.substring(0, 120)}
          {!isHovered && detail.length > 120 && "..."}
        </p>
      </div>
    </div>
  );
}

export default Card;
