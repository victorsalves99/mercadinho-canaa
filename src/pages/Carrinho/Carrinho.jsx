import "./Carrinho.scss";

const Carrinho = ({ produtos }) => {
  return (
    <select name="produtos" id="produtos" size={15} className="produtos">
      {produtos && produtos.map((item) => (
        <option key={item.nome} className="produto">{item.quantidade}X -- {item.nome} -- R${item.preco}</option>
      ))}
    </select>
  );
};

export default Carrinho;
