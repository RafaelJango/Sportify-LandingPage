import "../../styles/Home.css";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="background-image"></div>
        <div className="home-main-content">
          <h1>Encontre o melhor para o seu esporte!</h1>
          <p>
            Na Sportify, temos tudo o que você precisa para se destacar em
            qualquer modalidade. Equipamentos, roupas e acessórios de alta
            qualidade, das maiores marcas, para te ajudar a alcançar o seu
            melhor desempenho. Não importa se você é profissional ou iniciante,
            aqui é o lugar certo para você!
          </p>
          <div className="home-purchase-button">
            <a href="#">Comprar Agora</a>
          </div>
        </div>

        <div className="home-banner2">
          <img
            src="https://images.unsplash.com/photo-1718638141977-3535fb151e51?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Home;
