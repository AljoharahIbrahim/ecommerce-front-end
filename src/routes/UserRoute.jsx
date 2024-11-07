import React from 'react'
import { Outlet } from 'react-router-dom';
import Login from '../pages/Login';

export default function UserRoute() {
      const checkUser = JSON.parse(localStorage.getItem("login"));
      console.log("checkUser", checkUser);
      return (
        <div>
          {checkUser != null && checkUser.isSignIn ? <Outlet /> : <Login />}
        </div>
      );

}
