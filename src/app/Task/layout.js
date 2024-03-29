import Navbar from "@/Components/Navbar";
import React from "react";

async function layout({ children }) {
  return (
    <div className="w-full flex flex-col justify-start items-start ">
      <Navbar statement="Explore Task" />
      {children}
    </div>
  );
}

export default layout;
