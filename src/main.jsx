import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// importação de componentes
import Home from "./pages/Home/Home";
import Caixa from "./pages/Caixa/Caixa";
import Error from "./pages/Error/Error";
import Gerencia from "./pages/Gerencia/Gerencia";
import Estoque from "./pages/Estoque/Estoque";
import AddProduto from "./pages/AddProduto/AddProduto";
import AtualizarProduto from "./pages/AtualizarProduto/AtualizarProduto";
import AddEstoque from "./pages/AddEstoque/AddEstoque";
import AtualizarPreco from "./pages/AtualizarPreco/AtualizarPreco";
import Deletarproduto from "./pages/DeletarProduto/Deletarproduto";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path:"/vender",
    element: <Caixa />,
    errorElement: <Error />,

  }
  ,
  {
    path:"/gerenciar",
    element: <Gerencia />,
    errorElement: <Error />,
    children: [
      {
        path:"/gerenciar",
        element: <Estoque />,
        errorElement: <Error />,
      },
      {
        path:"/gerenciar/addProduto",
        element: <AddProduto />,
        errorElement: <Error />,
      },
      {
        path:"/gerenciar/atualizar",
        element: <AtualizarProduto />,
        errorElement: <Error />,
        children: [
          {
            path:"/gerenciar/atualizar",
            element: <AddEstoque />,
            errorElement: <Error />,
          },
          {
            path:"/gerenciar/atualizar/mudarpreco",
            element: <AtualizarPreco />,
            errorElement: <Error />,
          },
        ]
      },
      {
        path:"/gerenciar/DelProduto",
        element: <Deletarproduto />,
        errorElement: <Error />,
      },      
    ]

  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
);
