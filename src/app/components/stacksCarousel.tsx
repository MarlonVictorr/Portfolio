"use client";

import React from "react";
import {
  SiPhp,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiOracle,
  SiBootstrap,
  SiJquery,
  SiSocketdotio,
} from "react-icons/si";

import { FaCode, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

const stacks = [
  { icon: FaCode, label: "C#", color: "#9D4F96" },
  { icon: SiPhp, label: "PHP", color: "#8892BF" },
  { icon: SiHtml5, label: "HTML", color: "#E44D26" },
  { icon: SiCss3, label: "CSS", color: "#1572B6" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiJquery, label: "jQuery", color: "#0769AD" },
  { icon: SiSocketdotio, label: "WebSocket", color: "#010101" },
  { icon: SiFigma, label: "Figma", color: "#F24E1E" },
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38BDF8" },
  { icon: FaDatabase, label: "SQL Server", color: "#A91022" },
  { icon: SiOracle, label: "Oracle", color: "#F80000" },
  { icon: SiMysql, label: "MySQL", color: "#4479A1" },
  { icon: SiBootstrap, label: "Bootstrap", color: "#7952B3" },
];

const StacksCarousel = () => {
  return (
    <div className="w-full border-t border-gray-700 overflow-hidden py-8">
      <div className="relative flex justify-center mb-10">
        <h2 className="text-5xl text-white opacity-30 text-center">Stacks</h2>
        <h2 className="text-4xl mt-2 text-white absolute opacity-100 top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Atuo
        </h2>
      </div>
      <motion.div
        className="flex gap-10 animate-slide"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {[...stacks, ...stacks].map((stack, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center group cursor transition-opacity duration-300 hover:opacity-100 opacity-30"
          >
            <stack.icon
              className="w-12 h-12 md:w-14 md:h-14"
              style={{ color: stack.color }}
            />
            <span className="text-sm mt-2 text-white">{stack.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default StacksCarousel;
