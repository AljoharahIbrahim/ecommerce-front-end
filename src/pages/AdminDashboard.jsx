// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// export default function AdminDashboard() {
//   console.log("!!!!AdminDashboard");
//   let { state } = useLocation();
//   // if (state) {
//     //   console.log("****");
//     //  console.log(state);
//     state = JSON.parse(localStorage.getItem("login"));
//     console.log("****m", state.state);
//     state=state.state
//   //  }
//   console.log("state", state);
//     return (
//       <div className="dashboard-container">
//         <header>
//           <h1>Admin Dashboard</h1>
//         </header>
//         <div className="chip-container">
//           <Link to="/dashboard/admins/addProduct" className="chip">
//             Add Product
//           </Link>
//           <Link to="/dashboard/admins/updateProduct" className="chip">
//             Update Product
//           </Link>
//           <Link to="/dashboard/admins/deleteProduct" className="chip">
//             Delete Product
//           </Link>
//         </div>
//         <div className="profile-container">
//           <h2>Profile Information</h2>
//           <p className="profile-item">
//             <strong>Name:</strong>
//             {state.userName}{" "}
//           </p>{" "}
//           <p className="profile-item">
//             <strong>Phone:</strong> {state.phoneNumber}{" "}
//           </p>{" "}
//           <p className="profile-item">
//             <strong>Address:</strong> {state.address}{" "}
//           </p>{" "}
//           <p className="profile-item">
//             <strong>Email:</strong> {state.email}{" "}
//           </p>
//         </div>
//       </div>
//     );
// }


// using material ui 
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Box, Typography, Button, Grid } from "@mui/material";

export default function AdminDashboard() {
  let { state } = useLocation();
  // Retrieve user info from localStorage
  state = JSON.parse(localStorage.getItem("login")).state;

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      {/* Page Header */}
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
          Admin Dashboard
        </Typography>
      </Box>

      {/* Chip Container for Navigation */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          marginBottom: 4,
        }}
      >
        <Button
          variant="contained"
          component={Link}
          to="/dashboard/admins/addProduct"
          sx={{ padding: "12px 24px", textTransform: "none" }}
        >
          Add Product
        </Button>
        <Button
          variant="contained"
          component={Link}
          to="/dashboard/admins/updateProduct"
          sx={{ padding: "12px 24px", textTransform: "none" }}
        >
          Update Product
        </Button>
        <Button
          variant="contained"
          component={Link}
          to="/dashboard/admins/deleteProduct"
          sx={{ padding: "12px 24px", textTransform: "none" }}
        >
          Delete Product
        </Button>
      </Box>

      {/* Profile Information */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          padding: 3,
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Typography variant="h5" component="h2" sx={{ marginBottom: 3 }}>
          Profile Information
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Name:
            </Typography>
            <Typography variant="body2">{state.userName}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Phone:
            </Typography>
            <Typography variant="body2">{state.phoneNumber}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Address:
            </Typography>
            <Typography variant="body2">{state.address}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Email:
            </Typography>
            <Typography variant="body2">{state.email}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
