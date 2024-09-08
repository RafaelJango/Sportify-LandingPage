import "../../styles/Error.css";

import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <Link to="/" className="ButtonError">Voltar para home</Link>
    </div>
  );
};

export default Error;
