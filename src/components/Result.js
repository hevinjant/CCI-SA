import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import "../styles/Result.css";

function Result({ isSuccess }) {
  const [show, setShow] = useState(false);

  const handleClickCheckStatus = () => {
    setShow((prevShow) => !prevShow);
  };

  function displayResult(isSuccess) {
    if (isSuccess) {
      return (
        <div className="result">
          <p>
            You have signed up successfuly! You will be redirected to our page.
          </p>

          {show && (
            <Alert className="alert" variant="filled" severity="success">
              You have signed up succesfully! You now have full access to our
              challenge site.
            </Alert>
          )}
        </div>
      );
    } else {
      return (
        <div className="result">
          <p>Failed to sign up. Please try to sign up again.</p>

          {show && (
            <Alert className="alert" variant="filled" severity="error">
              Failed to sign up. The email has already been registered, please
              sign in with your account.
            </Alert>
          )}
        </div>
      );
    }
  }

  return (
    <div className="result-container">
      {displayResult(isSuccess)}
      <button onClick={handleClickCheckStatus}>Check my status</button>
    </div>
  );
}

export default Result;
