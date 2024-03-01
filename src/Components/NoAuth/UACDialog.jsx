"use client";
import React, { useEffect, useState } from "react";
import { useMyContext } from "../Context/Mainstate";
// import Context from "./Mainstate/Context";
// import { useGoogleLogin } from "@react-oauth/google";
// import emailjs from "@emailjs/browser";
export default function UACDialog(props) {
  // const context = useContext(Context);
  // const { signup, error, Otp, signin, verifyOtp, seterror } = context;

  const { signin, error, signup } = useMyContext();
  const [loading, setloading] = useState(false);
  const [Auth, setAuth] = useState("Sign up");
  const [email, setemail] = useState(false);
  const [OtpPage, setOtpPage] = useState(false);
  const [emailValue, setemailValue] = useState("");
  const [passwordValue, setpasswordValue] = useState("");
  const [nameValue, setnameValue] = useState("");
  const [otpValue, setotpValue] = useState("");
  const [error1, seterror1] = useState("");
  const [error2, seterror2] = useState("");
  const [error3, seterror3] = useState("");
  const [error4, seterror4] = useState("");
  const [gError, setgError] = useState("");

  const siginFunc = () => {
    Auth === "Sign up" ? setAuth("Sign in") : setAuth("Sign up");
    setgError("");
    setgError("");
  };
  const handleEmail = () => {
    setemail(!email);
    setemailValue("");
    setpasswordValue("");
    setnameValue("");
  };
  const crossFunc = () => {
    props.func();
    setAuth("Sign up");
    setemail(false);
    seterror("");
    setOtpPage(false);
  };
  const setValue = (e) => {
    if (e.target.className.includes("email")) {
      setemailValue(e.target.value);
      seterror1("");
    }
    if (e.target.className.includes("name")) {
      setnameValue(e.target.value);
      seterror2("");
    }
    if (e.target.className.includes("password")) {
      setpasswordValue(e.target.value);
      seterror3("");
    }
    if (e.target.className.includes("Otp")) {
      setotpValue(e.target.value);
      seterror4("");
    }
  };

  const handleSign = async () => {
    setloading(true);
    if (emailValue === "") {
      seterror1("Enter valid email");
    }
    if (nameValue === "") {
      seterror2("Enter valid name");
    }
    if (passwordValue === "") {
      seterror3("Enter valid password");
    }

    if (Auth === "Sign in") {
      if (emailValue !== "" && passwordValue !== "") {
        await signin(emailValue, passwordValue);
      }
    } else if (Auth === "Sign up") {
      if (emailValue !== "" && passwordValue !== "" && nameValue !== "") {
        await signup(nameValue, emailValue, passwordValue);
      }
    }
    setloading(false);
  };

  const Otpverify = () => {
    if (Otp === otpValue) {
      verifyOtp(emailValue);
    } else {
      seterror4("Wrong otp");
    }
  };
  // const login = useGoogleLogin({
  //   onSuccess: async (codeResponse) => {
  //     try {
  //       const data = await fetch(
  //         "https://www.googleapis.com/oauth2/v3/userinfo",
  //         {
  //           method: "Get",
  //           headers: {
  //             Authorization: `Bearer ${codeResponse.access_token}`,
  //           },
  //         }
  //       );
  //       const parsedData = await data.json();
  //       if (Auth === "Sign up") {
  //         signup(
  //           parsedData.email,
  //           parsedData.name,
  //           process.env.REACT_APP_PASSWORD,
  //           true,
  //           parsedData.picture
  //         );
  //       } else {
  //         signin(parsedData.email, process.env.REACT_APP_PASSWORD);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  // });
  // useEffect(() => {
  //   if (Otp) {
  //     setOtpPage(true);
  //     const templateParams = {
  //       to_name: emailValue.current.value,
  //       user_email: emailValue.current.value,
  //       message: `Your otp code is ${Otp}`,
  //       from_name: "Post Hive",
  //     };
  //     emailjs
  //       .send(
  //         "service_op5mypk",
  //         "template_pslst65",
  //         templateParams,
  //         "fsNlf011wAWaX2zIF"
  //       )
  //       .then(() => {})
  //       .catch((error) => {});
  //   } // eslint-disable-next-line
  // }, [Otp]);

  useEffect(() => {
    if (error) {
      if (Array.isArray(error)) {
        error.forEach((it) => {
          ErrorCheck(it);
        });
      } else {
        ErrorCheck(error);
      }
    }

    // eslint-disable-next-line
  }, [error]);

  const ErrorCheck = (error) => {
    if (error.key === "email") {
      seterror1(error.message);
    } else if (error.key === "name") {
      seterror2(error.message);
    } else if (error.key === "password") {
      seterror3(error.message);
    } else if (error.key === "otp") {
      seterror4(error.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#fffffff2] p-5 ">
      <div
        style={{
          boxShadow: "1px 1px 20px #00000085",
          gap: email ? "3rem" : "6.5rem",
        }}
        className="max-w-[670px] w-full  min-h-[92vh] flex
      flex-col justify-center gap-[6.5rem] items-center p-3
       relative rounded-xl bg-white"
      >
        <svg
          onClick={crossFunc}
          className="absolute top-3 right-4 "
          width="29"
          height="29"
          fill="#6b6b6b"
        >
          <path
            d="M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"
            fillRule="evenodd"
          ></path>
        </svg>
        {!email ? (
          <>
            <h1 className="font-pm font-med text-3xl">Join Project Nest.</h1>
            <div className="w-full flex flex-col justify-between items-center gap-11 ">
              <div className="flex flex-col gap-2 justify-center items-center  w-full">
                <div
                  //  onClick={login}
                  className="signbtn"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="ah"
                  >
                    <g fillRule="evenodd" clipRule="evenodd">
                      <path
                        d="M20.64 12.2c0-.63-.06-1.25-.16-1.84H12v3.49h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.61z"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="M12 21a8.6 8.6 0 0 0 5.96-2.18l-2.91-2.26a5.41 5.41 0 0 1-8.09-2.85h-3v2.33A9 9 0 0 0 12 21z"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M6.96 13.71a5.41 5.41 0 0 1 0-3.42V7.96h-3a9 9 0 0 0 0 8.08l3-2.33z"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M12 6.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 0 0 3.96 7.96l3 2.33A5.36 5.36 0 0 1 12 6.6z"
                        fill="#EA4335"
                      ></path>
                    </g>
                  </svg>
                  <p className="w-full text-center  font-pm font-med">
                    {Auth} with Google
                  </p>
                </div>
                <p className="error">{gError}</p>
                <div className="signbtn" onClick={handleEmail}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="ah"
                  >
                    <g stroke="#242424">
                      <rect
                        x="3.5"
                        y="5.5"
                        width="17"
                        height="13"
                        rx="1"
                      ></rect>
                      <path d="M3.5 8l8.5 6 8.5-6" strokeLinecap="round"></path>
                    </g>
                  </svg>
                  <p className="w-full text-center font-pm font-med">
                    {Auth} with Email
                  </p>
                </div>
              </div>
              {Auth === "Sign up" ? (
                <p className="font-pm font-bol cursor-pointer [&>span]:text-green-700 text-[0.9rem] ">
                  Already have an account?{" "}
                  <span onClick={siginFunc}>Sign in</span>
                </p>
              ) : (
                <p className="font-pm font-bol cursor-pointer [&>span]:text-green-700 text-[0.9rem] ">
                  No Account? <span onClick={siginFunc}>Create one</span>
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <h1 className="font-pm font-med text-3xl">{Auth} with Email</h1>

            <div className="flex flex-col justify-between items-center max-w-[25rem] w-full  gap-9 ">
              {OtpPage ? (
                <>
                  <div className="flex flex-col justify-center items-center w-full">
                    <span>Enter otp sent to the provided email</span>
                    <input
                      onChange={setValue}
                      className="Otp border-2 border-black border-t-0 border-x-0  outline-none "
                      type="number"
                    ></input>
                    <p className="error">{error4}</p>
                  </div>
                  <button
                    disabled={loading}
                    className="f-btn btn-2"
                    onClick={Otpverify}
                  >
                    Continue
                  </button>
                </>
              ) : (
                <>
                  {Auth === "Sign up" && (
                    <div className="flex flex-col justify-center items-center w-full ">
                      <span className="font-pm font-reg text-[0.9rem]">
                        Your Name
                      </span>
                      <input
                        onChange={setValue}
                        className="name text-center w-full  border-2 border-black border-t-0 border-x-0  outline-none "
                        type="text"
                      ></input>
                      <p className="error">{error2}</p>
                    </div>
                  )}
                  <div className="flex flex-col justify-center items-center w-full ">
                    <span className="font-pm font-reg text-[0.9rem]">
                      Your Email
                    </span>
                    <input
                      onChange={setValue}
                      className="email text-center w-full  border-2 border-black border-t-0 border-x-0  outline-none "
                      type="email"
                    ></input>
                    <p className="error">{error1}</p>
                  </div>
                  <div className="flex flex-col justify-center items-center w-full ">
                    <span className="font-pm font-reg text-[0.9rem]">
                      Your Password
                    </span>
                    <input
                      onChange={setValue}
                      className="password text-center w-full  border-2 border-black border-t-0 border-x-0  outline-none "
                      type="password"
                    ></input>
                    <p className="error">{error3}</p>
                  </div>
                  <button
                    disabled={loading}
                    className="btn"
                    onClick={handleSign}
                  >
                    Continue
                  </button>
                </>
              )}
            </div>
            <p
              className="otheropts font-pm font-bold text-[0.9rem] text-green-700 cursor-pointer"
              onClick={() => {
                setOtpPage(false);
                handleEmail();
              }}
            >
              &lt; All {Auth.toLowerCase()} options
            </p>
          </>
        )}

        <div className="max-w-[40ch] w-full">
          <p className="font-pm font-reg text-[0.7rem] text-center">
            Click “Sign up” to agree to Medium’s Terms of Service and
            acknowledge that Medium’s Privacy Policy applies to you.
          </p>
        </div>
      </div>
    </div>
  );
}
