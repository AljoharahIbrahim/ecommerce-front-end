import React, { useEffect } from "react";

import Styles from "../styles/Register.module.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContextData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router-dom";
import Login from "../pages/Login";

export default function RegisterForm() {
  const navigate = useNavigate();
  const {
    registerUser,
    setRegisterUser,
    createUser,
    setCreateUser,
    responeSuccessRegister,
    setResponeSuccessRegister,
  } = useContext(UserContext);

  const handelOnSubmit = (event) => {
    event.preventDefault();
    console.log("*************************");
    console.log("RegisterForm-> handelOnSubmit" + registerUser.UserName);
    setRegisterUser({
      ...registerUser,
      UserName: registerUser.UserName,
      Email: registerUser.Email,
      Password: registerUser.Password,
      Address: registerUser.Address,
      PhoneNumber: registerUser.PhoneNumber,
    });
    setCreateUser(true);

  };

  //
  useEffect(() => {
    if (responeSuccessRegister) {
      console.log("@responeSuccessRegister", responeSuccessRegister);
      setResponeSuccessRegister(false);
      // create succes message
      toast.success("user is created");
      //reset the form
      setRegisterUser({
        ...registerUser,
        UserName: "",
        Email: "",
        Password: "",
        Address: "",
        PhoneNumber: "",
      });
      // go to login page

      navigate("/login");
    }
  }, [responeSuccessRegister]);

  //
  return (
    <div className={Styles["container"]}>
      <div>
        <form onSubmit={handelOnSubmit}>
          {/* <h2>Register</h2> */}
          <label htmlFor="name">
            <b>User Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            id="name"
            value={registerUser.UserName}
            onChange={(event) =>
              setRegisterUser({ ...registerUser, UserName: event.target.value })
            }
            required
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            value={registerUser.Email}
            onChange={(event) =>
              setRegisterUser({ ...registerUser, Email: event.target.value })
            }
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="text"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            value={registerUser.Password}
            onChange={(event) =>
              setRegisterUser({ ...registerUser, Password: event.target.value })
            }
            required
          />
          <label htmlFor="Address">
            <b>Address</b>
          </label>
          <input
            type="text"
            placeholder="Enter Address"
            name="Address"
            id="Address"
            value={registerUser.Address}
            onChange={(event) =>
              setRegisterUser({ ...registerUser, Address: event.target.value })
            }
            required
          />
          <label htmlFor="PhoneNumber">
            <b>PhoneNumber</b>
          </label>
          <input
            type="text"
            placeholder="Enter phoneNumber"
            name="PhoneNumber"
            id="PhoneNumber"
            value={registerUser.PhoneNumber}
            onChange={(event) =>
              setRegisterUser({
                ...registerUser,
                PhoneNumber: event.target.value,
              })
            }
            required
          />
          <button type="submit" className={Styles["registerbtn"]}>
            Register
          </button>
        </form>
        <ToastContainer disable/>
      </div>
    </div>
  );
}
