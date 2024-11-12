import React, { useContext, useState } from "react";

import { CartContext } from "../../context/CartContextData";

import { Alert, AlertTitle } from "@mui/material";

export default function Carts() {
  const {
    setUserToken,
    setOrderItems,
    cart,
    deleteFromCart,
    addToCart,
    updateLessQuantity,
    setMethod,
    responeSuccessCreateOrder,
  } = useContext(CartContext);

  const [showSuccess, setShowSuccess] = useState(false);

  const user = JSON.parse(localStorage.getItem("login"));
  setUserToken(user.userToken);

  //handle checkout => edit setOrderItems state => depence to call oreder entPoint
  const handelCheckout = (event) => {
    event.preventDefault();

    setOrderItems(cart);
    if (responeSuccessCreateOrder) {
      setShowSuccess(true);
    }
  };

  if (cart.length < 1) {
    return <h2>No product in cart</h2>;
  }

  return (
    <div>
      <form onSubmit={handelCheckout}>
        <div className="cart-container">
          <h1>Your Shopping Cart</h1>
          {cart.map((item) => (
            <div className="product-card" key={item.itemID}>
              <div className="cart-item">
                <div className="item-details">
                  <span className="item-name">Name:{item.name}</span>
                  <span className="item-price">Price:${item.price}</span>
                </div>
                <button onClick={() => updateLessQuantity(item)}> - </button>
                <p>{item.quantity} </p>
                <button onClick={() => addToCart(item)}> + </button>
                <span className="item-total">
                  {" "}
                  = ${item.quantity * item.price}
                </span>
              </div>

              <div className="cart-summary">
                <p>
                  Total:{" "}
                  <span className="total-price">
                    ${item.quantity * item.price}
                  </span>
                </p>
                <button onClick={() => deleteFromCart(item)}>Remove</button>
              </div>
            </div>
          ))}
          <br></br>
          <form>
            <strong>Please select your favorite Payment Method:</strong>{" "}
            <br></br>
            <input
              type="radio"
              id="CreditCard"
              name="options"
              value="CreditCard"
              onChange={(e) => setMethod(e.target.value)}
            />
            <label htmlFor="html"> CreditCard</label> <br></br>
            <input
              type="radio"
              id="PayPal"
              name="options"
              value="PayPal"
              onChange={(e) => setMethod(e.target.value)}
            />
            <label htmlFor="PayPal"> PayPal</label>
          </form>

          <br></br>
          <strong>Shipment details To</strong>
          <p>Name: {user.state.userName}</p>
          <p>Address: {user.state.address}</p>
          <p>Phone: {user.state.phoneNumber}</p>
          <br></br>
          <button type="submit" className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </form>

      {showSuccess && (
        <Alert severity="success" style={{ marginTop: "20px" }}>
          <AlertTitle>Success</AlertTitle>
          Your order was successful!
        </Alert>
      )}
    </div>
  );
}
