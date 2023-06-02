import "./Gerencia.scss";
import { Link,NavLink, Outlet } from "react-router-dom";

import logo from "../../img/logo-canaa.jpg";

const Gerencia = () => {
  return (
    <div className="gerencia">
      <header className="cabecalho_gerencia">
        <Link to="/"><img src={logo} alt="" className="logo" /></Link>
        
      </header>
      <nav className="gerencia_navegacao">
        <NavLink to="./" className="navegacao">Estoque</NavLink>
        <NavLink to="./addProduto" className="navegacao">Add Produto</NavLink>
        <NavLink to="./atualizar" className="navegacao">Atualizar produto</NavLink>
        <NavLink to="./DelProduto" className="navegacao">Del produto</NavLink>

      </nav>
      <section className="gerencia_principal">
        <Outlet />
      </section>
    </div>
  );
};

export default Gerencia;
