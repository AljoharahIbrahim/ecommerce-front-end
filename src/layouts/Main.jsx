import React from "react";

import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <Outlet />
    </div>
  );
};

export default Main;

// using material ui


// import React from "react";
// import { Box, Container } from "@mui/material";
// import { Outlet } from "react-router-dom";

// const Main = () => {
//   return (
//     <div className="main-contect">
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           minHeight: "100vh", // Full height of the viewport
//           margin: 0, // Remove any margin
//           padding: 0, // Remove any padding
//           backgroundImage: `url("https://via.placeholder.com/1920x1080")`, // Replace with your image URL
//           backgroundSize: "cover", // Ensure the background covers the entire screen
//           backgroundPosition: "center", // Center the background image
//           backgroundAttachment: "fixed", // Keep the background fixed during scroll (parallax effect)
//         }}
//       >
//         {/* Main content container */}
//         <Container
//           maxWidth="lg"
//           sx={{
//             flexGrow: 1, // Allows the container to take up available space
//             display: "flex",
//             justifyContent: "center", // Center content horizontally
//             alignItems: "center", // Center content vertically
//             paddingTop: 0, // Remove top padding
//             paddingBottom: 0, // Remove bottom padding
//           }}
//         >
//           <Box
//             sx={{
//               width: "100%",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               textAlign: "center", // Center content inside Box
//               padding: { xs: 2, sm: 3 }, // Responsive padding
//             }}
//           >
//             {/* The Outlet renders the nested route content */}
//             <Outlet />
//           </Box>
//         </Container>
//       </Box>
//     </div>
//   );
// };


// export default Main;
