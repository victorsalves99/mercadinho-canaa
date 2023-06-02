import { useState } from "react";
import "./AddEstoque.scss";
const AddEstoque = () => {
  const [produtoExiste, setProsutoExiste] = useState(false);
  const [codigo, setCodigo] = useState();
  const [produto, setProduto] = useState();
  const [quantidadeAdicionada, setQuantidadeAdicionada] = useState();
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
  const atualizarProduto = async () => {
    await fetch(`http://localhost:3000/produtos/${produto.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: produto.nome,
        codigo: produto.codigo,
        preco: produto.preco,
        quantidade: Number(produto.quantidade) + Number(quantidadeAdicionada),
      }),
    });
    setCodigo();
    setQuantidadeAdicionada();
    setProsutoExiste(false);
  };
  return (
    <div className="addestoque">
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
          <label className="boxInput">
            <span>Digite o valor a Adicionar</span>
            <input
              type="number"
              onChange={(ev) => setQuantidadeAdicionada(ev.target.value)}
            />
            <button onClick={atualizarProduto}>Adicionar</button>
          </label>
        </div>
      )}
    </div>
  );
};

export default AddEstoque;
