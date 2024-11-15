import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  getAllProducts,
  createNewProduct,
  deleteProductByID,
  updateProduct,
} from "../services/productService";

// create ProductContext
export const ProductContext = createContext();

export default function ProductContextData({ children }) {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(100);
  const [totalPages, setTotalPages] = useState(1);
  const [searchValue, setSearchValue] = useState([]);
  const [sort, setSort] = useState("");

  const [createProduct, setCreateProduct] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productImage: "",
    productStockQuantity: "",
    productCategoryID: "",
  });
  const [adminToken, setAdminToken] = useState("");
  const [createProductStatus, setCreateProductStatus] = useState(false);
  const [responeSuccessCreateProduct, setResponeSuccessCreateProduct] =
    useState(false);
  const [deleteProductID, setDeleteProductID] = useState(null);
  const [createDeleteProductOrder, setCreateDeleteProductOrder] =
    useState(false);
  const [productDeleteResponse, setProductDeleteResponse] = useState(false);
  const [productData, setProductData] = useState({});
  const [productID, setProductID] = useState();
  const [updateProductOrder, setUpdateProductOrder] = useState(false);
  const [productUpdateResponse, setProductUpdateResponse] = useState(false);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await getAllProducts(
        pageNumber,
        pageSize,
        searchValue,
        sort
      );

      const data = response.data;
      const productsData = data.items.$values;
      setProducts(productsData);
      const totalItems = data.totalItems;
      setTotalPages(Math.ceil(totalItems / pageSize));
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // create product
  const addNewProduct = async () => {
    if (!createProduct) return;

    try {
      setIsLoading(true);
      // call product create product service
      const response = await createNewProduct(
        createProduct.productName,
        createProduct.productPrice,
        createProduct.productDescription,
        createProduct.productImage,
        createProduct.productStockQuantity,
        createProduct.productCategoryID,
        adminToken
      );
      setResponeSuccessCreateProduct(true);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // delete product
  const deleteProduct = async () => {
    if (!deleteProductID) return;
    try {
      setIsLoading(true);
      const response = await deleteProductByID(deleteProductID, adminToken);
      // console.log(" deleteProduct response", response);
      setProductDeleteResponse(true);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // update Product
  const updateProductByID = async () => {
    if (!productData || !productID || !adminToken) return;
    try {
      setIsLoading(true);
      console.log("updateProductByID=>", productData, productID, adminToken);
      const response = await updateProduct(productData, productID, adminToken);
      console.log(response);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect
  useEffect(() => {
    getProducts();
  }, []);
  //
  useEffect(() => {
    getProducts();
  }, [searchValue, pageNumber, pageSize, sort]);

  useEffect(() => {
    addNewProduct();
  }, [createProductStatus]);

  //
  useEffect(() => {
    deleteProduct();
  }, [createDeleteProductOrder]);

  //
  useEffect(() => {
    updateProductByID();
  }, [updateProductOrder]);

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
          createProduct,
          setCreateProduct,
          adminToken,
          setAdminToken,
          createProductStatus,
          setCreateProductStatus,
          responeSuccessCreateProduct,
          setResponeSuccessCreateProduct,
          deleteProductID,
          setDeleteProductID,
          createDeleteProductOrder,
          setCreateDeleteProductOrder,
          productDeleteResponse,
          productData,
          setProductData,
          productID,
          setProductID,
          updateProductOrder,
          setUpdateProductOrder,
          productUpdateResponse,
          setProductUpdateResponse,
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
