import React, { useState } from "react";

export default function SearchProduct() {
  const [search, setSearch] = useState("");
  const habdleSearchChange = (event) => {
      setSearch(event.target.value);
  };
  const handleSearchForm = async (event) => {
    event.preventDefault();      
    // console.log(window.location.href);
    //update the page
    window.location.href = "?searchBy=" + search;
  };
  return (
    <div>
          <form onSubmit={handleSearchForm}>
            <h4>Search Product</h4>
        <div className="search-container">
          <label htmlFor="search"> </label>
          <input
            type="text"
            id="search"
            className="search-bar"
            onChange={habdleSearchChange}
            value={search}
            placeholder="Enter product name"
            required
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
