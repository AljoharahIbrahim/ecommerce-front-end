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
