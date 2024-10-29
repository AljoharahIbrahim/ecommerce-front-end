import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContextData";

export default function ProductsListPage() {
  // import product context
  const context = useContext(ProductContext);
  console.log(" ***** from ProductsListPage");
  console.log("context ", context.products);
  return (
    <div>
      <h1>ProductsListPage</h1>
      {/* {Products.length > 0 ? (
        Products.map((product) => <div key={product.id}>{product.name}</div>)
      ) :
        (
        <p>no prodect found </p>
      )} */}
      {/* {Products} */}
    </div>
  );
}
