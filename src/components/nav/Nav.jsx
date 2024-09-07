import "../../styles/Nav.css";
import logo from "../../assets/imgs/logo.png";

const Nav = () => {
  return (
    <header className="header">
      <div className="logo-name">
        <div>
          <img src={logo} alt="Logo" id="logo-image" />
        </div>
        <h1>Sportify</h1>
      </div>

      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/Produtos">Produtos</a>
        <a href="/Sobre">Sobre</a>
        <a href="/Contato">Contato</a>
      </nav>
    </header>
  );
};

export default Nav;
