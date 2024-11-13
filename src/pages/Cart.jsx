

// using material ui 

import React from "react";

import Carts from "../components/Cart/Carts";
import { Container, Box, Typography } from "@mui/material";

export default function Cart() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      {/* Page Header */}
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
          Your Shopping Cart
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
          Review and manage the items you've added to your cart.
        </Typography>
      </Box>

      {/* Cart Items */}
      <Carts />
    </Container>
  );
}
