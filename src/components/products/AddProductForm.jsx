// import React, { useEffect, useState } from "react";

// import { useContext } from "react";
// import { ProductContext } from "../../context/ProductContextData";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function AddProductForm() {
//   // this feature for admin only
//   const {
//     createProduct,
//     setCreateProduct,
//     setAdminToken,
//     createProductStatus,
//     setCreateProductStatus,
//     responeSuccessCreateProduct,
//     setResponeSuccessCreateProduct,
//   } = useContext(ProductContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // get admin token
//     const token = localStorage.getItem("login")
//       ? JSON.parse(localStorage.getItem("login"))
//       : "";
//     console.log("token", token.userToken);
//     setAdminToken(token.userToken);
//     setCreateProduct({
//       ...createProduct,
//       productName: createProduct.productName,
//       productPrice: createProduct.productPrice,
//       productDescription: createProduct.productDescription,
//       productImage: createProduct.productImage,
//       productStockQuantity: createProduct.productStockQuantity,
//       productCategoryID: createProduct.productCategoryID,
//     });
//     setCreateProductStatus(true);
//     // setResponeSuccessCreateProduct(true);
//   };

//   useEffect(() => {
//     console.log(
//       "responeSuccessCreateProduct",
//       responeSuccessCreateProduct,
//       "createProductStatus",
//       createProductStatus
//     );
//     if (responeSuccessCreateProduct) {
//       setResponeSuccessCreateProduct(false);
//       // return Success message
//       toast.success("Product is created");
//       // reset the input value form
//       setCreateProduct({
//         ...createProduct,
//         productName: "",
//         productPrice: "",
//         productDescription: "",
//         productImage: "",
//         productStockQuantity: "",
//         productCategoryID: "",
//       });
//     }
//   }, [responeSuccessCreateProduct]);

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Product Name</label>
//           <input
//             type="text"
//             value={createProduct.productName}
//             onChange={() =>
//               setCreateProduct({
//                 ...createProduct,
//                 productName: event.target.value,
//               })
//             }
//             placeholder="Enter product name"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Product Price</label>
//           <input
//             type="number"
//             value={createProduct.productPrice}
//             onChange={() =>
//               setCreateProduct({
//                 ...createProduct,
//                 productPrice: event.target.value,
//               })
//             }
//             placeholder="Enter product price"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Product Description</label>
//           <textarea
//             value={createProduct.productDescription}
//             onChange={() =>
//               setCreateProduct({
//                 ...createProduct,
//                 productDescription: event.target.value,
//               })
//             }
//             placeholder="Enter product description"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Product stockQuantity</label>
//           <input
//             type="number"
//             value={createProduct.productStockQuantity}
//             onChange={() =>
//               setCreateProduct({
//                 ...createProduct,
//                 productStockQuantity: event.target.value,
//               })
//             }
//             placeholder="Enter product price"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Product categoryID</label>
//           <input
//             type="test"
//             value={createProduct.productCategoryID}
//             onChange={() =>
//               setCreateProduct({
//                 ...createProduct,
//                 productCategoryID: event.target.value,
//               })
//             }
//             placeholder="Enter product categoryID"
//             required
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
//                 setCreateProduct({
//                   ...createProduct,
//                   productImage: imageUrl,
//                 });
//               } else {
//                 setCreateProduct({
//                   ...createProduct,
//                   productImage: "",
//                 });
//               }
//             }}
//             required
//           />{" "}
//           {createProduct.productImage && (
//             <div>
//               <h3>Image Preview:</h3>
//               <img
//                 src={createProduct.productImage}
//                 alt="Product"
//                 style={{ maxWidth: "200px", maxHeight: "200px" }}
//               />
//             </div>
//           )}
//         </div>

//         <button type="submit" className="btn-submit">
//           Add Product
//         </button>
//       </form>
//       <ToastContainer />
//     </>
//   );
// }


// using material ui 

import React, { useEffect, useState, useContext } from "react";
import { ProductContext } from "../../context/ProductContextData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  InputAdornment,
  CircularProgress,
  AlertTitle,
  Alert,
} from "@mui/material";

