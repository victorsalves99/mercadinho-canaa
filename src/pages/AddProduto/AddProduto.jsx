import { useState } from "react";
import "./AddProduto.scss";

const AddProduto = () => {
  const [nome, setNome] = useState();
  const [codigo, setCodigo] = useState();
  const [quantidade, setQuantidade] = useState();
  const [preco, setPreco] = useState();

  const cadastrarProdutos = async (ev) => {
    ev.preventDefault();
    const produto = {
      nome: nome,
      codigo: codigo,
      quantidade:Number(quantidade),
      preco:Number(preco),
    };
    fetch("http://localhost:3000/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    })
      .then((res) => {
        alert("Cadastrado com Sucesso");
      })
      .catch((err) => alert(`${err.mensseger}`));
      setCodigo("")
      setNome("")
      setPreco("")
      setQuantidade("")
  };

  return (
    <div className="addProduto">
      <form onSubmit={cadastrarProdutos}>
        <h2>Cadastra Produto</h2>
        <label>
          <span>Codigo:</span>
          <input
            type="number"
            value={codigo}
            onChange={(ev) => setCodigo(ev.target.value)}
          />
        </label>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            value={nome}
            onChange={(ev) => setNome(ev.target.value)}
          />
        </label>
        <label>
          <span>Quantidade:</span>
          <input
            type="number"
            value={quantidade}
            onChange={(ev) => setQuantidade(ev.target.value)}
          />
        </label>
        <label>
          <span>Preço:</span>
          <input
            type="number"
            value={preco}
            onChange={(ev) => setPreco(ev.target.value)}
          />
        </label>
        <input type="submit" value="Cadastrar" className="cadastrar" />
      </form>
    </div>
  );
};

export default AddProduto;
