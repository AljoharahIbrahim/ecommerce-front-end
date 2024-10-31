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
      <h2> Product Details</h2>
      <p>
        <strong>Name: </strong>
        {state.name}
      </p>
      <p>
        <strong>Category: </strong>
        {state.categoryName}
      </p>
      <p>
        <strong>StockQuantity: </strong>
        {state.stockQuantity}
      </p>
      <p>
        <strong>Price: </strong>
        {state.price}
      </p>
      <p>
        <strong>Description: </strong>
        {state.description}
      </p>
      <strong>UpdatedDate: </strong>
      {state.updatedDate}
    </>
  );
}
