import React from "react";

import { Box, Container, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Error({ message }) {
  const navigate = useNavigate();

  const onHandleHomePage = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", marginTop: 8 }}>
      {/* Error Message */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: "bold", color: "error.main" }}
        >
          Error!
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 2, color: "text.secondary" }}>
          {message}
        </Typography>
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={onHandleHomePage}
        sx={{
          marginTop: 3,
          padding: "10px 20px",
          fontSize: "1rem",
          borderRadius: "30px",
          boxShadow: 3,
          "&:hover": {
            boxShadow: 6,
            transform: "scale(1.05)",
          },
        }}
      >
        Go to Home Page
      </Button>
    </Container>
  );
}
