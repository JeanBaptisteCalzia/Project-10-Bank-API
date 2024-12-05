import "./Nav.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../utils/auth";

function Nav() {
  const { cookies, logout } = useAuth();

  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink to="/sign-in" className="main-nav-item">
          <FontAwesomeIcon icon={faUserCircle} />
          Sign In
        </NavLink>

        {cookies.token ? (
          <NavLink className="main-nav-item" onClick={() => logout()}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            Sign Out
          </NavLink>
        ) : null}
      </div>
    </nav>
  );
}

export default Nav;
