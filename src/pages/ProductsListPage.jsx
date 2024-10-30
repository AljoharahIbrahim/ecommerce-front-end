import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContextData";

export default function ProductsListPage() {
  // import product context
  const context = useContext(ProductContext);
  // console.log("context ", context.products);

  return (
    <div>
      <h2>Products List Page</h2>
      {context.products.length > 0 ? (
        context.products.map((product) => (
          <div key={product.id}>
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
        ))
      ) : (
        <p>no prodect found </p>
      )}
    </div>
  );
}
