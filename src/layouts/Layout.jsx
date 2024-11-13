import React from "react";

import NavBar from "./NavBar";
import Main from "./Main";
import Footer from "./Footer";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar />
      <Main />
      <Footer />
    </Box>
  );
};

export default Layout;
