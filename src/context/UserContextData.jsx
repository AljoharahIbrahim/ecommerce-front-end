import React, { createContext, useEffect, useState } from "react";

import { getUserById, login, register } from "../services/userService";
import PropTypes from "prop-types";

export const UserContext = createContext();

export default function UserContextData({ children }) {
  const [registerUser, setRegisterUser] = useState({
    UserName: "",
    Email: "",
    Password: "",
    Address: "",
    PhoneNumber: "",
  });
    const [createUser, setCreateUser] = useState(false);
  // ctrate data state
  const [checkUserData, setCheckUserData] = useState({
    userEmail: "",
    userPassword: "",
  }); // this use for login form component
  const [userData, setUserData] = useState(null); // this get information from end point
  const [loginData, setLoginData] = useState(null); // this get information from end point

  const [isLoading, setIsLoading] = useState(false);
  const [responeSuccessRegister, setResponeSuccessRegister] = useState(false);

  const [error, setError] = useState(null);
  const [userToken, setUserToken] = useState(null);

  const [userEmail, setUserEmail] = useState(""); // this for login form component to easy handle and send it to api , we can later composite as object
  const [userPassword, setUserPassword] = useState(""); // this for login form component to easy handle and send it to api , we can later composite as object
  const [userID, setUserID] = useState(null);

  const getUserRegiterationInformation = async () => {
    console.log("getUserRegiterationInformation");
    try {
      setIsLoading(true);
      const response = await register(
        registerUser.UserName,
        registerUser.Email,
        registerUser.Password,
        registerUser.Address,
        registerUser.PhoneNumber
      );
      console.log("%response.data", response.data);
      setUserData(response.data);
      setResponeSuccessRegister(true);
      return response.success;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
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
      //   setUserData(response.token);
      setLoginData(response.token);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getUserByIdInformation = async () => {
    console.log("----from getUserByIdInformation");
    try {
      setIsLoading(true);
      const response = await getUserById(userID, userToken);
      console.log(response);
      setUserData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserLoginInformation();
  }, [checkUserData]);

  useEffect(() => {
    getUserByIdInformation();
  }, [userID]);

  useEffect(() => {
    getUserRegiterationInformation();
  }, [createUser]);

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
          userID,
          setUserID,
          loginData,
          setLoginData,
          registerUser,
          setRegisterUser,
          createUser,
          setCreateUser,
          responeSuccessRegister,
          setResponeSuccessRegister,
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
