import React, { createContext, useEffect, useState } from "react";

import axios from "axios";

// create ProductContext
export const ProductContext = createContext({});

export default function ProductContextData({ children }) {
  // ctrate data state
  const [products, setProducts] = useState([]);
  // use axios to function that connect with api to get products data inside useeffect
  const getProducts = () => {
    axios
      .get(
        "https://sda-3-onsite-backend-teamwork-py8b.onrender.com/api/v1/products"
      )
      .then((response) => {
        // console.log("data: ", response.data.data.items.$values[0].name);
        const productData = response.data.data.items.$values;
        setProducts(productData);
      });
  };
  useEffect(() => getProducts(), []);

  return (
    <div>
      <ProductContext.Provider value={{ products, setProducts }}>
        {children}
      </ProductContext.Provider>
    </div>
  );
}
