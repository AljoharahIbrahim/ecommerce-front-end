import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Styles from "../styles/NavBar.module.css";
import { UserContext } from "../context/UserContextData";

export default function NavBar() {
  const [isDisabled, setIsDisabled] = useState(false);
  const { setLoginData, setUserEmail, setUserPassword } =
    useContext(UserContext);
  // in case local storage not empty show the logout button
  if (localStorage.removeItem("login") != null) {
    setIsDisabled((prev) => !prev);
  }

  //
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("login");
    setLoginData(null);
    setUserEmail();
    setUserPassword();
    // hide logoutbutton after delete storgae
    setIsDisabled((prev) => !prev);
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
                <Link to="/login" className={Styles["nav-link"]}>
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
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
