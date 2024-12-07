import { useState } from "react";
import EditForm from "../../components/EditForm/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./accordion.scss";

const AccordionItem = ({ title, description, amount, balance }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <tr className="accordion-container__wrapper">
        <td colSpan="4">
          <table>
            <tbody>
              <tr
                className="accordion-container__row"
                onClick={() => setIsOpen(!isOpen)}
              >
                <td>
                  <button
                    className={`accordion-container__btn ${
                      isOpen ? "active" : ""
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={isOpen ? faChevronUp : faChevronDown}
                    />
                  </button>

                  {title}
                </td>
                <td>{description}</td>
                <td>{amount}</td>
                <td>{balance}</td>
              </tr>
              {isOpen ? (
                <tr className="accordion-container__row-expanded">
                  <td colSpan="4">
                    <ul>
                      <li>Transaction Type : Electronic</li>
                      <li>
                        <EditForm title="Category :" />
                      </li>
                      <li>
                        <EditForm title="Note :" />
                      </li>
                    </ul>
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </td>
      </tr>
    </>
  );
};

function Accordion({
  accoData,
  accoTitle,
  accoTitle2,
  accoTitle3,
  accoTitle4,
}) {
  return (
    <div className="table-scroll">
      <table className="accordion-container">
        <caption></caption>
        <thead className="accordion-container__header">
          <tr>
            <th>{accoTitle}</th>
            <th>{accoTitle2}</th>
            <th>{accoTitle3}</th>
            <th>{accoTitle4}</th>
          </tr>
        </thead>
        <tbody className="accordion-container__body">
          {accoData.map((item, index) => (
            <AccordionItem
              key={`${item}-${index}`}
              title={item.date}
              description={item.description}
              amount={item.amount}
              balance={item.balance}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Accordion;
