import { addicon } from "@/Consonants";
import React from "react";

function TaskShower() {
  const tasks = [];
  return (
    <div className="w-full flex justify-start items-start py-5 ">
      {!tasks ||
        (tasks.length === 0 ? (
          <div
            className="bg-Pn-default-500 max-w-[23rem]  flex justify-center
         items-center w-full h-[12rem] rounded-lg gap-3 cursor-pointer hover:bg-Pn-light-400"
            // onClick={(e) => {
            //   e.stopPropagation();
            //   //   document.querySelector("#addEmployee").click();
            // }}
          >
            <div className="scale-[1.3]">{addicon}</div>
            <p className="font-pm font-reg text-[1.3rem] text-white ">
              Assign Task
            </p>
          </div>
        ) : (
          <div className="flex w-full justify-start items-start flex-wrap gap-5 ">
            {/* {Empolyees.map((it) => {
              console.log(it.username);
              return (
                <EmployeeItem
                  username={it.username}
                  description={it.description}
                  profilepic={it.profilepic}
                />
              );
            })} */}
            add
          </div>
        ))}
    </div>
  );
}

export default TaskShower;
