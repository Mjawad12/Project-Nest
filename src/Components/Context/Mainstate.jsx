"use client";
import { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext();

export default function Mainstate({ children }) {
  const url = `http://localhost:3000/api`;
  const [admin, setadmin] = useState(true);
  const [authtoken, setauthtoken] = useState();
  // localStorage.getItem("authtoken")
  const [error, seterror] = useState(null);
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

  useEffect(() => {
    if (window.location.pathname === "/") {
      localStorage.getItem("authtoken") && userData();
    }
  }, [authtoken]);

  return (
    <MyContext.Provider value={{ admin, authtoken, signin, signup, error }}>
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
