// using material ui
import React, { useContext, useEffect } from "react";

import { UserContext } from "../context/UserContextData";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  CircularProgress,
  Alert,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import Styles from "../styles/Login.module.css";

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
    userID,
    setUserID,
    loginData,
    setLoginData,
  } = useContext(UserContext);

  // 1. handle form submit
  const handelOnSubmit = (event) => {
    event.preventDefault();
    setCheckUserData({
      userEmail: userEmail,
      userPassword: userPassword,
    });

    if (isLoading) {
      return <CircularProgress />;
    }

    if (error) {
      return <Alert severity="error">{error.message}</Alert>;
    }
  };

  // 2. useEffect to access userToken after updates
  useEffect(() => {
    if (loginData) {
      const token = loginData;
      const decoded = jwtDecode(token);
      const UserId = decoded.UserId;
      setUserID(UserId);

      let checkIsAdmin = decoded.role === "Admin" ? true : false;
      localStorage.setItem(
        "login",
        JSON.stringify({
          userToken: loginData,
          isSignIn: true,
          isAdmin: checkIsAdmin,
          state: userData,
        })
      );

      if (userID) {
        if (checkIsAdmin) {
          navigate("/dashboard/admins/view", { state: userData });
        } else {
          navigate("/dashboard/users/view", { state: userData });
        }
      }
    }
  }, [userToken, userData]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5", // Soft background color
        padding: "20px",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 6, // Increased padding for a more spacious form
          width: { xs: "90%", sm: "500px", md: "600px", lg: "700px" }, // Large width on larger screens
          minHeight: "450px", // Minimum height for the form
          borderRadius: 3,
          backgroundColor: "#fff", // White background for better contrast
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
          transition: "all 0.3s ease-in-out", // Smooth transition for hover effects
          ":hover": {
            transform: "scale(1.05)", // Subtle zoom effect on hover
          },
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#3f51b5" }}
        >
          <LockIcon sx={{ mr: 1, color: "#3f51b5" }} />
          Login
        </Typography>

        <form onSubmit={handelOnSubmit}>
          {/* Email Field */}
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            required
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            sx={{
              marginBottom: 3, // Increased margin for better spacing
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
            InputProps={{
              startAdornment: <EmailIcon sx={{ marginRight: 1 }} />,
            }}
          />

          {/* Password Field */}
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            required
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            sx={{
              marginBottom: 4, // Increased margin for better spacing
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
            InputProps={{
              startAdornment: <LockIcon sx={{ marginRight: 1 }} />,
            }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              padding: "15px",
              fontSize: "18px", // Larger font size
              textTransform: "none",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#303f9f", // Darker shade on hover
              },
              transition: "background-color 0.3s ease",
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress
                size={24}
                sx={{ color: "white", marginRight: 1 }}
              />
            ) : (
              "Login"
            )}
          </Button>

          {/* Error Message */}
          {error && (
            <Box sx={{ marginTop: 2 }}>
              <Alert severity="error">{error.message}</Alert>
            </Box>
          )}
        </form>
      </Paper>
    </Box>
  );
}
