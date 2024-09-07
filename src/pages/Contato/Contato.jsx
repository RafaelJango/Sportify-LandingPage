import "../../styles/Contato.css";

const Contato = () => {
  return (
    <>
      <body className="body-form">
        <div className="contato">
          <h1>Contato</h1>
          <h2>
            Entre em contato conosco para obter mais informações ou enviar suas
            perguntas
          </h2>
        </div>
        <form
          action="mailto:seuemail@example.com"
          method="post"
          encType="text/plain"
        >
          <h3>Preencha com suas informações</h3>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
          <br />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <br />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </body>
    </>
  );
};

export default Contato;
