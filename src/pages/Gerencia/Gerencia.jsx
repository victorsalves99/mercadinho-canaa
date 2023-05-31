import "./Gerencia.scss";
import { Link, Outlet } from "react-router-dom";

import logo from "../../img/logo-canaa.jpg";

const Gerencia = () => {
  return (
    <div className="gerencia">
      <header className="cabecalho_gerencia">
        <Link to="/"><img src={logo} alt="" className="logo" /></Link>
        
      </header>
      <nav className="gerencia_navegacao">
        <Link to="./" className="navegacao">Estoque</Link>
        <Link to="./addProduto" className="navegacao">Add Produto</Link>
        <Link to="./atualizar" className="navegacao">Atualizar produto</Link>
        <Link to="./DelProduto" className="navegacao">Del produto</Link>

      </nav>
      <section className="gerencia_principal">
        <Outlet />
      </section>
    </div>
  );
};

export default Gerencia;
