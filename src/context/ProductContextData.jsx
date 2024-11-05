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
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [totalPages, setTotalPages] = useState(1);
  const [searchValue, setSearchValue] = useState([]);
  const [sort, setSort] = useState("");

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await getAllProducts(
        pageNumber,
        pageSize,
        searchValue,
        sort
      );
      console.log("***********from product services*************");
      console.log(response);
      const data = response.data;
      console.log("data=" + data);
      const productsData = data.items.$values;
      console.log("productsData" + productsData);
      setProducts(productsData);
      // setTotalPages(data.totalItems);
      // const totalItems = data.items.$values.length;
      const totalItems = data.totalItems;
      console.log("totalItems=> " + totalItems + " | pageSize=>" + pageSize);
      console.log("totalItems / pageSize =" + Math.ceil(totalItems / pageSize));
      setTotalPages(Math.ceil(totalItems / pageSize));
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [searchValue, pageNumber, pageSize, sort]);
  console.log("searchValue =" + searchValue);

  return (
    <div>
      <ProductContext.Provider
        value={{
          data,
          setData,
          products,
          setProducts,
          isLoading,
          error,
          pageSize,
          setPageSize,
          pageNumber,
          setPageNumber,
          searchValue,
          setSearchValue,
          sort,
          setSort,
          totalPages,
          setTotalPages,
        }}
      >
        {children}
      </ProductContext.Provider>
    </div>
  );
}

ProductContextData.propTypes = {
  children: PropTypes.node,
};
