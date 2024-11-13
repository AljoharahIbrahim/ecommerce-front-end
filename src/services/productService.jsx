import axios from "axios";

const productUrl =
  "https://sda-3-onsite-backend-teamwork-py8b.onrender.com/api/v1/products";

//Page=2&PageSize=2&SearchBy=books&Sort=asc

// GET Product => getAllProducts end point
export const getAllProducts = async (
  pageNumber = 1,
  pageSize = 4,
  searchValue = "",
  sortOrder = "asc"
) => {
  const params = new URLSearchParams();

  params.append("Page", pageNumber);
  params.append("pageSize", pageSize);

  if (searchValue) {
    params.append("SearchBy", searchValue);
  }

  if (sortOrder) {
    params.append("Sort", sortOrder);
  }
  const response = await axios.get(`${productUrl}?${params.toString()}`);
  return response.data;
};

// POST Product end point
export const createNewProduct = async (
  productName,
  productPrice,
  productDescription,
  productImage,
  productStockQuantity,
  productCategoryID,
  adminToken
) => {
  // create an object of product data
  const productData = {
    name: productName,
    price: productPrice,
    description: productDescription,
    image: productImage,
    stockQuantity: productStockQuantity,
    categoryID: productCategoryID,
  };

  if (productData && adminToken) {
    // call POST product end point
    const response = await axios.post(`${productUrl}`, productData, {
      headers: { Authorization: `Bearer ${adminToken}` },
    });
    // console.log(response);
    return response;
  }
};

// DELETE Product end point
export const deleteProductByID = async (productID, adminToken) => {
  if (productID && adminToken) {
    const response = await axios.delete(`${productUrl}/${productID}`, {
      headers: { Authorization: `Bearer ${adminToken}` },
    });
    // console.log("deleteProductByID response", response);
    return response;
  }
};

// PUT product endpoint
export const updateProduct = async (productData, productID, adminToken) => {
  if (productData && productID && adminToken) {
    const response = await axios.put(
      `${productUrl}/${productID}`,
      productData,
      {
        headers: { Authorization: `Bearer ${adminToken}` },
      }
    );
    // console.log("updateProduct response ", response);
    return response;
  }
};
