import React from "react";
import {
  BiLogoHtml5,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoCss3,
  BiLogoNodejs,
  BiLogoJavascript,
  BiLogoRedux,
  BiLogoGmail,
} from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { SiAxios, SiVite } from "react-icons/si";
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiTelegramFill,
} from "react-icons/ri";

import zustandIconUrl from "../icons/zustand.svg?url";

const iconZustand = () => {
  return (
    <img
      src={zustandIconUrl}
      alt="Zustand Icon"
      className="md:size-20 size-16 grayscale brightness-150"
    />
  );
};

export const iconsProject = [
  { name: "HTML", icons: BiLogoHtml5 },
  { name: "CSS", icons: BiLogoCss3 },
  { name: "Javascript", icons: BiLogoJavascript },
  { name: "NodeJS", icons: BiLogoNodejs },
  { name: "Vite", icons: SiVite },
  { name: "React", icons: BiLogoReact },
  { name: "TailwindCSS", icons: BiLogoTailwindCss },
  { name: "Bootstrap", icons: FaBootstrap },
  { name: "Axios", icons: SiAxios },
  { name: "Redux", icons: BiLogoRedux },
  { name: "Zustand", icons: iconZustand },
];

export const iconsLink = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/amratta.tl/",
    icons: RiInstagramFill,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/amratta-tegar-lazuardy-31a805226/",
    icons: RiLinkedinBoxFill,
  },
  {
    name: "Github",
    href: "https://github.com/Mojsovski",
    icons: RiGithubFill,
  },
  { name: "Telegram", href: "", icons: RiTelegramFill },
  { name: "Gmail", href: "", icons: BiLogoGmail },
];
