import React, { useContext, useEffect, useState } from "react";

import { ProductContext } from "../context/ProductContextData";
import { Link } from "react-router-dom";

import SearchProduct from "../components/products/SearchProduct";
import Error from "./Error";
import Pagenation from "../components/products/Pagenation";
import { CartContext } from "../context/CartContextData";

export default function ProductsList() {
  // import product context
  const { products, isLoading, error } = useContext(ProductContext);
  //import cart context
  const { cart, addToCart, deleteFromCart } = useContext(CartContext);
  // check if the use is login => the add to cart button will show
  const [isLogin, setIsLogin] = useState(false);
  // using useEffect and local storage to check about use is login or not
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("login"));
    if (user && user.isSignIn) {
      setIsLogin(user.isSignIn);
    }
  }, []);
  //
  if (isLoading) {
    return <p>Products are loading...</p>;
  }

  if (error) {
    return <>{<Error message={error.message} />}</>;
  }

  if (products) {
    // Check if the product is already in the cart
    let isInCart;

    return (
      <>
        <div className="products">
          <SearchProduct />
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.productId}>
                {
                  (isInCart = cart.some(
                    (item) => item.productId === product.productId
                  ))
                }

                <img src={product.image} alt={product.name} />
                <p>
                  <strong>Name: </strong>
                  {product.name}
                </p>
                <p>
                  <strong>Category: </strong>
                  {product.categoryName}
                </p>
                <p>
                  <strong>StockQuantity: </strong>
                  {product.stockQuantity}
                </p>
                <p>
                  <strong>Price: </strong>
                  {product.price}
                </p>
                <br></br>
                <Link
                  to={`/productDetails/${product.productId}`}
                  state={product}
                >
                  Show Details
                </Link>
                {}
                <br></br>
                {/* <Link
                  to={`/cart/${product.productId}`}
                  state={product}
                  style={{ display: isLogin ? "inline" : "none" }}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Link> */}
                <button onClick={() => addToCart(product)} >
                  {isInCart ? "Already in Cart" : "Add To Cart"} 
                </button>
                <button
                  onClick={() => deleteFromCart(product)}
                  // disabled={isInCart}
                > Delete
                  {/* {isInCart ? "Already in Cart" : "Add To Cart"} */}
                </button>
              </div>
            ))}
          </div>
        </div>
        <Pagenation />
      </>
    );
  }
}
