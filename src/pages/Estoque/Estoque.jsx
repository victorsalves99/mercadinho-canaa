import { useEffect, useState } from "react";
import "./Estoque.scss";

const Estoque = () => {
  const [estoque, setEstoque] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const pegarProdutos = async () => {
      const produtos = await fetch("http://localhost:3000/produtos")
        .then((res =>  res.json()))
        .catch((erro) => setErro(erro.mensseger));
      setEstoque(produtos);
    };
    pegarProdutos();
  }, []);

  return (
    <section className="estoque">
      {estoque &&
        estoque.map((item) => (
          <div className="produto" key={item.id}>
            <h3>{item.nome}</h3>
            <h4>Quantidade</h4>
            <p>{item.quantidade}</p>
            <h4>Preço</h4>
            <p>R${item.preco}</p>
          </div>
        ))}
    </section>
  );
};

export default Estoque;
