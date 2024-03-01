import Navbar from "@/Components/Navbar";
import React from "react";

function layout({ children }) {
  return (
    <div className="w-full min-h-screen ">
      <Navbar statement={"Check your employees"} />
      {children}
    </div>
  );
}

export default layout;
