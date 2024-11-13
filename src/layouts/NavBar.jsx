// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import Styles from "../styles/NavBar.module.css";
// import { UserContext } from "../context/UserContextData";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
// import CartContextData, { CartContext } from "../context/CartContextData";

// export default function NavBar() {
//   // // check if the use is login => the add to cart button will show
//   // const [isLogin, setIsLogin] = useState(false);
//   // // using useEffect and local storage to check about use is login or not
//   // useEffect(() => {
//   //   const user = JSON.parse(localStorage.getItem("login"));
//   //   if (user && user.isSignIn) {
//   //     setIsLogin(user.isSignIn);
//   //   }
//   // }, []);

//   const [isDisabled, setIsDisabled] = useState(false);
//   const [isDisabledRegister, setIsDisabledRegister] = useState(true);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [cartisDisabled, setCartIsDisabled] = useState(false);
//  const {cart} = useContext(CartContext);
//   // calculate number of cart 
//    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("login"));

//     if (user && user.isSignIn) {
//       setIsAdmin(user.isAdmin);
//     }
//   }, []);

//   const { setLoginData, setUserEmail, setUserPassword, userID } =
//     useContext(UserContext);

//   useEffect(() => {
//     const checkStorage = localStorage.getItem("login");
//     if (checkStorage === null) {
//       setIsDisabled(true);
//       setIsDisabledRegister(true);
//       setCartIsDisabled(false);
//     } else {
//       setIsDisabled(false);
//       setIsDisabledRegister(false);
//       setCartIsDisabled(true);
//     }
//   }, [userID]);

//   const navigate = useNavigate();
//   const logout = () => {
//     localStorage.removeItem("login");
//     localStorage.removeItem("cart");
//     setLoginData(null);
//     setUserEmail();
//     setUserPassword();
//     // hide logoutbutton after delete storgae
//     setIsDisabled(true);
//     setIsDisabledRegister(true);
//     setCartIsDisabled(true);
//     navigate("/");
//   };
//   return (
//     <div>
//       <header className="header">
//         <div className="container">
//           <nav>
//             <ul>
//               <li className={Styles["nav-item"]}>
//                 <Link to="/" className={Styles["nav-link"]}>
//                   {" "}
//                   Home
//                 </Link>
//               </li>
//               <li className={Styles["nav-item"]}>
//                 <Link to="/products" className={Styles["nav-link"]}>
//                   {" "}
//                   Product List
//                 </Link>
//               </li>
//               <li className={Styles["nav-item"]}>
//                 <Link to="/contact" className={Styles["nav-link"]}>
//                   {" "}
//                   Contact
//                 </Link>
//               </li>
//               <li className={Styles["nav-item"]}>
//                 <Link
//                   to="/login"
//                   className={Styles["nav-link"]}
//                   style={{ display: isDisabled ? "inline" : "none" }}
//                 >
//                   {" "}
//                   Login
//                 </Link>
//               </li>

