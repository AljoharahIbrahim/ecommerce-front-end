import React, { useContext } from "react";

import { ProductContext } from "../context/ProductContextData";
import { Link } from "react-router-dom";

import SearchProduct from "../components/products/SearchProduct";
import Error from "./Error";

export default function ProductsList() {
  // import product context
  const { products, isLoading, error } = useContext(ProductContext);
  // console.log("products.length" + products.length);
  if (isLoading) {
    return <p>Products are loading...</p>;
  }

  if (error) {
    return <>{<Error message={error.message} />}</>;
  }

  if (products) {
    return (
      <>
        <div className="products">
          <SearchProduct />
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.productId}>
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
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
