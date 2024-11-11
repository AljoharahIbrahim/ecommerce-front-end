import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";

export default function AdminRoute() {
  console.log("AdminRoute");
  const checkAdmin = JSON.parse(localStorage.getItem("login"));
  console.log("checkAdmin", checkAdmin);
  return (
    <div>
      {" "}
      {/* <h3>AdminRoute</h3> */}
      {checkAdmin != null && checkAdmin.isSignIn && checkAdmin.isAdmin ? (
        <Outlet />
      ) : (
        <Login />
      )}
    </div>
  );
}
