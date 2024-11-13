// import React, { useContext, useEffect, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import { ProductContext } from "../../context/ProductContextData";

// export default function UpdateProdutForm() {
//   // this feature for admin only
//   const [selectProduct, setSelectProduct] = useState();
//   const {
//     products,
//     isLoading,
//     error,
//     productData,
//     setProductData,
//     setProductID,
//     setUpdateProductOrder,
//     productUpdateResponse,
//     setProductUpdateResponse,
//     setAdminToken,
//   } = useContext(ProductContext);

//   console.log("products", products);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // get admin token
//     const token = localStorage.getItem("login")
//       ? JSON.parse(localStorage.getItem("login"))
//       : "";
//     console.log("token", token.userToken);
//     setAdminToken(token.userToken);
//     // set productID
//     setProductID(selectProduct);
//     // update state to call end point
//     setUpdateProductOrder(true);
//     setProductUpdateResponse(true);
//   };

//   useEffect(() => {
//     console.log("ProductUpdateResponse");
//     if (productUpdateResponse) {
//       setProductUpdateResponse(false);
//       // return Success message
//       toast.success("Product is update");
//       // reset the input value form
//       setProductData({
//         ...productData,
//         name: "",
//         price: "",
//         description: "",
//         stockQuantity: "",
//         categoryID: "",
//         image: "",
//       });
//     }
//   }, [productUpdateResponse]);

//   return (
//     <>
//       {" "}
//       <h3>Update Product</h3>
//       <form onSubmit={handleSubmit}>
//         <div className="custom-select">
//           <label htmlFor="product-select">Select a product:</label>
//           <select
//             id="product-select"
//             value={selectProduct}
//             onChange={(e) => {
//               console.log("selectProduct=", e.target.value);
//               setSelectProduct(e.target.value);
//             }}
//             required
//           >
//             <option value="">Select a product</option>
//             {products.map((product) => (
//               <option key={product.productId} value={product.productId}>
//                 {product.productId}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Product Name</label>
//           <input
//             type="text"
//             value={productData.name}
//             onChange={() =>
//               setProductData({
//                 ...productData,
//                 name: event.target.value,
//               })
//             }
//             placeholder="Enter product name"
//           />
//         </div>
//         <div className="form-group">
//           <label>Product Price</label>
//           <input
//             type="number"
//             onChange={() =>
//               setProductData({
//                 ...productData,
//                 price: event.target.value,
//               })
//             }
//             value={productData.price}
//             placeholder="Enter product price"
//           />
//         </div>
//         <div className="form-group">
//           <label>Product Description</label>
//           <textarea
//             onChange={() =>
//               setProductData({
//                 ...productData,
//                 description: event.target.value,
//               })
//             }
//             placeholder="Enter product description"
//           />
//         </div>
//         <div className="form-group">
//           <label>Product stockQuantity</label>
//           <input
//             type="number"
//             // value={createProduct.productStockQuantity}
//             onChange={() =>
//               setProductData({
//                 ...productData,
//                 stockQuantity: event.target.value,
//               })
//             }
//             placeholder="Enter product price"
//           />
//         </div>
//         <div className="form-group">
//           <label>Product categoryID</label>
//           <input
//             type="test"
//             // value={createProduct.productCategoryID}
//             onChange={() =>
//               setProductData({
//                 ...productData,
//                 categoryID: event.target.value,
//               })
//             }
//             placeholder="Enter product categoryID"
//           />
//         </div>
//         <div className="form-group">
//           <label>Product Image</label>
//           <input
//             type="file"
//             id="image"
//             accept="image/*"
//             onChange={() => {
//               const file = event.target.files[0];
//               if (file) {
//                 const imageUrl = URL.createObjectURL(file);
//                 setProductData({
//                   ...productData,
//                   image: imageUrl,
//                 });
//               }
//             }}
//           />{" "}
//           <div>
//             <h3>Image Preview:</h3>
//             <img
//               alt="Product"
//               style={{ maxWidth: "200px", maxHeight: "200px" }}
//             />
//           </div>
//         </div>

//         <button type="submit" className="btn-submit">
//           Update Product
//         </button>
//       </form>
//       <ToastContainer />
//     </>
//   );
// }

// using material ui 
import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { ProductContext } from "../../context/ProductContextData";
import {
  Box,
  Grid,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Typography,
  CircularProgress,
  Paper,
  IconButton,
} from "@mui/material";
import { Upload as UploadIcon, Edit as EditIcon } from "@mui/icons-material";

