import React from "react";
import { notification } from "../Consonants";
import Image from "next/image";
function Navbar({ name, img }) {
  return (
    <div className="w-full  flex justify-between items-center px-9 py-8 ">
      <div className="flex justify-center items-start flex-col">
        <p className="font-pm text-3xl leading-[3rem] font-med  ">
          Hi, Muhammad Jawad {""}
        </p>
        <p className="font-px text-1xl">Lets Finish your task today!</p>
      </div>
      <div className="flex justify-center items-center gap-9">
        {notification}
        <div className="flex justify-center items-center rounded-full overflow-hidden cursor-pointer">
          <Image
            className="w-[3.2rem] h-[3.2rem]"
            width="50"
            height="50"
            src={img ? img : `/user.png`}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
