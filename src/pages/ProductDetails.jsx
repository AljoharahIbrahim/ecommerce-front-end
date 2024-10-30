import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function ProductDetails() {
  const parms = useParams();
  console.log(parms);
  const { state } = useLocation();
  console.log(state);
  if (!state) {
    return <h1>product not found</h1>;
  }
  return (
    <>
      <h2> product details</h2>
      <strong>Name:</strong>
      {state.name}
      <p>
        <strong>Category:</strong>
        {state.categoryName}
      </p>
      <p>
        <strong>StockQuantity:</strong>
        {state.stockQuantity}
      </p>
      <strong>updatedDate:</strong>
      {state.updatedDate}
    </>
  );
}
