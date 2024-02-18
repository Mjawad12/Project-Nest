import React from "react";
import RuningTasks from "./RuningTasks";
import TaskGraph from "./TaskGraph";
import TaskCollection from "./TaskCollection";

function Overview() {
  return (
    <div className="flex flex-col justify-start items-center  px-9 py-3 w-full gap-9">
      <div className="flex justify-between items-center w-full ">
        <RuningTasks tasks={200} compeletedTasks={25} />
        <TaskGraph />
      </div>
      <TaskCollection />
    </div>
  );
}

export default Overview;