export default function UpdateProductForm() {
  const [selectProduct, setSelectProduct] = useState();
  const {
    products,
    isLoading,
    error,
    productData,
    setProductData,
    setProductID,
    setUpdateProductOrder,
    productUpdateResponse,
    setProductUpdateResponse,
    setAdminToken,
  } = useContext(ProductContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("login")
      ? JSON.parse(localStorage.getItem("login"))
      : "";
    setAdminToken(token.userToken);
    setProductID(selectProduct);
    setUpdateProductOrder(true);
    setProductUpdateResponse(true);
  };

  useEffect(() => {
    if (productUpdateResponse) {
      setProductUpdateResponse(false);
      toast.success("Product is updated");
      setProductData({
        ...productData,
        name: "",
        price: "",
        description: "",
        stockQuantity: "",
        categoryID: "",
        image: "",
      });
    }
  }, [productUpdateResponse]);

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#333",
          marginBottom: 4,
          padding: 1,
          marginTop: 2,
          textAlign: "center",
        }}
      >
        Update Product
      </Typography>
      <Paper
        elevation={5}
        sx={{
          padding: 4,
          borderRadius: 2,
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#fafafa",
          boxShadow: 2,
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {/* Select Product */}
            <FormControl fullWidth>
              <InputLabel>Product</InputLabel>
              <Select
                value={selectProduct}
                onChange={(e) => setSelectProduct(e.target.value)}
                label="Select a product"
                required
              >
                <MenuItem value="">Select a product</MenuItem>
                {products.map((product) => (
                  <MenuItem key={product.productId} value={product.productId}>
                    <p style={{ color: "blue" }}>{product.name}</p> | ID:
                    {product.productId} 
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Product Name */}
            <TextField
              label="Product Name"
              value={productData.name}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  name: e.target.value,
                })
              }
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: <EditIcon sx={{ color: "#1976d2" }} />,
              }}
            />

            {/* Product Price */}
            <TextField
              label="Product Price"
              type="number"
              value={productData.price}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  price: e.target.value,
                })
              }
              inputProps={{ min: "0" }} // Prevent negative numbers
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: <EditIcon sx={{ color: "#1976d2" }} />,
              }}
            />

            {/* Product Description */}
            <TextField
              label="Product Description"
              value={productData.description}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  description: e.target.value,
                })
              }
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              InputProps={{
                startAdornment: <EditIcon sx={{ color: "#1976d2" }} />,
              }}
            />

            {/* Product Stock Quantity */}
            <TextField
              label="Product Stock Quantity"
              type="number"
              value={productData.stockQuantity}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  stockQuantity: e.target.value,
                })
              }
              inputProps={{ min: "0" }} // Prevent negative numbers
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: <EditIcon sx={{ color: "#1976d2" }} />,
              }}
            />

            {/* Product Category ID */}
            <TextField
              label="Product Category ID"
              value={productData.categoryID}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  categoryID: e.target.value,
                })
              }
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: <EditIcon sx={{ color: "#1976d2" }} />,
              }}
            />

            {/* Product Image */}
            <Box>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const imageUrl = URL.createObjectURL(file);
                    setProductData({
                      ...productData,
                      image: imageUrl,
                    });
                  }
                }}
              />
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="body2">Image Preview:</Typography>
                {productData.image && (
                  <img
                    alt="Product"
                    src={productData.image}
                    style={{
                      maxWidth: "200px",
                      maxHeight: "200px",
                      marginTop: 8,
                    }}
                  />
                )}
              </Box>
            </Box>

            {/* Update Product Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                width: "100%",
                marginTop: 3,
                padding: "12px",
                fontSize: "16px",
                textTransform: "none",
                display: isLoading ? "none" : "inline-block",
              }}
              disabled={isLoading}
              startIcon={
                isLoading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  <UploadIcon />
                )
              }
            >
              {isLoading ? "Updating..." : "Update Product"}
            </Button>

            {/* Loading Indicator */}
            {isLoading && (
              <Box sx={{ textAlign: "center", marginTop: 2 }}>
                <CircularProgress size={30} color="primary" />
              </Box>
            )}
          </Box>
        </form>
      </Paper>
      <ToastContainer />
    </>
  );
}
