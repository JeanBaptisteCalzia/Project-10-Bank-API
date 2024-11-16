import Nav from "../../components/Nav/";
import Account from "../../components/Account/";
import Footer from "../../components/Footer/";
import "./user.scss";

function User() {
  return (
    <>
      <Nav />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account />
      </main>
      <Footer />
    </>
  );
}

export default User;
