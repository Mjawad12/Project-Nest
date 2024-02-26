"use client";
import { tasks } from "@/Consonants";
import React, { useState } from "react";
import Task from "./Task";
import { motion } from "framer-motion";
import { useMyContext } from "./Context/Mainstate";
function TaskBanner() {
  const { authtoken } = useMyContext();
  const [task, settask] = useState(tasks[0]);
  return (
    authtoken && (
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ opacity: 0, x: "100%" }}
        transition={{
          delay: 1.2,
          duration: 1,
          type: "spring",
          stiffness: "500",
          mass: 0.5,
        }}
        className="flex flex-col justify-start items-start w-full  bg-white rounded-xl "
      >
        <p className="font-pm font-semi px-5 pt-4">Task Today</p>
        <Task
          img={task.img}
          date={task.date}
          title={task.title}
          days={task.days}
          type={task.type}
        />
        <div className="flex flex-col justify-start items-start px-5 py-4 w-full gap-5">
          <div className="flex flex-col justify-between items-start w-full gap-2">
            <div className="flex justify-between items-center w-full">
              <p className="font-pm font-semi">Detail Task</p>
              <p className="font-pm font-semi text-[0.85rem] text-gray-500">
                {task.type}
              </p>
            </div>
            <ul className="flex flex-col justify-normal items-start gap-4">
              {task.instructions.map((it, index) => {
                return (
                  <div className="flex justify-start items-start gap-2">
                    <span className="w-[1.8rem] h-[1.8rem] bg-hoverC flex justify-center items-center  rounded-lg">
                      {index}
                    </span>
                    <p>{it.slice(0, 20)}...</p>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="w-full text-center">
            <button className="w-full bg-Pn-default-500 text-white border-none py-2 rounded-xl ">
              Go to Details
            </button>
          </div>
        </div>
      </motion.div>
    )
  );
}

export default TaskBanner;
