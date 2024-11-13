// import React, { useContext, useEffect } from "react";

// import { ProductContext } from "../../context/ProductContextData";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function DeleteProductForm() {
//   // this feature for admin only
//   const {
//     deleteProductID,
//     setDeleteProductID,
//     setAdminToken,
//     setCreateDeleteProductOrder,
//     productDeleteResponse,
//   } = useContext(ProductContext);
//   const handleOnSubmit = (event) => {
//     event.preventDefault();
//     // get admin token
//     const token = localStorage.getItem("login")
//       ? JSON.parse(localStorage.getItem("login"))
//       : "";
//     console.log("token", token.userToken);
//     setAdminToken(token.userToken);
//     setCreateDeleteProductOrder(true);
//   };

//   useEffect(() => {
//     if (productDeleteResponse) {
//       // return Success message
//       toast.success("Product is deleted");
//       setDeleteProductID("");
//     }
//   }, productDeleteResponse);

//   return (
//     <div className="delete-product">
//       <h3>DeleteProductForm</h3>
//       <form onSubmit={handleOnSubmit}>
//         <div className="form-group">
//           <label htmlFor="productId"></label>
//           <input
//             type="text"
//             id="productId"
//             value={deleteProductID}
//             onChange={(event) => {
//               setDeleteProductID(event.target.value);
//             }}
//             required
//           />
//           <button type="submit" name="delete-button">
//             Delete Product
//           </button>
//         </div>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// }

// using material UI 
import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContextData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Button, TextField, Typography, Container } from "@mui/material";

export default function DeleteProductForm() {
  // this feature for admin only
  const {
    deleteProductID,
    setDeleteProductID,
    setAdminToken,
    setCreateDeleteProductOrder,
    productDeleteResponse,
  } = useContext(ProductContext);

  // Handle form submit
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("login")
      ? JSON.parse(localStorage.getItem("login"))
      : "";
    setAdminToken(token.userToken);
    setCreateDeleteProductOrder(true);
  };

  // Show success message after successful deletion
  useEffect(() => {
    if (productDeleteResponse) {
      toast.success("Product is deleted");
      setDeleteProductID(""); // Reset deleteProductID after deletion
    }
  }, [productDeleteResponse]);

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Box
        sx={{
          padding: 3,
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Delete Product
        </Typography>

        {/* Form to Delete Product */}
        <form onSubmit={handleOnSubmit}>
          <TextField
            label="Product ID"
            fullWidth
            value={deleteProductID}
            onChange={(event) => {
              setDeleteProductID(event.target.value);
            }}
            required
            sx={{ marginBottom: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="error"
            fullWidth
            sx={{
              padding: "10px",
              fontSize: "1rem",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#d32f2f", // Dark red color on hover
              },
            }}
          >
            Delete Product
          </Button>
        </form>
      </Box>
      <ToastContainer />
    </Container>
  );
}
