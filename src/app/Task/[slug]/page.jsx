"use client";
import { tasks } from "@/Consonants";
import React, { useRef } from "react";

function page({ params, searchParams }) {
  const proof = [{}];
  const input = useRef();
  const selectedTask = tasks.find((it) => params.slug === it.slug);

  return (
    selectedTask && (
      <div className="px-9 py-5 w-full ">
        <div className="w-full flex flex-col justify-start items-start rounded-lg bg-white p-5 gap-10">
          <p className="font-pm font-bol text-5xl ">{selectedTask.title}</p>
          <div className="flex flex-col gap-2 ">
            <p className="font-pm font-bol text-2xl ">Description :</p>
            <p className="font-pm font-med text-[1.2rem] text-gray-700 ">
              {selectedTask.description}
            </p>
          </div>
          <input ref={input} type="file" className="hidden" />
          <div className="w-full flex justify-between items-center">
            <p className="font-pm font-bol text-2xl ">Compeletion Proof:</p>
            <div
              onClick={() => {
                input.current.click();
              }}
              className="hover:scale-[1.05] transition-all flex justify-center items-center h-[3rem] cursor-pointer w-[3rem] rounded-full bg-Pn-default-500 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="30"
                height="30"
                viewBox="0 0 122.875 122.648"
                fill="white"
              >
                <g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M108.993,47.079c7.683-0.059,13.898,6.12,13.882,13.805 c-0.018,7.683-6.26,13.959-13.942,14.019L75.24,75.138l-0.235,33.73c-0.063,7.619-6.338,13.789-14.014,13.78 c-7.678-0.01-13.848-6.197-13.785-13.818l0.233-33.497l-33.558,0.235C6.2,75.628-0.016,69.448,0,61.764 c0.018-7.683,6.261-13.959,13.943-14.018l33.692-0.236l0.236-33.73C47.935,6.161,54.209-0.009,61.885,0 c7.678,0.009,13.848,6.197,13.784,13.818l-0.233,33.497L108.993,47.079L108.993,47.079z"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="w-full flex justify-start items-start gap-2">
            {proof.map((it) => {
              return (
                <div className="max-w-[20rem] h-[10rem] w-full bg-gray-100 rounded-lg "></div>
              );
            })}
          </div>

          <div className="w-full flex items-end justify-end">
            <button
              className="w-[10rem] h-[3rem] rounded-lg font-pm font-med text-[1rem] text-white bg-Pn-default-500 disabled:bg-gray-400 disabled:cursor-not-allowed "
              disabled
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default page;
