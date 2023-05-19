import { useState, useEffect } from "react";

import "./caixa.scss";
import logo from "../../img/logo-canaa.jpg";
const Caixa = () => {
  const [carrinho, setCarrinho] = useState([]);
  const [produt, setProdut] = useState([]);
  const [codigo, setCodigo] = useState("");
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);
  const [troco, setTroco] = useState(0);

  useEffect(() => {
    const pegarproduto = async () => {
      const data = await fetch("http://localhost:3000/produtos")
        .then((res) => res.json())
        .catch((err) => console.log(err));
      setProdut(data);
    };
    pegarproduto();
  }, []);
  useEffect(() => {
    if(pago) {
      calcular()
    }
  },[pago])

  const adicionar = () => {
    let res = produt.filter((item) => item.codigo === codigo);
    console.log(res);
    setCarrinho((prev) => [...prev, res[0]]);
    setCodigo("")
    let soma = total + Number(res[0].preco);
    setTotal(soma);
  };
  const calcular = () => {
    let sub = pago - total;
    setTroco(sub);
  };

  return (
    <div className="box_caixa">
      <div className="carrinho">
        <h2>Compras</h2>
        <div className="compras">
          {carrinho &&
            carrinho.map((item) => (
              <p key={item.id}>
                {item.nome} ------- R${item.preco}
              </p>
            ))}
        </div>
      </div>
      <div className="box_produto">
        <div className="produto">
          <img src={logo} />
          <div>
            <span>Codigo do Produto:</span>
            <label>
              <input
                type="text"
                onChange={(ev) => setCodigo(ev.target.value)}
                value={codigo}
              />
              <button onClick={adicionar}>Adicionar</button>
            </label>
          </div>
        </div>
        <div className="resultados">
          <div>
            <span>Total: </span>
            <p>{total}</p>
          </div>
          <label>
            <span>Valor Pago</span>
            <input
              type="number"
              onChange={(ev) => setPago(ev.target.value)}
              value={pago}
            />
          </label>
          <div>
            <span>Troco: </span>
            <p>{troco}</p>
          </div>
        </div>
        <div className="finalizar">
          <button>Finalizar</button>
        </div>
      </div>
    </div>
  );
};

export default Caixa;
