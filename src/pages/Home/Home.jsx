import "./Home.scss";

import { FaStore, FaClipboardList } from "react-icons/fa";

import logo from "../../img/logo-canaa.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="main">
      <div className="box_logo">
        <img src={logo} alt="logo do mercado nanaa" />
      </div>
      <div className="box_links">
        <Link to="./vender" className="link">
          <div className="login">
            <FaStore className="icone" />
            <h3>Vender</h3>
          </div>
        </Link>

        <Link to="./gerenciar" className="link">
          <div className="login">
            <FaClipboardList className="icone" />
            <h3>Gerenciar</h3>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Home;
