import React, { useContext, useEffect } from "react";

import { ProductContext } from "../../context/ProductContextData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DeleteProductForm() {
  // this feature for admin only
  const {
    deleteProductID,
    setDeleteProductID,
    setAdminToken,
    setCreateDeleteProductOrder,
    productDeleteResponse,
  } = useContext(ProductContext);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    // get admin token
    const token = localStorage.getItem("login")
      ? JSON.parse(localStorage.getItem("login"))
      : "";
    console.log("token", token.userToken);
    setAdminToken(token.userToken);
    setCreateDeleteProductOrder(true);
  };

  useEffect(() => {
    if (productDeleteResponse) {
      // return Success message
      toast.success("Product is deleted");
      setDeleteProductID("");
    }
  }, productDeleteResponse);

  return (
    <div className="delete-product">
      <h3>DeleteProductForm</h3>
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="productId"></label>
          <input
            type="text"
            id="productId"
            value={deleteProductID}
            onChange={(event) => {
              setDeleteProductID(event.target.value);
            }}
            required
          />
          <button type="submit" name="delete-button">
            Delete Product
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
