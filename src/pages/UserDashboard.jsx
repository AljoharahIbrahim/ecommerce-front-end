import React from "react";

import Profile from "./Profile";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Chip,
  Grid,
  Paper,
  Divider,
  Button,
} from "@mui/material";

export default function UserDashboard() {
  let { state } = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products");
  };
  if (state) {
    state = JSON.parse(localStorage.getItem("login")).state;
  }
  console.log("state", state);
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      <Box>
        {/* Header */}
        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
            User Dashboard
          </Typography>
        </Box>
        <Button
          onClick={handleNavigate}
          variant="contained"
          color="secondary"
          sx={{
            padding: "8px 12px",
            fontSize: "1.1rem",
            borderRadius: "30px",
            boxShadow: 3,
            "&:hover": {
              boxShadow: 6,
              transform: "scale(1.05)", // Slight animation on hover
            },
          }}
        >
          {" "}
          buy product{" "}
        </Button>

        <Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ padding: 3 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", marginBottom: 2 }}
                >
                  Profile
                </Typography>
                <Divider sx={{ marginBottom: 2 }} />

                <Typography variant="h6">{state.userName}</Typography>
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
      </Box>
    </Container>
  );
}
