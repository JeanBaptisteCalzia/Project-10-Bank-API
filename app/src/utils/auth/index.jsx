import { createContext, useContext, useMemo } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setter } from "../../redux/tokenSlice";
import apiBaseUrl from "../../utils/api/";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies();
  const token = useSelector((state) => state.token.value);
  const dispatch = useDispatch();

  const login = async (userCredentials) => {
    try {
      const res = await fetch(`${apiBaseUrl}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userCredentials),
      });

      const response = await res.json();

      if (response.body?.token) {
        dispatch(setter(response.body.token));
        setCookies("token", response.body.token);
        navigate("/user");
      }
    } catch (err) {
      console.error("Erreur :", err);
    }
  };

  const logout = () => {
    ["token", "name"].forEach((obj) => removeCookie(obj)); // remove data save in cookies
    navigate("/sign-in");
  };

  const value = useMemo(
    () => ({
      cookies,
      login,
      logout,
    }),
    [cookies]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useAuth = () => {
  return useContext(UserContext);
};
