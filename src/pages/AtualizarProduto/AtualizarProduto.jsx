import { useState } from "react"
import {  Outlet , NavLink } from "react-router-dom"
import "./AtualizarProduto.scss"

const AtualizarProduto = () => {
    const [codigo,setCodigo] = useState()



  return (
    <div className="AtualizarProduto">
        <div className="box_links">
            <NavLink to="./" className="linkAtualizacao">Adicionar estoque</NavLink>
            <NavLink to="./mudarpreco" className="linkAtualizacao">Mudar Preço</NavLink>
        </div>
        <Outlet />
    </div>
  )
}

export default AtualizarProduto