export default function AddProductForm() {
  const {
    createProduct,
    setCreateProduct,
    setAdminToken,
    createProductStatus,
    setCreateProductStatus,
    responeSuccessCreateProduct,
    setResponeSuccessCreateProduct,
  } = useContext(ProductContext);

    const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("login")
      ? JSON.parse(localStorage.getItem("login"))
      : "";
    setAdminToken(token.userToken);
    setCreateProduct({
      ...createProduct,
      productName: createProduct.productName,
      productPrice: createProduct.productPrice,
      productDescription: createProduct.productDescription,
      productImage: createProduct.productImage,
      productStockQuantity: createProduct.productStockQuantity,
      productCategoryID: createProduct.productCategoryID,
    });
    setCreateProductStatus(true);
  };

  useEffect(() => {
    if (responeSuccessCreateProduct) {
      setResponeSuccessCreateProduct(false);
      setShowSuccess(true);
      // toast.success("Product is created");
      setCreateProduct({
        ...createProduct,
        productName: "",
        productPrice: "",
        productDescription: "",
        productImage: "",
        productStockQuantity: "",
        productCategoryID: "",
      });
      setShowSuccess(false);

    }
  }, [responeSuccessCreateProduct]);

    useEffect(() => {
      console.log("showSuccess state changed:", showSuccess); // Debugging the state change
    }, [showSuccess]);

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Box
        sx={{
          padding: 4,
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Add New Product
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Product Name"
                fullWidth
                value={createProduct.productName}
                onChange={(e) =>
                  setCreateProduct({
                    ...createProduct,
                    productName: e.target.value,
                  })
                }
                placeholder="Enter product name"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Product Price"
                type="number"
                inputProps={{ min: "0" }} // Prevent negative numbers
                fullWidth
                value={createProduct.productPrice}
                onChange={(e) =>
                  setCreateProduct({
                    ...createProduct,
                    productPrice: e.target.value,
                  })
                }
                placeholder="Enter product price"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Product Description"
                multiline
                rows={4}
                fullWidth
                value={createProduct.productDescription}
                onChange={(e) =>
                  setCreateProduct({
                    ...createProduct,
                    productDescription: e.target.value,
                  })
                }
                placeholder="Enter product description"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Product Stock Quantity"
                type="number"
                fullWidth
                value={createProduct.productStockQuantity}
                inputProps={{ min: "0" }} // Prevent negative numbers
                onChange={(e) =>
                  setCreateProduct({
                    ...createProduct,
                    productStockQuantity: e.target.value,
                  })
                }
                placeholder="Enter stock quantity"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Product Category ID"
                fullWidth
                value={createProduct.productCategoryID}
                onChange={(e) =>
                  setCreateProduct({
                    ...createProduct,
                    productCategoryID: e.target.value,
                  })
                }
                placeholder="Enter category ID"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const imageUrl = URL.createObjectURL(file);
                    setCreateProduct({
                      ...createProduct,
                      productImage: imageUrl,
                    });
                  } else {
                    setCreateProduct({ ...createProduct, productImage: "" });
                  }
                }}
                required
                style={{ width: "100%" }}
              />
              {createProduct.productImage && (
                <Box sx={{ mt: 2, textAlign: "center" }}>
                  <Typography variant="body1" gutterBottom>
                    Image Preview:
                  </Typography>
                  <img
                    src={createProduct.productImage}
                    alt="Product Preview"
                    style={{
                      maxWidth: "200px",
                      maxHeight: "200px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              )}
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  padding: "10px",
                  fontSize: "1rem",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#1976d2",
                  },
                }}
              >
                Add Product
              </Button>
            </Grid>
          </Grid>
        </form>
        {/* Success Alert */}
        {showSuccess && (
          <Alert severity="success" sx={{ marginTop: 3 }}>
            <AlertTitle>Success</AlertTitle>
            Your order was successful!
          </Alert>
        )}
        <ToastContainer />
      </Box>
    </Container>
  );
}
