import Navbar from "@/Components/Navbar";
import React from "react";

async function layout({ children }) {
  const data = await fetch("http://localhost:3000/api/test", {
    method: "GET",
  });
  console.log(await data.json());
  return (
    <div className="w-full flex flex-col justify-start items-start ">
      <Navbar statement="Explore Task" />
      {children}
    </div>
  );
}

export default layout;
