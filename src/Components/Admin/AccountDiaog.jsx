import { cross, eye } from "@/Consonants";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMyContext } from "../Context/Mainstate";
function AccountDiaog({ setAdder }) {
  const { createEmployee, imageUpload, error } = useMyContext();
  const [loading, setloading] = useState(false);
  const [image, setimage] = useState(null);
  const form = useRef(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const description = useRef(null);
  const FileRef = useRef(null);
  const [emailError, setemailError] = useState(null);

  const imageState = (e) => {
    if (e.target.files[0]) {
      setimage(e.target.files[0]);
    }
  };
  useEffect(() => {
    if (
      error ===
      "Duplicate entry 'MuhammadJawad@gmail.com' for key 'users.email'"
    ) {
      setemailError("User already exsists with this email.");
    }
  }, [error]);

  const createUser = async (e) => {
    if (form.current.checkValidity()) {
      setloading(true);
      e.preventDefault();
      const url = await imageUpload(image);
      const result =
        url &&
        (await createEmployee(
          name.current.value,
          password.current.value,
          email.current.value,
          url,
          description.current.value
        ));
      result && setAdder(false);
      setloading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#ffffffcb] flex justify-center items-center z-10"
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
              ref={name}
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
              onChange={() => setemailError("")}
              type="email"
              id="email"
              className="forIn"
              placeholder="Enter Employee Email"
            />
            <p className="error">{emailError}</p>
          </div>
          <div>
            <label htmlFor="password">Employee Password</label>
            <div className="flex items-center justify-center forIn !p-0 !pr-[0.5rem] ">
              <input
                ref={password}
                required
                minLength={5}
                type="password"
                id="password"
                onFocus={(e) => {
                  e.target.parentElement.style.border = "1px solid black";
                  e.target.parentElement.style.backgroundColor = "white";
                }}
                onBlur={(e) => {
                  e.target.parentElement.style.border = "0px";
                  e.target.parentElement.style.backgroundColor = "#e3e3e3";
                }}
                className="forIn focus:!border-none !h-[2.4rem]"
                placeholder="Enter Employee Password"
              />
              <div
                onMouseDown={() => (password.current.type = "text")}
                onMouseUp={() => {
                  password.current.type = "password";
                }}
              >
                {eye}
              </div>
            </div>
          </div>
          <div>
            <label for="file-upload" class="custom-file-upload">
              Employee Profile
            </label>
            <input
              required
              ref={FileRef}
              onChange={imageState}
              className="forIn"
              type="file"
            />
          </div>
          <div>
            <label htmlFor="des">Description(optional)</label>
            <textarea
              ref={description}
              id="des"
              cols="30"
              rows="4"
              maxLength={"150"}
              placeholder="Add description about employee"
              className="bg-[#e3e3e3] outline-none p-2 rounded-md border-black focus:border focus:bg-white"
            ></textarea>
          </div>
          <div className="w-full flex justify-end items-end">
            <button
              onClick={createUser}
              disabled={loading}
              className="btn !max-w-[7rem]"
            >
              Create
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default AccountDiaog;
