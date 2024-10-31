import React, { useState } from "react";

export default function SearchProduct() {

  const handleSearchForm = async (event) => {
    event.preventDefault();
    // get datda base on search input
      const productName = document.getElementById("search").value;
    //   console.log(window.location.href);
      //update the page 
      window.location.href = "?searchBy="+productName;
  };
  return (
    <div>
      <h3>search product </h3>
      <form onSubmit={handleSearchForm}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          required
        />
        <button type="submit">search</button>
      </form>
    </div>
  );
}
