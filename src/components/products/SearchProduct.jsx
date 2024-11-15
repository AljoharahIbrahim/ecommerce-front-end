import React, { useContext } from "react";

import { ProductContext } from "../../context/ProductContextData";
import {
  TextField,
  Button,
  Box,
  Typography,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";

export default function SearchProduct() {
  const { searchValue, setSearchValue, sort, setSort } =
    useContext(ProductContext);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleDisplayProduct = () => {
    setSort("");
    setSearchValue("");
  };

  const handleSortProduct = (event) => {
    setSort(event.target.value);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Search Product
      </Typography>

      {/* Grid Container to make layout responsive */}
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Search Field */}
        <Grid item xs={12} sm={4}>
          <TextField
            id="search"
            label="Enter product name"
            variant="outlined"
            value={searchValue}
            onChange={handleSearchChange}
            required
            fullWidth
            sx={{
              height: 40, // Ensures consistent height
              width: "100%", // Full width within grid item
              maxWidth: 500, // Limit max width
              boxSizing: "border-box", // Include padding and border in width/height calculation
              fontSize: 16, // Font size
              "& .MuiInputBase-root": {
                height: "100%", // Make sure the input field height is 100%
                padding: "0 14px", // Equalize internal padding
              },
            }}
          />
        </Grid>

        {/* Select for sorting */}
        <Grid item xs={12} sm={4}>
          <Select
            value={sort}
            onChange={handleSortProduct}
            displayEmpty
            fullWidth
            sx={{
              height: 40, // Same height as TextField
              width: "100%", // Full width within grid item
              maxWidth: 500, // Match max width of TextField
              boxSizing: "border-box", // Ensure padding and borders are accounted for
              fontSize: 16, // Font size
              "& .MuiSelect-select": {
                padding: "0 14px", // Equalize internal padding with TextField
                height: "100%", // Ensure the select is the same height as TextField
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "4px", // Ensure border-radius matches the TextField
              },
            }}
          >
            <MenuItem value="">Sort By</MenuItem>
            <MenuItem value="price_asc">Price (Low to High)</MenuItem>
            <MenuItem value="price_desc">Price (High to Low)</MenuItem>
            <MenuItem value="name_asc">Name (A-Z)</MenuItem>
            <MenuItem value="name_desc">Name (Z-A)</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDisplayProduct}
            fullWidth
            sx={{
              height: 40, // Consistent height with TextField and Select
              width: "60%", // Full width of the container
              maxWidth: 500, // Match max width of TextField and Select
              boxSizing: "border-box", // Include padding and borders in width/height calculation
              fontSize: 16, // Set font size for the button text
              padding: "0 14px", // Equalize padding like the TextField and Select
            }}
          >
            Clear Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

//name_asc
//name_desc
//price_asc
//price_desc
