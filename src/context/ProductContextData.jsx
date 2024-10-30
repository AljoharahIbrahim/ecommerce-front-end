import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { getAllProducts } from "../services/productService";

// create ProductContext
export const ProductContext = createContext();

export default function ProductContextData({ children }) {
  // ctrate data state
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // use axios to function that connect with api to get products data inside useeffect
  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await getAllProducts();
      const data = response.data;
      const productsData = data.items.$values;
      setProducts(productsData);
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <ProductContext.Provider
        value={{ data, setData, products, setProducts, isLoading, error }}
      >
        {children}
      </ProductContext.Provider>
    </div>
  );
}

ProductContextData.propTypes = {
  children: PropTypes.node,
};
