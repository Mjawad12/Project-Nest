"use client";
import { Cloudinary } from "@cloudinary/url-gen";
import { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext();

export default function Mainstate({ children }) {
  const url = `http://localhost:3000/api`;
  const [admin, setadmin] = useState(true);
  const [authtoken, setauthtoken] = useState();
  // localStorage.getItem("authtoken")
  const [error, seterror] = useState(null);
  const [Empolyees, setEmpolyees] = useState([]);
  const [user, setuser] = useState();

  const signup = async (name, email, password) => {
    const data = await fetch(`${url}/signup`, {
      method: "POST",
      body: JSON.stringify({
        name,
        password,
        email,
        admin: true,
      }),
    });
    const parsedData = await data.json();
    if (parsedData.error) {
      seterror(parsedData.error);
    } else if (parsedData.authtoken) {
      setauthtoken(parsedData.authtoken);
      localStorage.setItem("authtoken", parsedData.authtoken);
    }
  };

  const signin = async (email, password) => {
    const data = await fetch(`${url}/signin`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const parsedData = await data.json();
    if (parsedData.error) {
      seterror(parsedData.error);
    } else if (parsedData.authtoken) {
      setauthtoken(parsedData.authtoken);
      localStorage.setItem("authtoken", parsedData.authtoken);
    }
  };

  const userData = async () => {
    const data = await fetch(`${url}/userdata`, {
      method: "POST",
      headers: { authtoken: localStorage.getItem("authtoken") },
    });
    const parsedData = await data.json();
    if (parsedData.user) {
      setuser(parsedData.user);
      setadmin(+parsedData.user.admin === 1);
    }
  };

  const getEmployees = async () => {
    const data = await fetch(`${url}/getEmpolyees`, {
      method: "GET",
      headers: { authtoken: localStorage.getItem("authtoken") },
    });
    const parsedData = await data.json();
    if (!parsedData.error) {
      setEmpolyees(parsedData.employees);
    }
  };
  const createEmployee = async (
    name,
    password,
    email,
    profilepic,
    description
  ) => {
    const newEmployee = {
      name,
      password,
      email,
      profilepic: profilepic
        ? profilepic
        : "https://i.stack.imgur.com/34AD2.jpg",
      description: description
        ? description
        : `Passionate about efficiency, ${name} brings dedication and a positive attitude to every task. With a keen eye for detail, ${name} excels in delivering high-quality results.`,
    };

    const data = await fetch(`${url}/createEpmloyee`, {
      method: "POST",
      headers: { authtoken: localStorage.getItem(authtoken) },
      body: JSON.stringify(newEmployee),
    });
    const parsedata = await data.json();
    setEmpolyees(Empolyees.unshift(newEmployee));
  };

  const imageUpload = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
    formData.append("cloud_name", process.env.NEXT_PUBLIC_CLOUD_NAME);
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const parsedRes = await res.json();
    return parsedRes.url;
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      localStorage.getItem("authtoken") && userData();
    }
  }, [authtoken]);

  return (
    <MyContext.Provider
      value={{
        admin,
        authtoken,
        signin,
        signup,
        error,
        getEmployees,
        Empolyees,
        createEmployee,
        imageUpload,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
