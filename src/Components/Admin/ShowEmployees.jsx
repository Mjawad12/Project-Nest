"use client";
import React, { useEffect } from "react";
import { useMyContext } from "../Context/Mainstate";
import { addicon } from "@/Consonants";
import EmployeeItem from "./EmployeeItem";

function ShowEmployees() {
  const { getEmployees, Empolyees } = useMyContext();

  useEffect(() => {
    getEmployees();
    console.log;
  }, []);
  useEffect(() => {
    console.log(Empolyees);
  }, [Empolyees]);

  return (
    <div className="w-full flex justify-start items-start py-5 ">
      {!Empolyees ||
        (Empolyees.length === 0 ? (
          <div
            className="bg-Pn-default-500 max-w-[23rem]  flex justify-center
         items-center w-full h-[12rem] rounded-lg gap-3 cursor-pointer hover:bg-Pn-light-400"
            onClick={(e) => {
              e.stopPropagation();
              document.querySelector("#addEmployee").click();
            }}
          >
            <div className="scale-[1.3]">{addicon}</div>
            <p className="font-pm font-reg text-[1.3rem] text-white ">
              Add Employee
            </p>
          </div>
        ) : (
          <div className="flex w-full justify-start items-start flex-wrap">
            {Empolyees.map((it) => {
              console.log(it.username);
              return (
                <EmployeeItem
                  username={it.username}
                  description={it.description}
                  profilepic={it.profilepic}
                />
              );
            })}
          </div>
        ))}
    </div>
  );
}

export default ShowEmployees;
