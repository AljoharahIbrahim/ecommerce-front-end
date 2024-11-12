import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Layout from "../layouts/Layout";
import ProductsList from "../pages/ProductsList";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import UserRoute from "./UserRoute";
import AdminRoute from "./AdminRoute";
import UserDashboard from "../pages/UserDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import Register from "../pages/Register";
import AddProduct from "../pages/AddProduct";
import DeleteProduct from "../pages/DeleteProduct";
import UpdateProdut from "../pages/UpdateProdut";
import Cart from "../pages/Cart";
import Carts from "../components/Cart/Carts";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "products",
          element: <ProductsList />,
        },
        {
          path: "productDetails/:id",
          element: <ProductDetails />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "cart/:id",
          element: <Carts />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "/dashboard/users",
          element: <UserRoute />,
          children: [
            {
              path: "/dashboard/users/view",
              element: <UserDashboard />,
            },
          ],
        },
        {
          path: "/dashboard/admins",
          element: <AdminRoute />,
          children: [
            {
              path: "/dashboard/admins/view",
              element: <AdminDashboard />,
            },
            {
              path: "/dashboard/admins/addProduct",
              element: <AddProduct />,
            },
            {
              path: "/dashboard/admins/deleteProduct",
              element: <DeleteProduct />,
            },
            {
              path: "/dashboard/admins/updateProduct",
              element: <UpdateProdut />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <Error message=" Page Not Fount" />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
