import React from "react";
import { clock } from "@/Consonants";
function Task({ img, title, type, days, date }) {
  return (
    <div className="flex flex-col justify-start items-start rounded-lg overflow-hidden  ">
      <Image src={img} width="200" height="200" alt="Task Thumbnail" />
      <div className="flex flex-col justify-start items-start  py-5 px-3">
        <p>{title}</p>
        <p>{type}</p>

        <div className="flex justify-start items-center gap-3">
          {clock}
          <p>{5} days left</p>
        </div>
      </div>
    </div>
  );
}

export default Task;
