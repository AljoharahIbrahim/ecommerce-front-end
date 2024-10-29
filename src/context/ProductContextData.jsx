import React, { createContext, useEffect, useState } from "react";

import axios from "axios";

// create ProductContext
export const ProductContext = createContext({});

export default function ProductContextData({ children }) {
  // ctrate data state
  const [products, setProducts] = useState([]);
  console.log("***----");
  // implement fetchdata function that connect with api to get products data inside useeffect
  useEffect(() => {
    fetch(
      "https://sda-3-onsite-backend-teamwork-py8b.onrender.com/api/v1/products"
    )
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error("Error:", error));
  }, []);

  // use axios to function that connect with api to get products data inside useeffect

  // useEffect(() => {
  //   const fetchData = async () => {
  //  await axios
  //    .get(
  //      "https://sda-3-onsite-backend-teamwork-py8b.onrender.com/api/v1/products"
  //    )
  //    .then((response) => {
  //     console.log("----ProductContextData----");
  //      console.log(response.data);
  //      setProducts(response.data);
  //    })
  //    .catch((error) => {
  //      console.log(error);
  //    });
  //    }
  //   fetchData();
  // }, []);

  return (
    <div>
      <ProductContext.Provider value={{ products, setProducts }}>
        {children}
      </ProductContext.Provider>
    </div>
  );
}
