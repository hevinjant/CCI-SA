import React, { useState } from "react";
import Result from "./Result";
import CircularProgress from "@mui/material/CircularProgress";
import "../styles/Verification.css";

/* Simulates latency/delay */
function timeout(delay) {
  return new Promise((result) => setTimeout(result, delay));
}

/* Simulates getting data from an API call */
function getResponse() {
  const ran = Math.floor(Math.random() * 2);
  if (ran === 1) {
    return {
      status: 200,
      data: {
        user: "Username",
        userConfirmed: true,
        userSub: "a123",
      },
    };
  }
  //throw "Verification error: user failed to sign up.";
  throw {
    status: 204,
    data: {},
  };
}

function Verification() {
  const [isWaiting, setIsWaiting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [show, setShow] = useState(false);

  /* Simulates getting data with latency */
  async function getResponseWithLatency() {
    setIsWaiting(true);

    await timeout(3000); // 3 seconds
    try {
      const response = getResponse();
      setIsWaiting(false);
      return response;
    } catch (error) {
      setIsWaiting(false);
      return error;
    }
  }

  const handleClickSignup = () => {
    setShow(false);
    getResponseWithLatency().then((response) => {
      response.status === 200 ? setIsSuccess(true) : setIsSuccess(false);
      setShow(true);
    });
  };

  return (
    <div className="verification">
      <p className="title">Sign up verification.</p>
      <button className="signup-button" onClick={handleClickSignup}>
        Sign Up
      </button>
      {isWaiting && <CircularProgress className="progress" color="inherit" />}
      {show && <Result isSuccess={isSuccess} />}
    </div>
  );
}

export default Verification;
