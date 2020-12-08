import React from "react";
import * as AiIcons from "react-icons/ai";
import { GiCricketBat } from "react-icons/gi";
import { FaBowlingBall } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "ODI",
    path: "/ODIData",
    icon: <GiCricketBat />,
    cName: "nav-text",
  },
  {
    title: "T20",
    path: "/Data",
    icon: <GiCricketBat />,
    cName: "nav-text",
  },
  {
    title: "All",
    path: "/AllMatches",
    icon: <FaBowlingBall />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/Team",
    icon: <AiOutlineTeam />,
    cName: "nav-text",
  },
];
