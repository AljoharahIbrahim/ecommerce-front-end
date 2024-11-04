import { string } from "prop-types";
import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

export default function Error({ message }) {
  const error = useRouteError();
  const navigate = useNavigate();
  const onHandleHomePage = () => {
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      <h2> Error!</h2>
      {/* use the below condition for handle error message
         case 1 : error occurs in childs of the component in route => show the error message
         case 2 : there are no error occurs in childs of the component, but we handle errors that occurs in end points response, ex: not found or we catch un available routes page in the system */}
      {error ? <h3>{error.message}</h3> : <h3>{message}</h3>}
      <button onClick={onHandleHomePage}> Go to Home Page</button>
    </>
  );
}

Error.propTypes = {
  message: string,
};
