import Layout from "./Layout";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/Global.css";

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
