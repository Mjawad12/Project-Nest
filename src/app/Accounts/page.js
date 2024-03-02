import React from "react";
import EmployeeAdder from "@/Components/Admin/EmployeeAdder";
import ShowEmployees from "@/Components/Admin/ShowEmployees";
function page() {
  return (
    <div className="flex flex-col justify-start items-start px-9 w-full">
      <EmployeeAdder />
      <ShowEmployees />
    </div>
  );
}

export default page;
