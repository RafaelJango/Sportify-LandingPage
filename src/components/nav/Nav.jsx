import "./Nav.css";

const Nav = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        Logo
      </a>

      <nav className="navbar">
        <a href="/Home">Home</a>
        <a href="/Produtos">Produtos</a>
        <a href="/Sobre">Sobre</a>
        <a href="/Contato">Contato</a>
      </nav>
    </header>
  );
};

export default Nav;
