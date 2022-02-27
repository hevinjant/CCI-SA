import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import "../styles/Success.css";

function Success() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div className="success">
      <p>You have signed up successfuly! You will be redirected to our page.</p>
      <button onClick={handleClick}>Check my status</button>
      {show && (
        <Alert className="alert" variant="filled" severity="success">
          You have signed up succesfully! You now have full access to our
          challenge site.
        </Alert>
      )}
    </div>
  );
}

export default Success;
