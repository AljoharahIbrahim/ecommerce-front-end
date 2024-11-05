import React, { useContext, useEffect } from "react";

import Styles from "../styles/Login.module.css";
import { UserContext } from "../context/UserContextData";
import Error from "../pages/Error";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";



export default function LoginForm() {
const navigate = useNavigate();

  const {
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    userData,
    setCheckUserData,
    isLoading,
    error,
    userToken,
  } = useContext(UserContext);

  //1. create handel form submit
  const handelOnSubmit = (event) => {
    event.preventDefault();
    //2. update  CheckUserData context that dependnce to call apiend point for /user/login
    setCheckUserData({
      userEmail: userEmail,
      userPassword: userPassword,
    });
    if (isLoading) {
      return <p>user information are loading...</p>;
    }

    if (error) {
      return <>{<Error message={error.message} />}</>;
    }
  };

  // 3. use useeffect to accses usertoken after updates
  useEffect(() => {
      if (userData) {
        //4. in case return tokens => set in local storage
        console.log("userData=** ", userData);
        localStorage.setItem(
          "login",
          JSON.stringify({ userToken: userData, isSignIn: true })
        );
        console.log("success");
        const token = userData;
        const decoded = jwtDecode(token);
        console.log(decoded);
        //5. call getUserByID => go to profile user " navigatee and send user data in state"
      }
  }, [userToken, userData]);

  return (
    <div>
      <div className={Styles["login-container"]}>
        <form className={Styles["login-form"]} onSubmit={handelOnSubmit}>
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={userEmail}
            onChange={() => setUserEmail(event.target.value)}
          />
          <label htmlFor="password">password</label>
          <input
            type="text"
            id="password"
            name="password"
            required
            value={userPassword}
            onChange={() => setUserPassword(event.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
