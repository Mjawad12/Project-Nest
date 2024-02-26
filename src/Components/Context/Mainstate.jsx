"use client";
import { createContext, useContext, useState } from "react";

export const MyContext = createContext();

export default function Mainstate({ children }) {
  const [admin, setadmin] = useState(localStorage.getItem("type") === "admin");
  const [authtoken, setauthtoken] = useState(localStorage.getItem("authtoken"));

  return (
    <MyContext.Provider value={{ admin, authtoken }}>
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
