import React, { createContext, useEffect, useState } from "react";

import { login } from "../services/userService";
import PropTypes from "prop-types";

export const UserContext = createContext();

export default function UserContextData({ children }) {
  // ctrate data state
  const [checkUserData, setCheckUserData] = useState({
    userEmail: "",
    userPassword: "",
  }); // this use for login form component
  const [userData, setUserData] = useState(null); // this get information from end point
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userToken, setUserToken] = useState(null);

  const [userEmail, setUserEmail] = useState(""); // this for login form component to easy handle and send it to api , we can later composite as object
  const [userPassword, setUserPassword] = useState(""); // this for login form component to easy handle and send it to api , we can later composite as object

  const getUserLoginInformation = async () => {
    console.log("**UserContextData");
    try {
      setIsLoading(true);
      // console.log(" checkUserData.userEmail=", checkUserData.userEmail);
      // console.log("checkUserData.userPassword=",checkUserData.userPassword);

      const response = await login(
        checkUserData.userEmail,
        checkUserData.userPassword
      );
      //   const data = response.data;
      //   const userLoginData = data.items.$values;
      console.log("response**", response.token);
      setUserToken(response.token);
      setUserData(response.token);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserLoginInformation();
  }, [checkUserData]);

  return (
    <>
      <UserContext.Provider
        value={{
          userData,
          setUserData,
          checkUserData,
          setCheckUserData,
          isLoading,
          setIsLoading,
          error,
          setError,
          userEmail,
          setUserEmail,
          userPassword,
          setUserPassword,
          userToken,
        }}
      >
        {children}
      </UserContext.Provider>
      ;
    </>
  );
}

UserContext.propTypes = {
  children: PropTypes.node,
};
