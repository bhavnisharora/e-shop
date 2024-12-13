import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Layout from "./components/layout/Layout";
import Error from "./components/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import Order from "./pages/Order";
import FilterData from "./components/FilterData";
import ProductDetail from "./pages/ProductDetail";
import { HelmetProvider } from "react-helmet-async";
function App() {
  const [order, setOrder] = useState({
    products: [],
    orderNumber: "",
    shippingInformation: { address: "", city: "", zip: "" },
    totalPrice: 0,
  });

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
          path: "/about",
          element: <About />,
        },

        {
          path: "/contact",
          element: <Contact />,
        },

        {
          path: "/shop",
          element: <Shop />,
        },

        {
          path: "/cart",
          element: <Cart />,
        },

        {
          path: "/product/:id",
          element: <ProductDetail />,
        },

        {
          path: "/checkout",
          element: <Checkout setOrder={setOrder} />,
        },

        {
          path: "/order-confirmation",
          element: <Order order={order} />,
        },

        {
          path: "/filter-data",
          element: <FilterData />,
        },
      ],
    },
  ]);

  return (
    <>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  );
}

export default App;
