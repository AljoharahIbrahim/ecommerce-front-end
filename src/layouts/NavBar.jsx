import React from "react";
import { Link } from "react-router-dom";

import Styles from "../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <div>
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
        </ul>
      </nav>
    </div>
  );
}