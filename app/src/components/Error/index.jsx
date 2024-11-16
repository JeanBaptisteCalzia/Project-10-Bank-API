import { Link } from "react-router-dom";
import "./error.scss";

function Error() {
  return (
    <main>
      <h1>Erreur 404</h1>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <Link to="/" className="btn">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}

export default Error;
