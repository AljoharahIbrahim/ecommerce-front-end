import axios from "axios";
// export const getAllProductsByName = async (productName) => {
//   console.log(productName);
//   // extract the variable of url for pagenation & search & sort by
//   const search = window.location.search;
//   const params = new URLSearchParams(search);
//   // in case there are no assign value in variable => assign empty string tnstend of null value
//   let pageLimit = params.get("pageLimit") ?? "";
//   const pageNumber = params.get("pageNumber") ?? "";
//   const searchBy = productName;
//   const sort = params.get("sort") ?? "";
//   const url = `https://sda-3-onsite-backend-teamwork-py8b.onrender.com/api/v1/products?pageLimit=${pageLimit}&pageNumber=${pageNumber}&searchBy=${searchBy}&sort=${sort}`;
//   const response = await axios.get(url);
//   return response.data;
// };

export const getAllProducts = async (searchValue = "") => {
  const searchBy = searchValue;
    const productUrl =
      "https://sda-3-onsite-backend-teamwork-py8b.onrender.com/api/v1/products";
    let url;
    if (searchBy == undefined || searchBy == "") {
      url = productUrl;
    } else {
      url = `${productUrl}?SearchBy=${searchBy}`;
    }
    const response = await axios.get(url);
    return response.data;

};
