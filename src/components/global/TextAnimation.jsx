import React from "react";
import { useTypewriter, cursor } from "react-simple-typewriter";

const TextAnimation = () => {
  const [text] = useTypewriter({
    words: ["Front-End Developer", "IT Support"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 80,
  });

  return (
    <h1 className=" text-white text-3xl">
      I'm <span className="text-cyan-600">{text}</span>
    </h1>
  );
};

export default TextAnimation;
