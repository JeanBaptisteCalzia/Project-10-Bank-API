import Nav from "../../components/Nav/";
import Account from "../../components/Account/";
import Footer from "../../components/Footer/";
import "./transaction.scss";

function Transaction() {
  return (
    <>
      <Nav />
      <main className="main bg-dark transaction-page">
        <Account hasBtn={false} />
      </main>
      <Footer />
    </>
  );
}

export default Transaction;
