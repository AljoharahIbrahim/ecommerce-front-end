import PropTypes from "prop-types";
import React, { createContext, useEffect, useState } from "react";
import { createAnewOrder } from "../services/cartService";

export const CartContext = createContext();

export default function CartContextData({ children }) {
  // local storage
  const loadCartFromLocalStorage = () => {
    const cartData = localStorage.getItem("cart");
    console.log(JSON.stringify(cartData), "<<<cartData");
    return cartData ? JSON.parse(cartData) : [];
  };

  const [cart, setCart] = useState(loadCartFromLocalStorage);

  const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  // const saveCartToLocalStorage = (cartItems) => {

  //   // setCart[[...cart, cartItems]];
  //   setCart[{ ...cart, cartItems }];
  //   localStorage.setItem("cart", JSON.stringify(cartItems));

  // };

  // useEffect(() => {
  //   saveCartToLocalStorage();
  // }, [cart]);

  //
  // MAnage the Data for card list
  // A. add new to cart = > two cases
  // case 1: the product exist => just update the quantity
  // case 2: the product is new => add the product to the cart
  // B. delete the cart (using productId) => use filter and set the object exept the product

  // loading and error to manage the status of the connection with service
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // mmain variables to create order (UserId"optional", orderItems, method, userToken) => that will send api
  // const [orderItems, setOrderItems] = useState({
  //     productId: "",
  //     quantity: "",
  // });
  const [orderItems, setOrderItems] = useState([]);
  const [method, setMethod] = useState("CreditCard");
  const [userToken, setUserToken] = useState();

  // cartList to cart Component " print the list "
  const [cartList, setCartList] = useState({
    UserId: "",
    productId: "",
    price: 0,
    quantity: 0,
    totalPrice: 0,
  });

  // this usestate for manage the response of create an order
  const [responeSuccessCreateOrder, setResponeSuccessCreateOrder] =
    useState(false);

  // cart functions

  const createNewOrder = async () => {
    if (!orderItems  || !method || !userToken) return; 
      try {
        setIsLoading(true);
        const response = await createAnewOrder(orderItems, method, userToken);
        console.log(response);
        setResponeSuccessCreateOrder(true);
        localStorage.removeItem("cart");
        setCart([]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
  };

  // useEffect to call the cart functionality
  // 1. for createNewOrder (POST) , dependece on setOrderItems (when press pocesees the order in cart page)
  useEffect(() => {
    createNewOrder();
  }, [orderItems]);

  //2 load loadCartFromLocalStorage
const addToCart = (product) => {
  setCart((prevCart) => {
    // Find if the product already exists in the cart
    const existingProductIndex = prevCart.findIndex(
      (item) => item.productId === product.productId
    );

    let updatedCart;

    // If product exists in the cart, update the quantity
    if (existingProductIndex >= 0) {
      updatedCart = prevCart.map(
        (item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 } // Increment quantity
            : item // Keep other items unchanged
      );
    } else {
      updatedCart = [...prevCart, { ...product, quantity: 1 }];
    }

    // Save the updated cart to localStorage
    saveCartToLocalStorage(updatedCart);

    return updatedCart;
  });
};

const updateLessQuantity = (product) => {
  console.log("updateLessQuantity product", product);

  setCart((prevCart) => {
    const updatedCart = prevCart.map((item) => {
      if (item.productId === product.productId) {
        return {
          ...item,
          quantity: item.quantity > 1 ? item.quantity - 1 : 1,
        };
      }
      return item; // Don't modify the other items
    });

    // Save the updated cart to localStorage
    saveCartToLocalStorage(updatedCart);

    return updatedCart;
  });
};

  // // addToCart
  // const addToCart = (product) => {
  //   setCart((prevCart) => {
  //     const existingProductIndex = prevCart.findIndex(
  //       (item) => item.productId === product.productId
  //     );
  //     let updatedCart;

  //     if (existingProductIndex >= 0) {
  //       updatedCart = [...prevCart];
  //       updatedCart[existingProductIndex].quantity += 1;
  //     } else {
  //       updatedCart = [...prevCart, { ...product, quantity: 1 }];
  //     }

  //     saveCartToLocalStorage(updatedCart); 
  //     return updatedCart;
  //   });
  // };

  // delete 
  const deleteFromCart = (product) =>
  {
    setCart((previousCart) =>
    {
      const cartData = previousCart.filter((item) => item.productId !== product.productId);
      saveCartToLocalStorage(cartData); 
      return cartData;
    });
  };

  // // update quantity
  // const updateLessQuantity = (product) => {
  //   console.log("updateLessQuantity product", product);
  //   // find index of update product
  //   const index = cart.findIndex((item) => item.productId === product.productId);
  //   // save previous cart information 
  //   let updateData;
  //   updateData = [...cart];
  //   // update quantity using index of the target object
  //   if (updateData[index].quantity > 1)
  //   {
  //     updateData[index].quantity = updateData[index].quantity - 1;
  //   }
  //   //save update data fot local storage 
  //   saveCartToLocalStorage(updateData);
  // };

  //---------------
  return (
    <CartContext.Provider
      value={{
        isLoading,
        setIsLoading,
        error,
        setError,
        orderItems,
        setOrderItems,
        method,
        setMethod,
        userToken,
        setUserToken,
        responeSuccessCreateOrder,
        setResponeSuccessCreateOrder,
        cartList,
        setCartList,
        cart,
        setCart,
        saveCartToLocalStorage,
        addToCart,
        deleteFromCart,
        updateLessQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartContext.propTypes = {
  children: PropTypes.node,
};
