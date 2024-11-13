import React from "react";

import { useLocation, useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
} from "@mui/material";

export default function ProductDetails() {
  const parms = useParams();
  console.log(parms);
  const { state } = useLocation();
  console.log(state);

  if (!state) {
    return <h1>Product not found</h1>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3 }}>
        Product Details
      </Typography>

      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        <Grid item xs={12} sm={6} md={6}>
          <Card sx={{ maxWidth: 400, margin: "auto" }}>
            <CardMedia
              component="img"
              height="300"
              image={state.image}
              alt={state.name}
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {state.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginBottom: 1 }}
              >
                <strong>Category: </strong>
                {state.categoryName}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginBottom: 1 }}
              >
                <strong>Stock Quantity: </strong>
                {state.stockQuantity}
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: 2 }}
              >
                <strong>Price: </strong>${state.price}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginBottom: 1 }}
              >
                <strong>Description: </strong>
                {state.description}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <strong>Updated Date: </strong>
                {state.updatedDate}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 3, textAlign: "center" }}></Box>
    </Box>
  );
}
