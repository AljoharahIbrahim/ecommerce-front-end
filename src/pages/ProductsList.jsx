import React, { useContext } from "react";

import { ProductContext } from "../context/ProductContextData";

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
      <div>
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
          </div>
        ))}
      </div>
    );
  }
}
