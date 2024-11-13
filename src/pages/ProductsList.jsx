// import React, { useContext, useEffect, useState } from "react";

// import { ProductContext } from "../context/ProductContextData";
// import { Link } from "react-router-dom";

// import SearchProduct from "../components/products/SearchProduct";
// import Error from "./Error";
// import Pagenation from "../components/products/Pagenation";
// import { CartContext } from "../context/CartContextData";

// export default function ProductsList() {
//   // import product context
//   const { products, isLoading, error } = useContext(ProductContext);
//   //import cart context
//   const { cart, addToCart, deleteFromCart } = useContext(CartContext);
//   // check if the use is login => the add to cart button will show
//   const [isLogin, setIsLogin] = useState(false);
//   // using useEffect and local storage to check about use is login or not
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("login"));
//     if (user && user.isSignIn) {
//       setIsLogin(user.isSignIn);
//     }
//   }, []);
//   //
//   if (isLoading) {
//     return <p>Products are loading...</p>;
//   }

//   if (error) {
//     return <>{<Error message={error.message} />}</>;
//   }

//   if (products) {
//     // Check if the product is already in the cart
//     let isInCart;

//     return (
//       <>
//         <div className="products">
//           <SearchProduct />
//           <div className="product-grid">
//             {products.map((product) => (
//               <div className="product-card" key={product.productId}>
//                 {
//                   (isInCart = cart.some(
//                     (item) => item.productId === product.productId
//                   ))
//                 }

//                 <img src={product.image} alt={product.name} />
//                 <p>
//                   <strong>Name: </strong>
//                   {product.name}
//                 </p>
//                 <p>
//                   <strong>Category: </strong>
//                   {product.categoryName}
//                 </p>
//                 <p>
//                   <strong>StockQuantity: </strong>
//                   {product.stockQuantity}
//                 </p>
//                 <p>
//                   <strong>Price: </strong>
//                   {product.price}
//                 </p>
//                 <br></br>
//                 <Link
//                   to={`/productDetails/${product.productId}`}
//                   state={product}
//                 >
//                   Show Details
//                 </Link>
//                 {}
//                 <br></br>
//                 {/* <Link
//                   to={`/cart/${product.productId}`}
//                   state={product}
//                   style={{ display: isLogin ? "inline" : "none" }}
//                   onClick={() => addToCart(product)}
//                 >
//                   Add to Cart
//                 </Link> */}
//                 <button onClick={() => addToCart(product)} >
//                   {isInCart ? "Already in Cart" : "Add To Cart"}
//                 </button>
//                 <button
//                   onClick={() => deleteFromCart(product)}
//                   // disabled={isInCart}
//                 > Delete
//                   {/* {isInCart ? "Already in Cart" : "Add To Cart"} */}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//         <Pagenation />
//       </>
//     );
//   }
// }

// using material ui
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContextData";
import { Link } from "react-router-dom";
import SearchProduct from "../components/products/SearchProduct";
import Error from "./Error";
import Pagenation from "../components/products/Pagenation";
import { CartContext } from "../context/CartContextData";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Stack,
} from "@mui/material";
import Loader from "../components/Loader";

export default function ProductsList() {
  const { products, isLoading, error } = useContext(ProductContext);
  const { cart, addToCart, deleteFromCart } = useContext(CartContext);

  // Pagination state
  const [pageNumber, setPageNumber] = useState(1);
  const productsPerPage = 8; // Number of products per page
  const totalPages = Math.ceil(products.length / productsPerPage);

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("login"));
    if (user && user.isSignIn) {
      setIsLogin(user.isSignIn);
    }
  }, []);

  const handlePageChange = (newPage) => {
    setPageNumber(newPage);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <>{<Error message={error.message} />}</>;
  }

  if (products) {
    const indexOfLastProduct = pageNumber * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    return (
      <>
        <div className="products">
          <SearchProduct />
          {/* Product Grid */}
          <Grid container spacing={4} sx={{ marginTop: 2 }}>
            {currentProducts.map((product) => {
              const isInCart = cart.some(
                (item) => item.productId === product.productId
              );

              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                  key={product.productId}
                >
                  <Card
                    sx={{
                      height: "auto",
                      width: "100%",
                      boxShadow: 3,
                      borderRadius: 2,
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: 6,
                      },
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="350"
                      image={product.image}
                      alt={product.name}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent sx={{ flex: 1 }}>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: "bold", marginBottom: 2 }}
                      >
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ marginBottom: 1 }}
                      >
                        <strong>Category:</strong> {product.categoryName}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ marginBottom: 1 }}
                      >
                        <strong>Stock:</strong> {product.stockQuantity}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ marginBottom: 2 }}
                      >
                        <strong>Price:</strong> ${product.price}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        padding: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Button
                        component={Link}
                        to={`/productDetails/${product.productId}`}
                        state={product}
                        variant="outlined"
                        size="small"
                        sx={{ width: "100%" }}
                      >
                        Show Details
                      </Button>
                      <Button
                        onClick={() => addToCart(product)}
                        variant="contained"
                        size="small"
                        color="primary"
                        disabled={isInCart}
                        sx={{ width: "100%" }}
                        style={{ display: isLogin ? "inline" : "none" }}
                      >
                        {isInCart ? "Already in Cart" : "Add To Cart"}
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          {/* Pagination Section Below the Product Cards */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 3,
              marginBottom: 3,
            }}
          >
            <Pagenation
              currentPage={pageNumber}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </Box>
        </div>
      </>
    );
  }

  return null;
}
