import React from 'react'
import { createBrowserRouter} from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Layout from '../layouts/Layout';
import ProductsList from '../pages/ProductsList';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Contact from '../pages/Contact';
import ProductDetails from '../pages/ProductDetails';

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
      ],
    },
  ]);

    return (
      <div>
        <RouterProvider router={router} />
      </div>
    );
}
