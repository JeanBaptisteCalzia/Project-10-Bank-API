import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./signInForm.scss";

function SignInForm() {
  let navigate = useNavigate();

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userError, setUserError] = useState(false);
  const regex = /^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/;

  async function handleSubmit(event) {
    event.preventDefault();

    setUserNameError(false);
    setPasswordError(false);
    setUserError(false);

    if (!regex.test(userCredentials.email)) {
      setUserNameError(true);
      console.log(userCredentials.email);
      return;
    }

    if (userCredentials.password.length < 8) {
      setPasswordError(true);
      return;
    }

    try {
      const responseData = await loginUser(userCredentials);

      if (responseData.body) {
        let path = "/user";
        navigate(path);
      } else {
        setUserError(true);
        return;
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className="sign-in-content">
      <FontAwesomeIcon className="sign-in-icon" icon={faUserCircle} />
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="email"
            id="username"
            value={userCredentials.email}
            onChange={(e) =>
              setUserCredentials({
                ...userCredentials,
                email: e.target.value,
              })
            }
          />
          {userNameError && <span>Invalid email format</span>}
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={userCredentials.password}
            onChange={(e) =>
              setUserCredentials({
                ...userCredentials,
                password: e.target.value,
              })
            }
          />
          {passwordError && (
            <span>The password must be 8 characters or longer</span>
          )}
        </div>
        {userError && (
          <div className="input-wrapper">
            <span className="error-message">
              Please enter a valid Username and Password
            </span>
          </div>
        )}
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </section>
  );
}
export default SignInForm;
