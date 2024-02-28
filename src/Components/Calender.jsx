"use client";
import { arrowLeft } from "@/Consonants";
import React, { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Calender = memo(() => {
  const Months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [incre, setincre] = useState(0);
  const Days = ["S", "M", "T", "W", "T", "F", "S"];
  const [date, setdate] = useState(new Date(Date.now()));
  const [noDate, setnoDate] = useState(date.getDate());
  const [day, setday] = useState(date.getDay());
  const [Month, setMonth] = useState(date.getMonth());
  const [call, setcall] = useState(0);

  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: "-100%", opacity: 0 }}
      transition={{
        delay: 1,
        duration: 1,
        type: "spring",
        stiffness: "500",
        mass: 0.5,
      }}
      className="w-full px-3 py-4 flex flex-col justify-start items-center bg-white gap-5 "
    >
      <div className="flex justify-between items-center w-full ">
        <div
          onClick={() => {
            if (incre > 0) {
              setincre((prev) => prev - 7);
              setcall(call + 1);
            }
          }}
        >
          {arrowLeft}
        </div>
        <p>
          {Months[Month]} {date.getFullYear()}
        </p>
        <div
          onClick={() => {
            setincre((prev) => prev + 7);
            setcall(call + 1);
          }}
          className="scale-[-1]"
        >
          {arrowLeft}
        </div>
      </div>
      <div className="flex justify-start items-center gap-2">
        {Days.map((it, index) => {
          const [repDate, setrepDate] = useState(noDate - day + index + incre);

          useEffect(() => {
            setrepDate(noDate - day + index + incre);
            if (Month % 2 === 0) {
              if (noDate - day + index + incre > 31) {
                setMonth(Month + 1);
                setnoDate(0);
                setday(0);
                setincre(1);
                // setrepDate(1);
              }
            } else {
              if (noDate - day + index + incre > 30) {
                console.log("inter");
                setMonth(Month + 1);
                setincre(1);
                // setrepDate(1);
                setnoDate(0);
                setday(0);
              }
            }
          }, [call]);

          useEffect(() => {}, [repDate]);

          return (
            <div
              className={`flex flex-col justify-between items-center gap-5 w-[2rem] rounded-full py-1  ${
                index === day && incre === 0 && "bg-Pdark text-white"
              } `}
            >
              <span>{it}</span>
              <span
                className={`${
                  index === day &&
                  incre === 0 &&
                  "rounded-full w-[1.6rem] text-center bg-Pn-dark-600 "
                }`}
              >
                {/* {noDate - day + index + incre} */}
                {repDate}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
});

export default Calender;
