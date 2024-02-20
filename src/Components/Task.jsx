import React from "react";
import { clock } from "@/Consonants";

function Task({ img, title, type, days, date }) {
  return (
    <div className="rounded-lg overflow-hidden max-w-[25rem] w-full bg-white ">
      <div className="flex flex-col justify-start items-start  p-5 w-full gap-5 ">
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full h-[10rem] rounded-lg"
        />
        <div>
          <p className="font-pm font-bol text-1xl">{title}</p>
          <p className="font-pm font-med text-[0.9rem] text-gray-500 ">
            {type}
          </p>
        </div>

        <div className="flex justify-start items-center gap-2">
          {clock}
          <p>{5} days left</p>
        </div>
      </div>
    </div>
  );
}

export default Task;
