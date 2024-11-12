import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Styles from "../styles/NavBar.module.css";
import { UserContext } from "../context/UserContextData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import CartContextData, { CartContext } from "../context/CartContextData";

export default function NavBar() {
  // // check if the use is login => the add to cart button will show
  // const [isLogin, setIsLogin] = useState(false);
  // // using useEffect and local storage to check about use is login or not
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("login"));
  //   if (user && user.isSignIn) {
  //     setIsLogin(user.isSignIn);
  //   }
  // }, []);

  const [isDisabled, setIsDisabled] = useState(false);
  const [isDisabledRegister, setIsDisabledRegister] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cartisDisabled, setCartIsDisabled] = useState(false);
 const {cart} = useContext(CartContext);
  // calculate number of cart 
   const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("login"));

    if (user && user.isSignIn) {
      setIsAdmin(user.isAdmin);
    }
  }, []);

  const { setLoginData, setUserEmail, setUserPassword, userID } =
    useContext(UserContext);

  useEffect(() => {
    const checkStorage = localStorage.getItem("login");
    if (checkStorage === null) {
      setIsDisabled(true);
      setIsDisabledRegister(true);
      setCartIsDisabled(false);
    } else {
      setIsDisabled(false);
      setIsDisabledRegister(false);
      setCartIsDisabled(true);
    }
  }, [userID]);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("cart");
    setLoginData(null);
    setUserEmail();
    setUserPassword();
    // hide logoutbutton after delete storgae
    setIsDisabled(true);
    setIsDisabledRegister(true);
    setCartIsDisabled(true);
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
              <li>
                <Link
                  to={
                    isAdmin ? "/dashboard/admins/view" : "/dashboard/users/view"
                  }
                  className={Styles["nav-link"]}
                  style={{ display: isDisabled ? "none" : "inline" }}
                >
                  Dashboard
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
              <li className={Styles["nav-item"]}>
                <Link
                  id="cart-icon"
                  to="/cart"
                  className={Styles["nav-link"]}
                  // style={{ display: setCartIsDisabled ? "inline": "none"}}
                  style={{ display: isDisabled ? "none" : "inline" }}
                >
                  {" "}
                  <FontAwesomeIcon icon={faCartArrowDown} />
                  {itemCount > 0 && (
                    <span className="cart-item-count">{itemCount}</span>
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
