import React from 'react'
import { createBrowserRouter} from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Layout from '../layouts/Layout';
import ProductsList from '../pages/ProductsList';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Contact from '../pages/Contact';
import ProductDetails from '../pages/ProductDetails';
import Login from '../pages/Login';
import Profile from '../pages/Profile';

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
          path: "contact",
          element: <Contact />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "profile",
          element: <Profile />,
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
