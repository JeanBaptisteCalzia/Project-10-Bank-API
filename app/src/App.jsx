import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import SignIn from "./pages/SignIn/";
import User from "./pages/User/";
import Transaction from "./pages/Transaction/";
import Error from "./components/Error/";
import { ProtectRoutes } from "./utils/protectRoutes/";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route element={<ProtectRoutes />}>
            <Route path="/user" element={<User />} />
            <Route path="/transaction/:id" element={<Transaction />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
