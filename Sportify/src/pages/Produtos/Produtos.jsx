import "../../styles/Produtos.css";
import camisa1 from "../../assets/imgs/camisa1.png";
import camisa2 from "../../assets/imgs/camisa2.png";
import camisa3 from "../../assets/imgs/camisa3.webp";
import chuteira1 from "../../assets/imgs/chuteira1.png";
import chuteira2 from "../../assets/imgs/chuteira2.png";
import chuteira3 from "../../assets/imgs/chuteira3.webp";

const Produtos = () => {
  const produtos = [
    {
      id: 1,
      nome: "Camisa São paulo",
      foto: camisa1,
    },
    {
      id: 2,
      nome: "Camisa Corinthians",
      foto: camisa2,
    },
    {
      id: 3,
      nome: "Camisa Santos",
      foto: camisa3,
    },
    {
      id: 4,
      nome: "Chuteira Penalty",
      foto: chuteira1,
    },
    {
      id: 5,
      nome: "Chuteira Penalty 2",
      foto: chuteira2,
    },
    {
      id: 6,
      nome: "Chuteira Umbro",
      foto: chuteira3,
    },
  ];

  return (
    <>
      <div className="title">
        <h1>Produtos</h1>
      </div>
      <div className="produto">
        {produtos.map((produto) => (
          <div key={produto.id}>
            <h2>{produto.nome}</h2>
            <div className="img-container">
              <img src={produto.foto} alt={produto.nome} />
            </div>
            <button>Comprar</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Produtos;
