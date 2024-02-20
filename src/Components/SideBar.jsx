"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { Icons } from "../Consonants";
import Link from "next/link";
import { motion, stagger, useAnimate } from "framer-motion";
function SideBar() {
  const [selected, setselected] = useState(0);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate("li", { x: 0, opacity: 1 }, { duration: 1, delay: stagger(0.2) });
  }, []);

  return (
    <div className="bg-white py-[2rem] px-[0.5rem]  max-w-[300px] w-full min-h-screen flex flex-col justify-start items-center gap-20 ">
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        className="flex justify-center items-center gap-4"
      >
        <div className="rounded-full bg-Pn-default-500 flex justify-center items-center overflow-hidden h-[3rem] w-[3rem]">
          <Image
            src={"/Project nest.png"}
            className="h-[2.2rem] w-[2.6rem] translate-y-[2px] "
            width="500"
            height="500"
            alt="logo"
          />
        </div>
        <h1 className="font-pm text-4xl font-semi  ">Project Nest</h1>
      </motion.div>
      <motion.ul ref={scope} className="max-w-[250px] w-full ">
        {Icons.map((it, index) => (
          <Navitem
            name={it.name}
            svg={it.svg}
            key={index}
            ind={index}
            selected={selected}
            setselected={setselected}
          />
        ))}
      </motion.ul>
    </div>
  );
}

const Navitem = ({ name, svg, ind, selected, setselected }) => {
  return (
    <motion.li
      initial={{ opacity: 0, x: -100 }}
      onClick={() => setselected(ind)}
    >
      <Link
        className={`navLi w-full rounded-xl flex justify-start items-center cursor-pointer gap-5 px-6 py-4 group  hover:bg-hoverC ${
          selected === ind ? "bg-hoverC" : "bg-transparent"
        }`}
        href={name === "Overview" ? "/" : name}
      >
        <div>{svg}</div>
        <h2 className="font-pm font-semi text-[1.2rem] text-dullC group-hover:text-black ">
          {name}
        </h2>
      </Link>
    </motion.li>
  );
};

export default SideBar;
