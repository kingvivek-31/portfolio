"use client";
import React from "react";

const Contact = () => {
  return (
    <>
      <hr />
      <div className="flex flex-col justify-center items-center m-8">
        <h1 className="text-white text-4xl">LET,S CONNECT</h1>
        <form action="" className="flex flex-col m-7">
          <input type="text" placeholder="your name" className="px-12 py-3" />
          <input type="text" placeholder="email" className="my-7 py-3 px-12" />
          <input
            type="text"
            placeholder="any meassage"
            className="py-10 px-12"
          />
          <input type="submit" className="bg-gray-400 text-xl m-6" />
        </form>
      </div>
    </>
  );
};

export default Contact;
