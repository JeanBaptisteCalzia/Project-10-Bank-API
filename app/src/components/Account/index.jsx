import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
import "./account.scss";

function Account({ id, hasBtn, title, amount, description }) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/transaction/${id}`;
    navigate(path);
  };

  return (
    <section key={id} className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      {hasBtn ? (
        <div className="account-content-wrapper cta">
          <button onClick={routeChange} className="transaction-button">
            View transactions
          </button>
        </div>
      ) : null}
    </section>
  );
}
export default Account;
