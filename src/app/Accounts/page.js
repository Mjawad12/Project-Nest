import React from "react";
import EmployeeAdder from "@/Components/EmployeeAdder";
function page() {
  return (
    <div className="flex flex-col justify-start items-start px-9 w-full">
      <EmployeeAdder />
    </div>
  );
}

export default page;
