import "./Home.scss"

import logo from "../../img/logo-canaa.jpg"




const Home = () => {
  return (
    <main className="main">
        <div className="box_logo">
            <img src={logo} alt="logo do mercado nanaa" />
        </div>
        <div className="box_links">
            <div className="login">
                <img src="https://img.icons8.com/3d-fluency/94/manager--v4.png"/>
                <h3>Vendedores</h3>
            </div>
            <div className="login">
            <img src="https://img.icons8.com/3d-fluency/94/supplier.png"/>
                <h3>Gerentes</h3>
            </div>
        </div>
    </main>
  )
}

export default Home