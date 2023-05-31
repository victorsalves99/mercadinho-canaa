// importação de imagens
import logo from "../../img/logo-canaa.jpg";
// importação de componentes
import Carrinho from "../../Components/Carrinho/Carrinho";
import Loading from "../Loading/Loading";
// importação de estilo
import "./Caixa.scss";
// importação de componente react
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Caixa = () => {
  // declarção de estados
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [cod, setCod] = useState("");
  const [total, setTotal] = useState(0);
  const [recebido, setRecebido] = useState(0);
  const [troco, setTroco] = useState(0);
  const [vendaDia, setVendaDia] = useState(0);
  const [loading, setLoading] = useState(false);

  // carrega os produto ao abrir
  useEffect(() => {
    async function pegarDados() {
      setLoading(true);
      let dadosProdutos = await fetch("http://localhost:3000/produtos").then(
        (res) => res.json()
      );
      setProdutos(dadosProdutos);
      setLoading(false);
    }
    pegarDados();
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
      let produto = produtos.find((item) => item.codigo === cod);
      let produtoExiste = false;
      let localItem = 0;
      if (produto === undefined) {
        setCod("");
        alert("Produto Não Encontrado!");
        return;
      }
      carrinho.forEach((item, index) => {
        if (produto.codigo === item.codigo) {
          localItem = index;
          produtoExiste = true;
        }
      });
      if (produtoExiste) {
        carrinho[localItem].quantidade += 1;
        carrinho[localItem].preco += produto.preco;
      } else {
        let item = {
          quantidade: 1,
          preco: produto.preco,
          nome: produto.nome,
          codigo: produto.codigo,
          id: produto.id,
        };
        setCarrinho((prev) => [...prev, item]);
      }
      setCod("");
    }
  };
  // finalizar a compra
  const finalizarCompra = () => {
    // window.print()
    setLoading(true);
    carrinho.forEach((item) => {
      async function pegarDadosEspecifico() {
        let prevProduto = await fetch(
          `http://localhost:3000/produtos/${item.id}`
        ).then((res) => res.json());
        console.log(prevProduto);
        return prevProduto.quantidade;
      }
      async function mudarDadosEspecifico() {
        let quantidade = await pegarDadosEspecifico();
        console.log(quantidade);
        let atualicao = quantidade - item.quantidade;
        console.log(item.id);
        await fetch(`http://localhost:3000/produtos/${item.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            preco: item.preco,
            nome: item.nome,
            codigo: item.codigo,
            id: item.id,
            quantidade: atualicao,
          }),
        });
      }
      mudarDadosEspecifico();
    });
    setLoading(false);
    window.alert("Obrigado Volte sempre");
    setVendaDia(total + vendaDia);
    setCarrinho([]);
    setCod("");
    setTotal(0);
    setRecebido(0);
    setTroco(0);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
                <label
                  className="Codigo"
                  onKeyPress={(ev) => addCarrinho(ev.key)}
                >
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
      )}
    </>
  );
};

export default Caixa;
