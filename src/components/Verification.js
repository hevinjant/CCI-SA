import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

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
  return {
    status: 204,
    data: {},
  };
}

function Verification() {
  const [isWaiting, setIsWaiting] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    getResponseWithLatency().then((response) => {
      console.log("Response:", response);
      if (response.status === 200) {
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }
    });
  }, []);

  /* Simulates getting data with latency */
  async function getResponseWithLatency() {
    setIsWaiting(true);

    await timeout(3000); // 3 seconds
    const response = getResponse();

    setIsWaiting(false);

    return response;
  }

  function displayAlert() {
    if (status === 0) {
      return <p>No status to be displayed.</p>;
    } else if (status === 1) {
      return (
        <Alert severity="success">
          You have signed up succesfully! You will be redirected in just a
          moment.
        </Alert>
      );
    } else {
      return (
        <Alert severity="error">
          Failed to sign up. Your information is invalid.
        </Alert>
      );
    }
  }

  function handleClick() {
    if (isSuccess) {
      setStatus(1);
    } else {
      setStatus(-1);
    }
  }

  return (
    <div className="verification">
      <p>Sign up verification.</p>
      {isWaiting && <CircularProgress color="inherit" />}
      <button onClick={handleClick}>Check my status</button>
      {isSuccess ? (
        <p>You will be redirected shortly.</p>
      ) : (
        <p>You have failed to sign up. Please check your information again.</p>
      )}
      {displayAlert()}
    </div>
  );
}

export default Verification;
