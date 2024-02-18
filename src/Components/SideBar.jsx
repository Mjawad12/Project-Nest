"use client";
import Image from "next/image";
import React from "react";
import { Icons } from "../Consonants";
import Link from "next/link";

function SideBar() {
  return (
    <div className="bg-white py-[2rem] px-[0.5rem]  max-w-[300px] w-full min-h-screen flex flex-col justify-start items-center gap-20 ">
      <div className="flex justify-center items-center gap-4">
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
      </div>
      <ul className="max-w-[250px] w-full ">
        {Icons.map((it) => (
          <Navitem name={it.name} svg={it.svg} />
        ))}
      </ul>
    </div>
  );
}

const Navitem = ({ name, svg }) => {
  return (
    <li>
      <Link
        className=" navLi w-full rounded-xl flex justify-start items-center cursor-pointer gap-5 px-6 py-4 group  hover:bg-hoverC"
        href={name === "Overview" ? "/" : name}
      >
        <div>{svg}</div>
        <h2 className="font-pm font-semi text-[1.2rem] text-dullC group-hover:text-black ">
          {name}
        </h2>
      </Link>
    </li>
  );
};

export default SideBar;
