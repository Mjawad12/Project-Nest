"use client";
import React, { useEffect } from "react";
import { arrowLeft, tasks } from "@/Consonants";
import Task from "./Task";
import { motion, stagger, useAnimate } from "framer-motion";
function TaskCollection() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("div", { opacity: 1, scale: 1 });
  }, []);
  return (
    <div className="flex flex-col justify-start items-start gap-7 w-full ">
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        className="flex justify-between items-center w-full"
      >
        <p className="font-pm font-bold text-[1.2rem]">Tasks</p>
        <div className="flex w-[5rem] justify-between items-center">
          {arrowLeft}
          <div className="scale-[-1]">{arrowLeft}</div>
        </div>
      </motion.div>
      <motion.div
        ref={scope}
        className="flex justify-start items-start gap-10 w-full "
      >
        {tasks.slice(0, 2).map((it, index) => (
          <motion.div initial={{ opacity: 0, scale: 0 }} className="w-full">
            <Task
              date={it.date}
              img={it.img}
              title={it.title}
              days={it.days}
              type={it.type}
              key={index}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default TaskCollection;
