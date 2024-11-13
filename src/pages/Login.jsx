// import React from 'react'
// import LoginForm from '../components/LoginForm'

// export default function Login() {
//   return (

    
//     <div>
//           <LoginForm/>
//     </div>
//   )
// }

// //using
// import React from "react";
// import LoginForm from "../components/LoginForm";
// import { Box, Container, Typography, Grid } from "@mui/material";

// export default function Login() {
//   return (
//     <Container component="main" maxWidth="xs" sx={{ marginTop: 8 }}>
//       {/* Header */}
//       <Box sx={{ textAlign: "center", marginBottom: 4 }}>
//         <Typography variant="h5" component="h1" sx={{ fontWeight: "bold" }}>
//           Login to Your Account
//         </Typography>
//       </Box>

//       {/* Login Form */}
//       <Grid container justifyContent="center">
//         {/* <Grid item xs={12}> */}
//           <LoginForm />
//         {/* </Grid> */}
//       </Grid>
//     </Container>
//   );
// }


import React from "react";
import LoginForm from "../components/LoginForm";
import { Box, colors } from "@mui/material";

export default function Login() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh", // Full height of the viewport
        margin: 0, // Remove margin
        padding: 0, // Remove padding
        borderRadius: 0,
        overflow: "hidden",
        boxShadow: 0,
        backgroundColor: "#f5f5f5",
        // backgroundImage: `url("https://plus.unsplash.com/premium_photo-1672883552341-eaebc9240719?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundSize: "cover", // Ensures the image covers the entire container
        backgroundPosition: "center", // Ensures the image is centered
        backgroundAttachment: "fixed", // Keeps the background fixed during scroll
        display: "flex", // Flexbox to center content vertically and horizontally
        justifyContent: "center", // Horizontally center
        alignItems: "center", // Vertically center
      }}
    >
      {/* Login Form Section */}
      <LoginForm />
    </Box>
  );
}
