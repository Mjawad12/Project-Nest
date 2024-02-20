"use client";
import React, { useEffect, useRef, useState } from "react";
import data from "./Data";
import { Line } from "react-chartjs-2";
import { Chart as chartJS } from "chart.js/auto";
import { motion } from "framer-motion";

function TaskGraph() {
  const chart = useRef(null);
  const [TaskData, setTaskData] = useState({
    labels: data.map((it) => it.day),
    datasets: [
      {
        label: "Tasks",
        data: data.map((it) => it.taskComepleted),
        borderColor: "black",
        borderWidth: 4,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "#546FFF",
        font: 50,
      },
    ],
  });
  useEffect(() => {
    chartJS.defaults.font.size = 15;
    chartJS.defaults.font.weight = "bold";
    chartJS.defaults.font.family = "__fonts_ce8a18";
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "backInOut",
      }}
      className="flex flex-col justify-start items-start w-[36rem] gap-5 bg-white rounded-lg  px-5 py-4 "
    >
      <div className="flex w-full justify-between items-center">
        <p className="font-pm font-bol text-[1.2rem]">Activity</p>
        <p className="font-pm font-med text-[1rem]">This Week</p>
      </div>
      <Line
        ref={chart}
        data={TaskData}
        options={{
          aspectRatio: 1 / 0.3,
          responsive: true,
          elements: {
            line: { tension: 0.4 },
            point: { radius: 2 },
          },
          plugins: {
            legend: false,
          },
        }}
      ></Line>
    </motion.div>
  );
}

export default TaskGraph;
