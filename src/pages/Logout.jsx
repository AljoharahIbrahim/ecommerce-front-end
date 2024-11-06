import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  // delete localstorage

  const navigate = useNavigate();

  localStorage.removeItem("login");
  // window.location.reload();
  navigate("/");

  return <div></div>;
}
