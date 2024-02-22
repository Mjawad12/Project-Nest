import Navbar from "@/Components/Navbar";
import React from "react";

function layout({ children }) {
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <Navbar statement={"Settings"} />
      {children}
    </div>
  );
}

export default layout;
