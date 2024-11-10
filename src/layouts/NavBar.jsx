import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Styles from "../styles/NavBar.module.css";
import { UserContext } from "../context/UserContextData";

export default function NavBar() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isDisabledRegister, setIsDisabledRegister] = useState(true);

  const {
    setLoginData,
    setUserEmail,
    setUserPassword,
    userID,
  } = useContext(UserContext);

  // in case local storage not empty show the logout button
  useEffect(() => {
    const checkStorage = localStorage.getItem("login");
    if (checkStorage === null) {
      setIsDisabled(true);
      setIsDisabledRegister(true);
    } else {
      setIsDisabled(false);
      setIsDisabledRegister(false);
    }
  }, [userID]);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("login");
    setLoginData(null);
    setUserEmail();
    setUserPassword();
    // hide logoutbutton after delete storgae
    setIsDisabled(true);
    setIsDisabledRegister(true);
    navigate("/");
  };
  return (
    <div>
      <header className="header">
        <div className="container">
          <nav>
            <ul>
              <li className={Styles["nav-item"]}>
                <Link to="/" className={Styles["nav-link"]}>
                  {" "}
                  Home
                </Link>
              </li>
              <li className={Styles["nav-item"]}>
                <Link to="/products" className={Styles["nav-link"]}>
                  {" "}
                  Product List
                </Link>
              </li>
              <li className={Styles["nav-item"]}>
                <Link to="/contact" className={Styles["nav-link"]}>
                  {" "}
                  Contact
                </Link>
              </li>
              <li className={Styles["nav-item"]}>
                <Link
                  to="/login"
                  className={Styles["nav-link"]}
                  style={{ display: isDisabled ? "inline" : "none" }}
                >
                  {" "}
                  Login
                </Link>
              </li>
              <li className={Styles["nav-item"]}>
                <Link
                  onClick={logout}
                  className={Styles["nav-link"]}
                  style={{ display: isDisabled ? "none" : "inline" }}
                >
                  {" "}
                  Logout
                </Link>
              </li>
              <li className={Styles["nav-item"]}>
                <Link
                  to="/register"
                  className={Styles["nav-link"]}
                  style={{ display: isDisabledRegister ? "inline" : "none" }}
                >
                  {" "}
                  Register
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
