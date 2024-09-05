import "../../styles/Home.css";

const Home = () => {
  return (
    <>
      <div className="BackgroundImage"></div>
      <div className="shape"></div>

      <main className="Content">
        <section className="Home">
          <div className="CTA">
            <h1>Encontre o melhor para o seu esporte!</h1>
            <p>
              Na <span>Sportify</span>, temos tudo o que você precisa para se
              destacar em qualquer modalidade. Equipamentos, roupas e acessórios
              de alta qualidade, das maiores marcas, para te ajudar a alcançar o
              seu melhor desempenho. Não importa se você é profissional ou
              iniciante, aqui é o lugar certo para você!
            </p>
            <div className="CTAButton">
              <a href="#" className="ButtonDefault">
                Comprar Agora
              </a>
            </div>
          </div>

          <div className="Banner">
            <img
              src="https://images.unsplash.com/photo-1718638141977-3535fb151e51?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
