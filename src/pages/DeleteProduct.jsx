import React from "react";

import DeleteProductForm from "../components/products/DeleteProductForm";
import { Container, Box, Typography } from "@mui/material";

export default function DeleteProduct() {
  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
          Delete Product
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
          Please confirm the details of the product you want to delete.
        </Typography>
      </Box>

      <DeleteProductForm />
    </Container>
  );
}
