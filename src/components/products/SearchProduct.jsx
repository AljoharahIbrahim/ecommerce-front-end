import React, { useContext, useEffect, useState } from "react";

import { getAllProducts } from "../../services/productService";
import { ProductContext } from "../../context/ProductContextData";

export default function SearchProduct() {
  const { searchValue, setSearchValue } = useContext(ProductContext);

  const habdleSearchChange = (event) => {
    // setSearch(event.target.value);
    setSearchValue(event.target.value);
    // getAllProducts(search);
  };

  const handleDisplayProduct = () => {
    console.log("handleDisplayProduct");
    setSearchValue("");
  };
  //   const habdleSearchStatusChange = (event) => {
  //     setSearchStatus(event.target.value);
  //   };
  // const handleSearchForm = async (event) => {
  //   event.preventDefault();
  //   // console.log(window.location.href);
  //   //update the page
  //   // window.location.href = "?searchBy=" + search;
  //   // getAllProducts(search);
  // };
  //

  // useEffect(() => {
  //   // const response = getAllProducts();
  //   //   console.log("response: " + response);
  //   // const filterData = products.filter((p) => p.name === searchStatus);
  //   // setSearchStatus(filterData);
  // }, []);

  //`http://localhost:4343/v1/api/products?SearchBy=${search}`

  return (
    <div>
      {/* <form onSubmit={handleSearchForm}> */}
      <h4>Search Product</h4>
      <div className="search-container">
        <label htmlFor="search"> </label>
        <input
          type="text"
          id="search"
          className="search-bar"
          onChange={habdleSearchChange}
          value={searchValue}
          placeholder="Enter product name"
          required
        />{" "}
        <button
          type="submit"
          className="search-button"
          onClick={handleDisplayProduct}
        >
          Display All Products
        </button>
        {/* <button type="submit" className="search-button">
            Search
          </button>
          <button type="submit" className="display-button">
            Display
          </button> */}
      </div>
      {/* </form> */}

      {/* <label htmlFor="searchStatus"> </label>
      <input
        type="text"
        id="searchStatus"
        className="search-bar"
        //  onChange={habdleSearchStatusChange}
        //  value={searchStatus}
        placeholder="Enter product name"
        required
      /> */}
    </div>
  );
}
