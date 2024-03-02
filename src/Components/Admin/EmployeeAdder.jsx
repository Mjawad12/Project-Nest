"use client";
import React, { useState } from "react";
import { addicon } from "@/Consonants";
import AccountDiaog from "./AccountDiaog";
import { AnimatePresence } from "framer-motion";
function EmployeeAdder() {
  const [Adder, setAdder] = useState(false);

  return (
    <div className="w-full flex justify-between items-center">
      <p className="font-pm font-bol text-3xl ">Employees</p>
      <button
        onClick={() => setAdder(!Adder)}
        id="addEmployee"
        className="flex justify-between items-center 
    bg-Pn-default-500 text-white font-pm font-bol px-3 pr-4
     py-2 rounded-lg gap-3 "
      >
        {addicon} Add Employee
      </button>
      <AnimatePresence>
        {Adder && <AccountDiaog setAdder={setAdder} />}
      </AnimatePresence>
    </div>
  );
}

export default EmployeeAdder;
