import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import "../styles/Fail.css";

function Fail() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div className="fail">
      <p>Failed to sign up. Please try to sign up again.</p>
      <button onClick={handleClick}>Check my status</button>

      {show && (
        <Alert className="alert" variant="filled" severity="error">
          Failed to sign up. The email has already been registered, please sign
          in with your account.
        </Alert>
      )}
    </div>
  );
}

export default Fail;
