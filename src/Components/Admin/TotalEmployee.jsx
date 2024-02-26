"use client";
import React from "react";
import { motion } from "framer-motion";

function TotalEmployee({ men, women }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "backInOut",
      }}
      className="flex flex-col items-center justify-start bg-Pdark gap-4 px-4 py-7 rounded-lg z-0 "
    >
      <p className="text-white font-pm text-[1.2rem] font-semi ">
        Total Employees
      </p>
      <p className="text-white font-pm text-[1.5rem] font-semi">
        {men + women}
      </p>
      <div className="flex  justify-between items-center  gap-3">
        <div
          className="taskMan flex flex-col justify-center items-center rounded-full h-[7rem] w-[7rem] text-[0.9rem]
          text-white font-semi 
          relative bg-Pdark "
          style={{
            background: `radial-gradient(closest-side, #141522 90%, transparent 92% 100%) ,conic-gradient(#3D53DB ${(
              (men / (men + women)) *
              100
            ).toFixed(0)}%, #DCE4FF 0)`,
          }}
        >
          <p>{((men / (men + women)) * 100).toFixed(0)}% Men</p>
          <p>{((women / (men + women)) * 100).toFixed(0)}% Women</p>
        </div>
        <div className="flex flex-col  justify-start items-start  text-white font-semi ">
          <p className="font-pm font-bol text-1xl">
            <span className="w-2 h-2 rounded-full bg-Pn-default-500 inline-block mb-[3px] mr-[5px] " />
            Men
          </p>
          <p className="font-pm font-bol text-1xl">
            <span className="w-2 h-2 rounded-full bg-white inline-block mb-[3px] mr-[5px] " />
            Women
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default TotalEmployee;
