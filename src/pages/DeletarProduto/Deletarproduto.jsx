import "./Deletarproduto.scss";
import { useState } from "react";

const Deletarproduto = () => {
  const [produtoExiste, setProsutoExiste] = useState(false);
  const [codigo, setCodigo] = useState();
  const [produto, setProduto] = useState();
  const buscarProduto = async () => {
    const resp = await fetch("http://localhost:3000/produtos")
      .then((res) => res.json())
      .catch(setProsutoExiste(false));
    console.log(resp);
    let pro = resp.find((item) => item.codigo === codigo);
    console.log(pro);
    setCodigo("");
    setProduto(pro);
    setProsutoExiste(true);
  };
  const deletarProduto = async () => {
    await fetch(`http://localhost:3000/produtos/${produto.id}`, {
      method: "DELETE",
    });
    setCodigo();
    setProsutoExiste(false);
  };
  return (
    <div className="addpreco">
      <div className="codigo">
        <label>
          <span>Codigo do Produto</span>
          <input
            type="number"
            onChange={(ev) => setCodigo(ev.target.value)}
            value={codigo}
          />
          <button onClick={buscarProduto}>Buscar</button>
        </label>
      </div>
      {produtoExiste && (
        <div className="cardProduto">
          <h2>{produto.nome}</h2>
          <p>
            Preço:<span>{produto.preco}</span>
          </p>
          <p>
            Estoque:<span>{produto.quantidade}</span>
          </p>
          <button onClick={deletarProduto} className="btnDeletar">Deletar produto</button>
        </div>
      )}
    </div>
  );
};

export default Deletarproduto;
