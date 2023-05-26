import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// importação de componentes
import Home from "./pages/Home/Home";
import Loading from "./pages/Loading/Loading";
import Caixa from "./pages/Caixa/Caixa.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Loading />,
  },
  {
    path:"/gerenciar",
    element: <Caixa />,
    errorElement: <Loading />,

  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
);
