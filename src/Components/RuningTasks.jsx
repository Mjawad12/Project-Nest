"use client";
import React from "react";
import { motion } from "framer-motion";

function RuningTasks({ tasks, compeletedTasks }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "backInOut",
      }}
      className="flex flex-col items-start justify-start bg-Pdark gap-4 px-4 py-7 rounded-lg z-0 "
    >
      <p className="text-white font-pm text-[1.2rem] font-semi ">Total Task</p>
      <p className="text-white font-pm text-[1.5rem] font-semi">{tasks}</p>
      <div className="flex justify-between items-center  gap-3">
        <div
          className="taskMan flex justify-center items-center rounded-full h-[5rem] w-[5rem]
          text-white font-semi 
          relative bg-Pdark "
          style={{
            background: `radial-gradient(closest-side, #141522 90%, transparent 92% 100%) ,conic-gradient(#3D53DB ${(
              (compeletedTasks / tasks) *
              100
            ).toFixed(0)}%, #DCE4FF 0)`,
          }}
        >
          {((compeletedTasks / tasks) * 100).toFixed(0)}%
        </div>
        <div className="flex flex-col justify-start items-start  text-white font-semi ">
          <p>{compeletedTasks}</p>
          <p className="text-[0.9rem]">Completed</p>
        </div>
      </div>
    </motion.div>
  );
}

export default RuningTasks;
