import Nav from "../../components/Nav/";
import Account from "../../components/Account/";
import Accordion from "../../components/Accordion/";
import Footer from "../../components/Footer/";
import "./transaction.scss";

function Transaction() {
  const transaction = [
    {
      date: "June 20th, 2020",
      description: "Golden Sun Bakery",
      amount: "$10.00",
      balance: "$2000.80",
    },
    {
      date: "June 20th, 2020",
      description: "Golden Sun Bakery",
      amount: "$10.00",
      balance: "$2000.80",
    },
    {
      date: "June 20th, 2020",
      description: "Golden Sun Bakery",
      amount: "$10.00",
      balance: "$2000.80",
    },
    {
      date: "June 20th, 2020",
      description: "Golden Sun Bakery",
      amount: "$10.00",
      balance: "$2000.80",
    },
    {
      date: "June 20th, 2020",
      description: "Golden Sun Bakery",
      amount: "$10.00",
      balance: "$2000.80",
    },
  ];

  return (
    <>
      <Nav />
      <main className="main bg-dark transaction-page">
        <Account hasBtn={false} />
        <Accordion
          accoData={transaction}
          accoTitle="Date"
          accoTitle2="Description"
          accoTitle3="Amount"
          accoTitle4="Balance"
        />
      </main>
      <Footer />
    </>
  );
}

export default Transaction;
