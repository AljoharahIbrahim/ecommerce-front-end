import React from 'react'

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import NavBar from '../components/navbar/NavBar';
import ProductsListPage from '../pages/ProductsListPage';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';

export default function EcommerceWebsiteRoutes() {
  // create routers list (path and elements) using createBrowserRouter function
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <ProductsListPage />,
        },
      ],
    },
  ]);

    return (
      <div>
        <RouterProvider router={router} />
      </div>
    );
}
