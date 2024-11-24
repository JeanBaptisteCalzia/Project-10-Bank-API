import "./signInForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/user";
    navigate(path);
  };

  return (
    <section className="sign-in-content">
      <FontAwesomeIcon classNmae="sign-in-icon" icon={faUserCircle} />
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button onClick={routeChange} className="sign-in-button">
          Sign In
        </button>
      </form>
    </section>
  );
}
export default SignInForm;
