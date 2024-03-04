import { addicon, profileIcon } from "@/Consonants";
import Image from "next/image";
import React from "react";

function EmployeeItem({ username, profilepic, description }) {
  return (
    <div
      className="max-w-[35rem] w-full flex py-2 px-3 
     rounded-lg gap-3 border border-[#f0f0f0] bg-white "
    >
      <div className="flex justify-center items-center">
        <div
          className="rounded-full p-1"
          style={{ boxShadow: "1px 1px 10px -3px black" }}
        >
          <Image
            src={profilepic}
            className="w-[150px] rounded-full "
            width="5000"
            height="5000"
            alt="employee"
          ></Image>
        </div>
      </div>
      <div
        className="flex flex-col  w-full 
      justify-start items-start gap-3 px-3 border-l border-[#f0f0f0]  "
      >
        <p className="font-pm font-bol text-[1.2rem] w-full border-b py-2 border-[#f0f0f0] ">
          {username}
        </p>
        <div>
          <p className="font-pm font-med text-[0.9rem] text-gray-500 ">
            {description}
          </p>
          <div className="flex justify-start items-start gap-4 mt-5  ">
            <button className="btn !w-[7rem] !py-1 flex justify-center items-center gap-1">
              <span className="scale-[0.8]">{addicon}</span>
              Add Task
            </button>
            <button className="btn !w-[8.5rem] !py-[0.35rem] flex justify-center items-center gap-1">
              <span className="scale-[0.8]">{profileIcon}</span>
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeItem;
