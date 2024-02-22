"use client";
import React, { useRef, useState } from "react";
// import { imageDb } from "../Firebase/ConfigFirebase";
// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import { v4 } from "uuid";
// import Loading from "../Loading";
import Save from "./Save";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Setting(props) {
  const [saveImg, setsaveImg] = useState(false);
  const [changeDetails, setchangeDetails] = useState(false);
  const [newImg, setnewImg] = useState("");
  const imgRef = useRef("");

  const changeImg = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    imgRef.current.src = url;
    imgRef.current.srcset = url;
    setnewImg(e.target.files[0]);
    e.target.value = null;
  };

  const uploadImg = async () => {
    setloading(true);
    const imageRef = ref(imageDb, `files/${newImg.name}-${v4()}`);
    await uploadBytes(imageRef, newImg).then(async () => {
      await getDownloadURL(imageRef).then((res) => {
        props.changeProfileImg(res);
        setsaveImg(false);
      });
    });
    setloading(false);
  };

  return (
    <div className="px-7 w-full py-6 rounded-l bg-white flex flex-col justify-start items-start gap-7">
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col justify-start items-start gap-3 w-full gap-5"
      >
        <div>
          <p className="font-pm font-bol text-2xl self-start leading-6 ">
            Username
          </p>
          <p className="font-pm font-bol text-[0.9rem] self-start text-gray-400">
            Change username that you will use to login
          </p>
        </div>
        <input
          type="password"
          placeholder={props.name}
          className="max-w-[25rem] w-full h-[3rem] text-[1.1rem] 
              rounded-lg px-2 outline-none border border-gray-400 "
        />
      </motion.div>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col justify-start items-start w-full gap-5"
      >
        <div>
          <p className="font-pm font-bol text-2xl self-start leading-6 ">
            Password
          </p>
          <p className="font-pm font-bol text-[0.9rem] self-start text-gray-400">
            Change Password that you will use to login
          </p>
        </div>
        <input
          type="password"
          placeholder={"Enter your password"}
          className="max-w-[25rem] w-full h-[3rem] text-[1.1rem] 
              rounded-lg px-2 outline-none border border-gray-400 "
        />
      </motion.div>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ delay: 1 }}
        className="flex justify-start items-center gap-5 w-full"
      >
        <Image
          width={120}
          height={150}
          ref={imgRef}
          src={props.profileImg}
          alt="profile Img"
          className="rounded-xl h-[8rem] w-[8rem]  "
        />
        <div className="flex flex-col p-2 justify-between gap-3 w-full">
          <div>
            <p className="font-pm font-bol text-2xl leading-6 ">
              Profile Picture
            </p>
            <p className="font-pm font-bol text-[0.9rem] text-gray-400">
              This setting will change your profile image
            </p>
          </div>
          <input type="file" onInput={changeImg} className="hidden" />
          <button
            onClick={(e) => e.target.previousElementSibling.click()}
            className="w-[9rem] h-[2rem] rounded-lg font-pm font-med text-[1rem] text-white bg-Pn-default-500"
          >
            Upload New
          </button>
        </div>
      </motion.div>
      <div className="w-full flex items-end justify-end">
        <button className="w-[10rem] h-[3rem] rounded-lg font-pm font-med text-[1rem] text-white bg-Pn-default-500 ">
          Save
        </button>
      </div>
    </div>
  );
}
