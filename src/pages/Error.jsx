// import { string } from "prop-types";
// import React from "react";
// import { useNavigate, useRouteError } from "react-router-dom";

// export default function Error({ message }) {
//   const error = useRouteError();
//   const navigate = useNavigate();
//   const onHandleHomePage = () => {
//     navigate("/");
//     window.location.reload();
//   };
//   return (
//     <>
//       <h2> Error!</h2>
//       {/* use the below condition for handle error message
//          case 1 : error occurs in childs of the component in route => show the error message
//          case 2 : there are no error occurs in childs of the component, but we handle errors that occurs in end points response, ex: not found or we catch un available routes page in the system */}
//       {error ? <h3>{error.message}</h3> : <h3>{message}</h3>}
//       <button onClick={onHandleHomePage}> Go to Home Page</button>
//     </>
//   );
// }

// Error.propTypes = {
//   message: string,
// };


// using material ui 
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
          {/* Render the message passed as prop */}
          {message}
        </Typography>
      </Box>

      {/* Button to Go to Home */}
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
            transform: "scale(1.05)", // Slight animation on hover
          },
        }}
      >
        Go to Home Page
      </Button>
    </Container>
  );
}
