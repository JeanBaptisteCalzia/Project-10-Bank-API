import { useNavigate } from "react-router-dom";
import "./account.scss";

function Account() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/transaction";
    navigate(path);
  };

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
        <p className="account-amount">$2,082.79</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button onClick={routeChange} className="transaction-button">
          View transactions
        </button>
      </div>
    </section>
  );
}
export default Account;