//               <li className={Styles["nav-item"]}>
//                 <Link
//                   onClick={logout}
//                   className={Styles["nav-link"]}
//                   style={{ display: isDisabled ? "none" : "inline" }}
//                 >
//                   {" "}
//                   Logout
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to={
//                     isAdmin ? "/dashboard/admins/view" : "/dashboard/users/view"
//                   }
//                   className={Styles["nav-link"]}
//                   style={{ display: isDisabled ? "none" : "inline" }}
//                 >
//                   Dashboard
//                 </Link>
//               </li>

//               <li className={Styles["nav-item"]}>
//                 <Link
//                   to="/register"
//                   className={Styles["nav-link"]}
//                   style={{ display: isDisabledRegister ? "inline" : "none" }}
//                 >
//                   {" "}
//                   Register
//                 </Link>
//               </li>
//               <li className={Styles["nav-item"]}>
//                 <Link
//                   id="cart-icon"
//                   to="/cart"
//                   className={Styles["nav-link"]}
//                   // style={{ display: setCartIsDisabled ? "inline": "none"}}
//                   style={{ display: isDisabled ? "none" : "inline" }}
//                 >
//                   {" "}
//                   <FontAwesomeIcon icon={faCartArrowDown} />
//                   {itemCount > 0 && (
//                     <span className="cart-item-count">{itemCount}</span>
//                   )}
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header>
//     </div>
//   );
// }


// using material ui 
import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Divider,
  Drawer,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faHome,
  faShoppingCart,
  faUser,
  faSignInAlt,
  faBars,
  faTachometerAlt, // Dashboard icon
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/CartContextData";
import { UserContext } from "../context/UserContextData";
import Styles from "../styles/NavBar.module.css";

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // To track login status
  const [isAdmin, setIsAdmin] = useState(false); // Admin state

  const { cart } = useContext(CartContext);
  const { setLoginData, userID } = useContext(UserContext);

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0); // Get item count for the cart

  // Check user login status and update states accordingly
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("login"));
    if (user && user.isSignIn) {
      setIsLoggedIn(true); // User is logged in
      setIsAdmin(user.isAdmin); // Set admin status
    } else {
      setIsLoggedIn(false); // User is logged out
    }
  }, [userID]);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("cart");
    setLoginData(null); // Reset login data
    setIsLoggedIn(false); // Set logged out state
    setIsAdmin(false); // Reset admin state
    navigate("/"); // Redirect to home
  };

  const toggleDrawer = (open) => () => setDrawerOpen(open); // Toggle drawer for mobile view

  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: "#8e8785", boxShadow: 3, zIndex: 1201 }}
    >
      <Toolbar sx={{ padding: "0 !important" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 !important",
          }}
        >
          {/* Left Side: Navigation buttons */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 2,
              alignItems: "center",
            }}
          >
            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{ textTransform: "none", transition: "0.3s" }}
              className="nav-btn"
            >
              <FontAwesomeIcon icon={faHome} style={{ marginRight: 8 }} /> Home
            </Button>
            <Button
              component={Link}
              to="/products"
              color="inherit"
              sx={{ textTransform: "none", transition: "0.3s" }}
              className="nav-btn"
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{ marginRight: 8 }}
              />{" "}
              Product List
            </Button>
            <Button
              component={Link}
              to="/contact"
              color="inherit"
              sx={{ textTransform: "none", transition: "0.3s" }}
              className="nav-btn"
            >
              <FontAwesomeIcon icon={faUser} style={{ marginRight: 8 }} />{" "}
              Contact
            </Button>

            {/* Dashboard Button - Only shown if logged in */}
            {isLoggedIn && (
              <Button
                component={Link}
                to={
                  isAdmin ? "/dashboard/admins/view" : "/dashboard/users/view"
                }
                color="inherit"
                sx={{ textTransform: "none", transition: "0.3s" }}
                className="nav-btn"
              >
                <FontAwesomeIcon
                  icon={faTachometerAlt}
                  style={{ marginRight: 8 }}
                />{" "}
                Dashboard
              </Button>
            )}
          </Box>

          {/* Right Side: Authentication and Cart */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 2,
              alignItems: "center",
            }}
          >
            {/* Login Button - Only shown if user is logged out */}
            {!isLoggedIn && (
              <Button
                component={Link}
                to="/login"
                color="inherit"
                sx={{
                  textTransform: "none",
                  transition: "0.3s",
                }}
                className="nav-btn"
              >
                <FontAwesomeIcon
                  icon={faSignInAlt}
                  style={{ marginRight: 8 }}
                />{" "}
                Login
              </Button>
            )}

            {/* Register Button - Only shown if user is logged out */}
            {!isLoggedIn && (
              <Button
                component={Link}
                to="/register"
                color="inherit"
                sx={{
                  textTransform: "none",
                  transition: "0.3s",
                }}
                className="nav-btn"
              >
                <FontAwesomeIcon icon={faUser} style={{ marginRight: 8 }} />{" "}
                Register
              </Button>
            )}

            {/* Logout Button - Only shown if user is logged in */}
            {isLoggedIn && (
              <Button
                onClick={logout}
                color="inherit"
                sx={{
                  textTransform: "none",
                  transition: "0.3s",
                }}
                className="nav-btn"
              >
                <FontAwesomeIcon
                  icon={faSignInAlt}
                  style={{ marginRight: 8 }}
                />{" "}
                Logout
              </Button>
            )}

            {/* Cart Icon - Only shown if user is logged in */}
            {isLoggedIn && (
              <IconButton
                component={Link}
                to="/cart"
                color="inherit"
                sx={{
                  position: "relative",
                  transition: "0.3s",
                }}
                className="nav-btn"
              >
                <FontAwesomeIcon icon={faCartArrowDown} size="lg" />
                {itemCount > 0 && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: -5,
                      right: -5,
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "50%",
                      width: 20,
                      height: 20,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "0.8rem",
                    }}
                  >
                    {itemCount}
                  </Box>
                )}
              </IconButton>
            )}
          </Box>

          {/* Hamburger Icon for mobile */}
          <IconButton
            color="inherit"
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </IconButton>

          {/* Drawer for mobile */}
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{
              transition: "transform 0.3s ease-out",
              transform: drawerOpen ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <List>
              <ListItem button component={Link} to="/">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={Link} to="/products">
                <ListItemText primary="Product List" />
              </ListItem>
              <ListItem button component={Link} to="/contact">
                <ListItemText primary="Contact" />
              </ListItem>

              {/* Dashboard Link in Drawer */}
              {isLoggedIn && (
                <ListItem
                  button
                  component={Link}
                  to={
                    isAdmin ? "/dashboard/admins/view" : "/dashboard/users/view"
                  }
                >
                  <ListItemText primary="Dashboard" />
                </ListItem>
              )}

              <Divider />
              {!isLoggedIn && (
                <ListItem button component={Link} to="/login">
                  <ListItemText primary="Login" />
                </ListItem>
              )}
              {!isLoggedIn && (
                <ListItem button component={Link} to="/register">
                  <ListItemText primary="Register" />
                </ListItem>
              )}
              {isLoggedIn && (
                <ListItem button onClick={logout}>
                  <ListItemText primary="Logout" />
                </ListItem>
              )}
            </List>
          </Drawer>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

