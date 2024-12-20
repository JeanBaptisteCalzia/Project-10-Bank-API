import { Outlet, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const ProtectRoutes = () => {
  const [cookies] = useCookies();

  return cookies.token ? <Outlet /> : <Navigate to="/" exact />;
};
