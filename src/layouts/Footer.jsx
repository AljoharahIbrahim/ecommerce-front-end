// import React from "react";

// export default function Footer() {
//   return (
//     <div className="footer">
//       <div className="container">
//         <p> e-commerce website &copy; {new Date().getFullYear()}</p>
//       </div>
//     </div>
//   );
// }

// using materila ui 

import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#8e8785", // Background color of the footer
        color: "white", // Text color
        padding: { xs: 2, sm: 3 }, // Padding adjusts based on screen size
        textAlign: "center", // Center text alignment
        marginTop: "auto", // Push footer to bottom of the page if content is short
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2">
          e-commerce website &copy; {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}
