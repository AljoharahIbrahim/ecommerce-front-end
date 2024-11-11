import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { ProductContext } from "../../context/ProductContextData";

export default function UpdateProdutForm() {
  // this feature for admin only
  const [selectProduct, setSelectProduct] = useState();
  const {
    products,
    isLoading,
    error,
    productData,
    setProductData,
    setProductID,
    setUpdateProductOrder,
    productUpdateResponse,
    setProductUpdateResponse,
    setAdminToken,
  } = useContext(ProductContext);

  console.log("products", products);

  const handleSubmit = (e) => {
    e.preventDefault();
    // get admin token
    const token = localStorage.getItem("login")
      ? JSON.parse(localStorage.getItem("login"))
      : "";
    console.log("token", token.userToken);
    setAdminToken(token.userToken);
    // set productID
    setProductID(selectProduct);
    // update state to call end point
    setUpdateProductOrder(true);
    setProductUpdateResponse(true);
  };

  useEffect(() => {
    console.log("ProductUpdateResponse");
    if (productUpdateResponse) {
      setProductUpdateResponse(false);
      // return Success message
      toast.success("Product is update");
      // reset the input value form
      setProductData({
        ...productData,
        name: "",
        price: "",
        description: "",
        stockQuantity: "",
        categoryID: "",
        image: "",
      });
    }
  }, [productUpdateResponse]);

  return (
    <>
      {" "}
      <h3>Update Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="custom-select">
          <label htmlFor="product-select">Select a product:</label>
          <select
            id="product-select"
            value={selectProduct}
            onChange={(e) => {
              console.log("selectProduct=", e.target.value);
              setSelectProduct(e.target.value);
            }}
            required
          >
            <option value="">Select a product</option>
            {products.map((product) => (
              <option key={product.productId} value={product.productId}>
                {product.productId}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            value={productData.name}
            onChange={() =>
              setProductData({
                ...productData,
                name: event.target.value,
              })
            }
            placeholder="Enter product name"
          />
        </div>
        <div className="form-group">
          <label>Product Price</label>
          <input
            type="number"
            onChange={() =>
              setProductData({
                ...productData,
                price: event.target.value,
              })
            }
            value={productData.price}
            placeholder="Enter product price"
          />
        </div>
        <div className="form-group">
          <label>Product Description</label>
          <textarea
            onChange={() =>
              setProductData({
                ...productData,
                description: event.target.value,
              })
            }
            placeholder="Enter product description"
          />
        </div>
        <div className="form-group">
          <label>Product stockQuantity</label>
          <input
            type="number"
            // value={createProduct.productStockQuantity}
            onChange={() =>
              setProductData({
                ...productData,
                stockQuantity: event.target.value,
              })
            }
            placeholder="Enter product price"
          />
        </div>
        <div className="form-group">
          <label>Product categoryID</label>
          <input
            type="test"
            // value={createProduct.productCategoryID}
            onChange={() =>
              setProductData({
                ...productData,
                categoryID: event.target.value,
              })
            }
            placeholder="Enter product categoryID"
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
                setProductData({
                  ...productData,
                  image: imageUrl,
                });
              }
            }}
          />{" "}
          <div>
            <h3>Image Preview:</h3>
            <img
              alt="Product"
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
          </div>
        </div>

        <button type="submit" className="btn-submit">
          Update Product
        </button>
      </form>
      <ToastContainer />
    </>
  );
}
