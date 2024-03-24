"use client";
import React, { useState } from "react";
import { addicon } from "@/Consonants";
import AccountDiaog from "./AccountDiaog";
import { AnimatePresence } from "framer-motion";
function EmployeeAdder() {
  const [Adder, setAdder] = useState(false);

  return (
    <div className="w-full flex justify-between items-center">
      <p className="font-pm font-bol text-3xl ">Tasks</p>
      <button
        onClick={() => setAdder(!Adder)}
        id="addEmployee"
        className="flex justify-between items-center btn !w-[8.5rem] px-2 "
      >
        {addicon} Assign Task
      </button>
      <AnimatePresence>
        {Adder && <AccountDiaog setAdder={setAdder} />}
      </AnimatePresence>
    </div>
  );
}

export default EmployeeAdder;
