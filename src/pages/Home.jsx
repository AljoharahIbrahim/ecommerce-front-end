import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { keyframes } from "@emotion/react";
import { useNavigate } from "react-router-dom";

// Animation for the text fadeIn
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products");
  };

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
        backgroundImage: `url("https://plus.unsplash.com/premium_photo-1672883552341-eaebc9240719?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        animation: `${fadeIn} 2s ease-out`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          zIndex: 2,
          padding: "0 1rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            marginBottom: 2,
            animation: `${fadeIn} 2s ease-out`,
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, // Responsive font size
          }}
        >
          Welcome to Our Online Store!
        </Typography>

     <Typography
  variant="body1"
  color="white"  // Change color to white
  sx={{
    fontSize: { xs: "1rem", sm: "1.25rem" },
    lineHeight: "1.8",
    maxWidth: 600,
    margin: "0 auto",
    marginBottom: 3,
    animation: `${fadeIn} 2s ease-out`,
  }}
>
  Discover amazing deals and explore a wide variety of products at
  unbeatable prices. Start shopping today!
</Typography>


        <Button
          onClick={handleNavigate}
          variant="contained"
          color="secondary"
          sx={{
            padding: "12px 24px",
            fontSize: "1.1rem",
            borderRadius: "30px",
            boxShadow: 3,
            "&:hover": {
              boxShadow: 6,
              transform: "scale(1.05)",
            },
          }}
        >
          Start Shopping Now
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
