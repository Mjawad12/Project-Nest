import React from "react";
import TaskAdder from "@/Components/Admin/TaskAdder";
import TaskShower from "@/Components/Admin/TaskShower";

function page() {
  return (
    <div className="flex flex-col justify-start items-start w-full px-9">
      <TaskAdder />
      <TaskShower />
    </div>
  );
}

export default page;
