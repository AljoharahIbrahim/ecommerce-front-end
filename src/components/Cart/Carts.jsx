import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContextData";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Grid,
  Paper,
} from "@mui/material";

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

  // Handle checkout => edit setOrderItems state => depends on calling order endpoint
  const handleCheckout = (event) => {
    event.preventDefault();
    setOrderItems(cart);
    if (responeSuccessCreateOrder) {
      setShowSuccess(true);
    }
  };

  useEffect(() => {
    console.log("showSuccess state changed:", showSuccess); // Debugging the state change
  }, [showSuccess]);

  if (cart.length < 1) {
    return (
      <Box sx={{ textAlign: "center", marginTop: 2 }}>
        <Typography variant="h6" color="textSecondary">
          No products in cart
        </Typography>
      </Box>
    );
  }

  // Calculate total price of all items in the cart
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <form onSubmit={handleCheckout}>
        <Box sx={{ padding: 3 }}>
          {/* Header Section */}
          <Typography variant="h4" align="center" gutterBottom>
            Your Shopping Cart
          </Typography>

          {/* Cart Items - Horizontal Cards Layout */}
          <Grid container spacing={3}>
            {cart.map((item) => (
              <Grid item xs={12} sm={12} md={12} key={item.itemID}>
                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                  <Card
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: 2,
                      boxShadow: 3,
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      {/* Product Image Placeholder */}
                      <Box
                        sx={{
                          width: 120,
                          height: 120,
                          backgroundColor: "#f0f0f0",
                          borderRadius: 1,
                          marginRight: 2,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{ width: 120, height: 120 }}
                          />
                        ) : (
                          <Typography variant="body2" color="textSecondary">
                            No Image Available
                          </Typography>
                        )}
                      </Box>

                      {/* Product Info */}
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" noWrap>
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Price: ${item.price}
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            marginTop: 1,
                          }}
                        >
                          {/* Decrease Quantity Button */}
                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => updateLessQuantity(item)}
                            sx={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              padding: "0",
                              marginRight: 1,
                            }}
                          >
                            -
                          </Button>

                          {/* Quantity Display */}
                          <Typography variant="body1">
                            {item.quantity}
                          </Typography>

                          {/* Increase Quantity Button */}
                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => addToCart(item)}
                            sx={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              padding: "0",
                              marginLeft: 1,
                            }}
                          >
                            +
                          </Button>
                        </Box>
                      </Box>

                      {/* Product Price */}
                      <Box sx={{ textAlign: "right" }}>
                        <Typography variant="h6" color="primary">
                          ${item.quantity * item.price}
                        </Typography>
                        <Button
                          variant="text"
                          color="error"
                          onClick={() => deleteFromCart(item)}
                          sx={{ fontSize: "14px", paddingTop: 1 }}
                        >
                          Remove
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Total Price of all items */}
          <Box
            sx={{ marginTop: 3, display: "flex", justifyContent: "flex-end" }}
          >
            <Typography variant="h5" color="textPrimary">
              Total Price: ${totalPrice.toFixed(2)}
            </Typography>
          </Box>

          {/* Payment Method Section */}
          <Box sx={{ marginTop: 3 }}>
            <Typography variant="h6" gutterBottom>
              Please select your favorite Payment Method:
            </Typography>
            <FormControl component="fieldset" sx={{ marginTop: 1 }}>
              <RadioGroup
                aria-label="payment-method"
                name="payment-method"
                onChange={(e) => setMethod(e.target.value)}
                defaultValue="CreditCard"
              >
                <FormControlLabel
                  value="CreditCard"
                  control={<Radio />}
                  label="Credit Card"
                />
                <FormControlLabel
                  value="PayPal"
                  control={<Radio />}
                  label="PayPal"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          {/* Shipment Details */}
          <Box sx={{ marginTop: 3 }}>
            <Typography variant="h6" gutterBottom>
              Shipment details To:
            </Typography>
            <Typography>Name: {user.state.userName}</Typography>
            <Typography>Address: {user.state.address}</Typography>
            <Typography>Phone: {user.state.phoneNumber}</Typography>
          </Box>

          {/* Checkout Button */}
          <Box sx={{ textAlign: "center", marginTop: 3 }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                padding: "10px 20px",
                borderRadius: "30px",
                fontSize: "16px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </Box>
      </form>

      {/* Success Alert */}
      {showSuccess && (
        <Alert severity="success" sx={{ marginTop: 3 }}>
          <AlertTitle>Success</AlertTitle>
          Your order was successful!
        </Alert>
      )}
    </div>
  );
}
