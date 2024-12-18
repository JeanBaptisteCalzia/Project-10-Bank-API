import "./Nav.scss";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "../../utils/api/";

function Nav() {
  const [cookies, setCookies, removeCookie] = useCookies();
  const navigate = useNavigate();
  const { firstName } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logout = () => {
    ["token", "name"].forEach((obj) => removeCookie(obj));
    navigate("/sign-in");
  };

  useEffect(() => {
    const token = cookies.token;

    if (!token) {
      navigate("/sign-in");
    } else {
      dispatch(getUserProfile(token));
    }
  }, [cookies.token, navigate, dispatch, firstName]);

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
        {cookies.token ? (
          <NavLink to="/user" className="main-nav-item">
            <FontAwesomeIcon icon={faUserCircle} />
            {firstName}
          </NavLink>
        ) : (
          <NavLink to="/sign-in" className="main-nav-item">
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </NavLink>
        )}

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
