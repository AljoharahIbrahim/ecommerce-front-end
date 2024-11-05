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

//--------
// export const getAllProducts = async (
//   pageLimit = 10,
//   pageNumber = 2,
//   searchValue = "",
//   sort = ""
// ) => {
//   const searchBy = searchValue;
//   const productUrl =
//     "https://sda-3-onsite-backend-teamwork-py8b.onrender.com/api/v1/products";
//   // const pagenationUrl = `$https://sda-3-onsite-backend-teamwork-py8b.onrender.com/api/v1/products?pageLimit=${pageLimit}&pageNumber=${pageNumber}&searchBy=${searchBy}&sort=${sort}`;

//   let url;
//   if (searchBy == undefined || searchBy == "") {
//     url = productUrl;
//   } else {
//     url = `${productUrl}?SearchBy=${searchBy}`;
//   }
//   const response = await axios.get(url);
//   console.log(response);
//   return response.data;
// };

//----

//Page=2&PageSize=2&SearchBy=books&Sort=asc
export const getAllProducts = async (
  pageNumber = 1,
  pageSize = 4,
  searchValue = "",
  sortOrder = "asc"
) => {
  const productUrl =
    "https://sda-3-onsite-backend-teamwork-py8b.onrender.com/api/v1/products";
  const params = new URLSearchParams();

  params.append("Page", pageNumber);
  params.append("pageSize", pageSize);

  if (searchValue) {
    params.append("SearchBy", searchValue);
  }

  if (sortOrder) {
    params.append("Sort", sortOrder);
  }
  // console.log(`LINK: ${productUrl}?${params.toString()}`);
  const response = await axios.get(`${productUrl}?${params.toString()}`);
  return response.data;
};
