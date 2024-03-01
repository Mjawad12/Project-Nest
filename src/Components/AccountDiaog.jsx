import { cross } from "@/Consonants";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
function AccountDiaog({ setAdder }) {
  const form = useRef(null);
  const email = useRef(null);
  const FileRef = useRef(null);

  const createUser = (e) => {
    if (form.current.checkValidity()) {
      e.preventDefault();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#ffffffcb] flex justify-center items-center"
    >
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{}}
        style={{
          boxShadow: "1px 1px 20px #00000085",
        }}
        className="max-w-[700px] w-full  bg-white flex 
        flex-col justify-start items-start h-[95vh]
         rounded-xl py-5 overflow-hidden"
      >
        <div className="w-full flex justify-between items-center  px-5">
          <p className="font-pm font-bol text-[1.4rem]  ">Add Employee</p>
          <div onClick={() => setAdder(false)}>{cross}</div>
        </div>
        <form
          ref={form}
          action="null"
          className="flex flex-col justify-start
           items-start py-5 gap-5 w-full  px-5 overflow-y-scroll "
        >
          <div>
            <label htmlFor="name">Employee Name</label>
            <input
              required
              minLength={7}
              type="text"
              id="name"
              className="forIn"
              placeholder="Enter Employee Name"
            />
          </div>
          <div>
            <label htmlFor="email">Employee Email</label>
            <input
              required
              minLength={20}
              ref={email}
              type="email"
              id="email"
              className="forIn"
              placeholder="Enter Employee Email"
            />
          </div>
          <div>
            <label htmlFor="password">Employee Password</label>
            <input
              required
              minLength={5}
              type="text"
              id="password"
              className="forIn"
              placeholder="Enter Employee Password"
            />
          </div>
          <div>
            <label for="file-upload" class="custom-file-upload">
              Employee Profile
            </label>
            <input required ref={FileRef} className="forIn" type="file" />
          </div>
          <div>
            <label htmlFor="des">Description(optional)</label>
            <textarea
              id="des"
              cols="30"
              rows="4"
              maxLength={"150"}
              placeholder="Add description about employee"
              className="bg-[#e3e3e3] outline-none p-2 rounded-md border-black focus:border focus:bg-white"
            ></textarea>
          </div>
          <div className="w-full flex justify-end items-end">
            <button onClick={createUser} className="btn !max-w-[7rem]">
              Create
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default AccountDiaog;
