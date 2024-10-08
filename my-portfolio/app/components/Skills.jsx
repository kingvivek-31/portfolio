import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <>
      <hr />
      <div className="flex items-center justify-center p-10 flex-col">
        <h1 className="text-white text-4xl">TECHNOLOGIES</h1>

        <div className="flex flex-row p-20 ">
          <FaHtml5 className="text-orange-600 text-9xl" />
          <FaCss3 className="text-blue-400 text-9xl mx-11 " />
          <FaJs className="text-yellow-400 text-9xl  " />
          <FaReact className="text-blue-600 text-9xl mx-11  " />
          <RiTailwindCssFill className="text-blue-300 text-9xl   " />
        </div>
      </div>
    </>
  );
};

export default Skills;
