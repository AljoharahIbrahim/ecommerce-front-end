// import React from 'react'
// import { useLocation } from 'react-router-dom'

// export default function Profile() {
//     const { state } = useLocation();
//     console.log("state",state);
//   return (
//     <div>
//       <div className="profile">
//         <div className="profile-header">
//           <h1 className="profile-name">{state.userName}</h1>
//         </div>
//         <div className="profile-info">
//           <p className="profile-item">
//             <strong>Phone:</strong> {state.phoneNumber}
//           </p>
//           <p className="profile-item">
//             <strong>Address:</strong> {state.address}
//           </p>
//           <p className="profile-item">
//             <strong>Email:</strong> {state.email}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// using material ui 

import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Container, Typography, Paper, Grid } from "@mui/material";

export default function Profile() {
  const { state } = useLocation();
  console.log("state", state);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      <Box>
        {/* Profile Section */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", marginBottom: 2 }}
              >
                Profile
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: 2 }}
              >
                {state.userName}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{ marginBottom: 1 }}
              >
                <strong>Phone:</strong> {state.phoneNumber}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{ marginBottom: 1 }}
              >
                <strong>Address:</strong> {state.address}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{ marginBottom: 1 }}
              >
                <strong>Email:</strong> {state.email}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
