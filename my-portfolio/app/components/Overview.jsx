"use client";
import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
const overview = () => {
  return (
    <div className="my-24">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* <img src={pfp} alt="pfp" height={110} width={110} /> */}
        <h1 className="text-4xl font-bold py-14 text-white">VIVEK GUPTA</h1>
        <p className="text-white text-2xl translate-x-10">
          Hi , I am Vivek a passionate front-end developer Skilled in HTML, CSS,
          <br />
          JavaScript, React.js, and Tailwind CSS and I am also a first <br />
          year software engineering student at DTU, focusing on DTU <br />
          creating high-quality, visually appealing web solutions.
        </p>
        <div className="flex flex-row space-x-8 p-9">
          <a href="">
            {" "}
            <FaInstagram className="bg-white text-6xl" />
          </a>
          <a href="">
            <FaLinkedin className="bg-white text-6xl" />
          </a>
          <a href="\">
            <FaGithub className="bg-white text-6xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default overview;
