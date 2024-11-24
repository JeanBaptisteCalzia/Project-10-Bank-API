import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./accordion.scss";

const AccordionItem = ({ title, description, amount, balance }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-wrapper">
      <div
        className="accordion-wrapper__row"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="accordion-wrapper__items">
          <p className="accordion-wrapper__item">
            <button
              className={`accordion-wrapper__btn ${isOpen ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </button>

            {title}
          </p>
          <p className="accordion-wrapper__item">{description}</p>
          <p className="accordion-wrapper__item">{amount}</p>
          <p className="accordion-wrapper__item">{balance}</p>
        </div>
      </div>
      <div className={`accordion-wrapper__content ${isOpen ? "active" : ""}`}>
        <p>Content</p>
        <p>Transaction Type : Electronic</p>
        <p>Category : Food</p>
        <p>Note</p>
      </div>
    </div>
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
    <div className="accordion-container">
      <div className="accordion-container__rows">
        <p className="accordion-container__row">{accoTitle}</p>
        <p className="accordion-container__row">{accoTitle2}</p>
        <p className="accordion-container__row">{accoTitle3}</p>
        <p className="accordion-container__row">{accoTitle4}</p>
      </div>

      {accoData.map((item, index) => (
        <AccordionItem
          key={`${item}-${index}`}
          title={item.date}
          description={item.description}
          amount={item.amount}
          balance={item.balance}
        />
      ))}
    </div>
  );
}

export default Accordion;
