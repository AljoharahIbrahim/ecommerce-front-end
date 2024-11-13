import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Box } from "@mui/material";

const Loader = () => {
  let [color, setColor] = useState("#1876d2");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        width: "100%", // Full width
        backgroundColor: "rgba(0, 0, 0, 0.1)", // Optional: a light background color for visibility
      }}
    >
      <ClipLoader
        color={color}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Box>
  );
};

export default Loader;
