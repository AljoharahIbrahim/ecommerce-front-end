import React, { useContext } from "react";

import { ProductContext } from "../context/ProductContextData";
import { Link } from "react-router-dom";

export default function ProductsList() {
  // import product context
  const { products, isLoading, error } = useContext(ProductContext);

  if (isLoading) {
    return <p>Products are loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }
  if (products) {
    return (
      <>
        {products.map((product) => (
          <div key={product.productId}>
            <p>
              <strong>Name:</strong>
              {product.name}
            </p>
            <p>
              <strong>Category:</strong>
              {product.categoryName}
            </p>
            <p>
              <strong>StockQuantity:</strong>
              {product.stockQuantity}
            </p>
            <p>
              <strong>updatedDate:</strong>
              {product.updatedDate}
            </p>
            <br></br>
            <Link to={`/productDetails/${product.productId}`} state={product}>
              Show Details
            </Link>
          </div>
        ))}
      </>
    );
  }
}
