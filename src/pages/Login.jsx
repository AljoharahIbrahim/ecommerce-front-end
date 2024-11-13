import React from "react";

import LoginForm from "../components/LoginForm";
import { Box, colors } from "@mui/material";

export default function Login() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
        borderRadius: 0,
        overflow: "hidden",
        boxShadow: 0,
        backgroundColor: "#f5f5f5",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginForm />
    </Box>
  );
}
