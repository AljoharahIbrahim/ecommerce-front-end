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
      <h3>search product </h3>
      <form onSubmit={handleSearchForm}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          onChange={habdleSearchChange}
          value={search}
          required
        />
        <button type="submit">search</button>
      </form>
    </div>
  );
}
