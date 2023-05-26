// importação de imagens
import logo from "../../img/logo-canaa.jpg";
// importação de componentes
import Carrinho from "../Carrinho/Carrinho";
// importação de estilo
import "./Caixa.scss";
// importação de componente react
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Caixa = () => {
  // declarção de estados
  const [carrinho, setCarrinho] = useState([]);
  const [cod, setCod] = useState("");
  const [total, setTotal] = useState(0);
  const [recebido, setRecebido] = useState(0);
  const [troco, setTroco] = useState(0);
  const [vendaDia, setVendaDia] = useState(0);

  // carrega os produto ao abrir
  useEffect(() => {
    setCarrinho(carrinho);
  }, []);
  // calcura o troco
  useEffect(() => {
    setTroco(Number(recebido) - total);
  }, [recebido]);
  // calcula o valor total
  useEffect(() => {
    let soma = 0;
    carrinho.map((item) => {
      soma += item.preco;
    });
    setTotal(soma);
  }, [cod]);

  // adiciona itens ao carrinho
  const addCarrinho = (ev) => {
    if (ev === "Enter") {
      let produto = pro.find((item) => item.codigo === cod);
      let produtoExiste = false;
      let localItem = 0;
      carrinho.forEach((item, index) => {
        if (produto.codigo === item.codigo) {
          localItem = index;
          produtoExiste = true;
        }
      });
      console.log(produtoExiste);
      if (produtoExiste) {
        carrinho[localItem].quantidade += 1;
        carrinho[localItem].preco += produto.preco;
      } else {
        let item = {
          quantidade: 1,
          preco: produto.preco,
          nome: produto.nome,
          codigo: produto.codigo,
        };
        setCarrinho((prev) => [...prev, item]);
      }
      setCod("");
    }
  };
  // finalizar a compra
  const finalizarCompra = () => {
    // window.print()
    window.alert("Obrigado Volte sempre");
    setVendaDia(total + vendaDia);
    setCarrinho([]);
    setCod("");
    setTotal(0);
    setRecebido(0);
    setTroco(0);
  };

  return (
    <div>
      {/* navegção */}
      <nav className="navBar">
        <Link to="/" className="boxLogo">
          <img src={logo} className="imgLogo" />
        </Link>

        <div className="informacaoDoDia">
          <h4>Faturamento do Dia:</h4>
          <p>R$ {vendaDia}</p>
        </div>
        <button>Finalizar Dia</button>
      </nav>
      {/* caixa principal */}
      <div className="caixa">
        <div className="titulo">
          <h2>CAIXA LIVRE</h2>
        </div>
        <div className="boxCarrinho">
          <div className="carrinho">
            <Carrinho produtos={carrinho} />
          </div>
          <div className="comandos">
            <label className="Codigo" onKeyPress={(ev) => addCarrinho(ev.key)}>
              <span>Codigo Do Produto</span>
              <input
                type="text"
                onChange={(ev) => setCod(ev.target.value)}
                value={cod}
              />
            </label>
            <p>
              Valor Total: <span>R${total}</span>
            </p>
            <label className="recebido">
              <span>Valor Recebido:</span>
              <input
                type="number"
                onChange={(ev) => setRecebido(ev.target.value)}
                value={recebido === 0 ? "" : recebido}
              />
            </label>
            <p>
              Troco: <span>R${troco}</span>
            </p>
            <button onClick={finalizarCompra}>Finalizar Compra</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caixa;

const pro = [
  {
    nome: "Presunto",
    quantidade: 34,
    preco: 32,
    codigo: "1",
  },
  {
    nome: "Queijo",
    quantidade: 31,
    preco: 33,
    codigo: "2",
  },
  {
    nome: "Pão",
    quantidade: 3,
    preco: 3,
    codigo: "3",
  },
  {
    nome: "Arroz",
    quantidade: 24,
    preco: 2,
    codigo: "4",
  },
  {
    nome: "Gaz",
    quantidade: 100,
    preco: 35,
    codigo: "5",
  },
  {
    nome: "Macarrão",
    quantidade: 200,
    preco: 4,
    codigo: "6",
  },
  {
    nome: "Coca-Cola",
    quantidade: 344,
    preco: 7,
    codigo: "7",
  },
];
