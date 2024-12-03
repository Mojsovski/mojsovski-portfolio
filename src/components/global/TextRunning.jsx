import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TextRunning = () => {
  const [text] = useTypewriter({
    words: ["Junior Front-End Developer", "IT Support", "Fresh Graduate"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 80,
  });

  return (
    <h1 className=" text-white text-4xl">
      I'm <span className="text-blue-600">{text}</span>
      <Cursor />
    </h1>
  );
};

export default TextRunning;
