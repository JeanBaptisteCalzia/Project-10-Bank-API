import Nav from "../../components/Nav/";
import Account from "../../components/Account/";
import Accordion from "../../components/Accordion/";
import Footer from "../../components/Footer/";
import { accountData } from "../../data/accountData";
import { transactionData } from "../../data/transactionData";
import { useParams } from "react-router-dom";
import "./transaction.scss";

function Transaction() {
  const params = useParams();
  const transactionId = params.id;
  const currentTransaction = accountData.filter(
    (accountData) => accountData.id == transactionId
  );
  const currentId = currentTransaction.map((id) => id.id);

  const currentTransactionArray = transactionData.filter(
    (transData) => transData.id == transactionId
  );

  console.log(currentTransactionArray);

  if (currentId.toString() !== transactionId) {
    return <p>No data</p>;
  } else {
    return (
      <>
        <Nav />
        <main className="main bg-dark transaction-page">
          {currentTransaction.map(({ id, title, amount, description }) => (
            <Account
              key={id}
              id={currentId}
              hasBtn={false}
              title={title}
              amount={amount}
              description={description}
            />
          ))}

          <Accordion
            accoData={currentTransactionArray[0].data}
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
}

export default Transaction;
