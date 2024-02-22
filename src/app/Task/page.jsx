"use client";
import Task from "@/Components/Task";
import { tasks } from "@/Consonants";
import { motion, stagger, useAnimate } from "framer-motion";
import Link from "next/link";

import React, { useEffect } from "react";

function page() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "div",
      { x: 0, opacity: 1 },
      { duration: 0.1, delay: stagger(0.05) }
    );
  }, []);

  return (
    <div className="flex flex-col justify-start items-start px-9 gap-3">
      <p className="font-pm font-bol text-2xl ">Tasks</p>
      <motion.div
        ref={scope}
        className="flex  justify-start items-start gap-5 flex-wrap"
      >
        {tasks.map((it, index) => (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            className="max-w-[23rem] w-full"
          >
            <Link href={`/Task/${it.slug}`}>
              <Task
                date={it.date}
                img={it.img}
                title={it.title}
                days={it.days}
                type={it.type}
                key={index}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default page;
