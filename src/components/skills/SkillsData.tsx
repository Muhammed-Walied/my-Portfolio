import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { BiLogoRedux } from "react-icons/bi";
import { SiExpo } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa6";
import { SiVite } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { IoLogoFirebase } from "react-icons/io5";
import { DiAndroid } from "react-icons/di";
import { SiGradle } from "react-icons/si";
import { SiPostman } from "react-icons/si";

import {
  blue,
  deepPurple,
  green,
  orange,
  teal,
  yellow,
} from "@mui/material/colors";

export const skillsdata = [
  {
    title: "Javascript",
    icons: (
      <IoLogoJavascript
        style={{ marginLeft: "auto", marginRight: "auto" }}
        size={50}
        color={yellow[600]}
      />
    ),
  },
  {
    title: "Typescript",
    icons: (
      <SiTypescript
        style={{ marginLeft: "auto", marginRight: "auto" }}
        color={blue[500]}
        size={50}
      />
    ),
  },
  {
    title: "React",
    icons: (
      <FaReact
        style={{ marginLeft: "auto", marginRight: "auto" }}
        color={blue[600]}
        size={50}
      />
    ),
  },
  {
    title: "React Native",
    icons: (
      <TbBrandReactNative
        style={{ marginLeft: "auto", marginRight: "auto" }}
        color={blue[700]}
        size={50}
      />
    ),
  },
  {
    title: "Tailwind",
    icons: (
      <SiTailwindcss
        style={{ marginLeft: "auto", marginRight: "auto" }}
        color={blue[400]}
        size={50}
      />
    ),
  },
  {
    title: "Bootstrap",
    icons: (
      <BsFillBootstrapFill
        style={{ marginLeft: "auto", marginRight: "auto" }}
        color={deepPurple[900]}
        size={50}
      />
    ),
  },
  {
    title: "Redux",
    icons: (
      <BiLogoRedux
        style={{ marginLeft: "auto", marginRight: "auto" }}
        color={deepPurple[700]}
        size={50}
      />
    ),
  },
  {
    title: "Expo",
    icons: (
      <SiExpo style={{ marginLeft: "auto", marginRight: "auto" }} size={50} />
    ),
  },
  {
    title: "Git",
    icons: (
      <FaGitAlt
        style={{ marginLeft: "auto", marginRight: "auto" }}
        color={orange[900]}
        size={50}
      />
    ),
  },
  {
    title: "HTML",
    icons: (
      <IoLogoHtml5
        style={{ marginLeft: "auto", marginRight: "auto" }}
        color={orange[900]}
        size={50}
      />
    ),
  },
  {
    title: "CSS",
    icons: (
      <FaCss3Alt
        style={{ marginLeft: "auto", marginRight: "auto" }}
        color={blue[700]}
        size={50}
      />
    ),
  },
  {
    title: "Mui",
    icons: (
      <SiMui
        style={{ marginLeft: "auto", marginRight: "auto" }}
        color={blue[900]}
        size={50}
      />
    ),
  },
  {
    title: "Vite",
    icons: (
      <SiVite
        style={{ marginLeft: "auto", marginRight: "auto" }}
        color={yellow[600]}
        size={50}
      />
    ),
  },
  {
    title: "Postman",
    icons: (
      <SiPostman
        style={{ marginLeft: "auto", marginRight: "auto" }}
        color={orange[700]}
        size={50}
      />
    ),
  },
  {
    title: "Linux",
    icons: (
      <FcLinux style={{ marginLeft: "auto", marginRight: "auto" }} size={50} />
    ),
  },
  {
    title: "Firebase",
    icons: (
      <IoLogoFirebase
        style={{ marginLeft: "auto", marginRight: "auto" }}
        color={orange[900]}
        size={50}
      />
    ),
  },
  {
    title: "Android",
    icons: (
      <DiAndroid
        style={{ marginLeft: "auto", marginRight: "auto" }}
        color={green[700]}
        size={50}
      />
    ),
  },
  {
    title: "Gradle",
    icons: (
      <SiGradle
        style={{ marginLeft: "auto", marginRight: "auto" }}
        color={teal[900]}
        size={50}
      />
    ),
  },
];
