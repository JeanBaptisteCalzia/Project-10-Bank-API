import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import SignIn from "./pages/SignIn/";
import User from "./pages/User/";
import Error from "./components/Error/";
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
