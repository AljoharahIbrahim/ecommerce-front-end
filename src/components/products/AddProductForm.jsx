import React, { useEffect, useState } from "react";

import { useContext } from "react";
import { ProductContext } from "../../context/ProductContextData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddProductForm() {
  // this feature for admin only
  const {
    createProduct,
    setCreateProduct,
    adminToken,
    setAdminToken,
    createProductStatus,
    setCreateProductStatus,
    responeSuccessCreateProduct,
    setResponeSuccessCreateProduct,
  } = useContext(ProductContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // get admin token
    const token = localStorage.getItem("login")
      ? JSON.parse(localStorage.getItem("login"))
      : "";
    console.log("token", token.userToken);
    setAdminToken(token.userToken);
    setCreateProduct({
      ...createProduct,
      productName: createProduct.productName,
      productPrice: createProduct.productPrice,
      productDescription: createProduct.productDescription,
      productImage: createProduct.productImage,
      productStockQuantity: createProduct.productStockQuantity,
      productCategoryID: createProduct.productCategoryID,
    });
    setCreateProductStatus(true);
  };

  useEffect(() => {
    console.log("***************", responeSuccessCreateProduct);
    if (responeSuccessCreateProduct) {
      setResponeSuccessCreateProduct(false);
      // return Success message
      toast.success("Product is created");
      // reset the input value form
      setCreateProduct({
        ...createProduct,
        productName: "",
        productPrice: "",
        productDescription: "",
        productImage: "",
        productStockQuantity: "",
        productCategoryID: "",
      });
    }
  }, [responeSuccessCreateProduct]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            value={createProduct.productName}
            onChange={() =>
              setCreateProduct({
                ...createProduct,
                productName: event.target.value,
              })
            }
            placeholder="Enter product name"
            required
          />
        </div>
        <div className="form-group">
          <label>Product Price</label>
          <input
            type="number"
            value={createProduct.productPrice}
            onChange={() =>
              setCreateProduct({
                ...createProduct,
                productPrice: event.target.value,
              })
            }
            placeholder="Enter product price"
            required
          />
        </div>
        <div className="form-group">
          <label>Product Description</label>
          <textarea
            value={createProduct.productDescription}
            onChange={() =>
              setCreateProduct({
                ...createProduct,
                productDescription: event.target.value,
              })
            }
            placeholder="Enter product description"
            required
          />
        </div>
        <div className="form-group">
          <label>Product stockQuantity</label>
          <input
            type="number"
            value={createProduct.productStockQuantity}
            onChange={() =>
              setCreateProduct({
                ...createProduct,
                productStockQuantity: event.target.value,
              })
            }
            placeholder="Enter product price"
            required
          />
        </div>
        <div className="form-group">
          <label>Product categoryID</label>
          <input
            type="test"
            value={createProduct.productCategoryID}
            onChange={() =>
              setCreateProduct({
                ...createProduct,
                productCategoryID: event.target.value,
              })
            }
            placeholder="Enter product categoryID"
            required
          />
        </div>
        <div className="form-group">
          <label>Product Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={() => {
              const file = event.target.files[0];
              if (file) {
                const imageUrl = URL.createObjectURL(file);
                setCreateProduct({
                  ...createProduct,
                  productImage: imageUrl,
                });
              } else {
                setCreateProduct({
                  ...createProduct,
                  productImage: "",
                });
              }
            }}
            required
          />{" "}
          {createProduct.productImage && (
            <div>
              <h3>Image Preview:</h3>
              <img
                src={createProduct.productImage}
                alt="Product"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
            </div>
          )}
        </div>

        <button type="submit" className="btn-submit">
          Add Product
        </button>
      </form>
      <ToastContainer />
    </>
  );
}
