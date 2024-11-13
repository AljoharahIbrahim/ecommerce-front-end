import React from "react";

import { Container, Box, Typography } from "@mui/material";
import AddProductForm from "../components/products/AddProductForm";

export default function AddProduct() {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      {/* Page Title */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Add New Product
        </Typography>
      </Box>

      {/* Form Container */}
      <Box
        sx={{
          padding: 3,
          backgroundColor: "#f9f9f9",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <AddProductForm />
      </Box>
    </Container>
  );
}
