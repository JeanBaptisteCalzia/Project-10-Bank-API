import { useState, useEffect } from "react";
import EditForm from "../../components/EditForm/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  editInputCategory as editInputCategoryAction,
  editInputNote as editInputNoteAction,
} from "../../redux/editFormFieldSlice";
import "./accordion.scss";

const AccordionItem = ({ title, description, amount, balance }) => {
  const dispatch = useDispatch();
  const { category, note } = useSelector((state) => state.editFormField);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(false);
  const [formData, setFormData] = useState({
    category: category,
    note: note,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // We need to spread the previous state and change the one we're targeting,
    // so other data cannot be lost.
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    setFormData({
      category: category,
      note: note,
    });
  };

  const handleCancel = () => {
    setActiveIndex(!activeIndex);
    setFormData({
      category: category,
      note: note,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editInputCategoryAction(formData.category));
    dispatch(editInputNoteAction(formData.note));
    setActiveIndex(!activeIndex);
  };

  useEffect(() => {
    formData.category = category;
    formData.note = note;
  }, [category, note]);

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
                        <EditForm
                          title={"Category :"}
                          id={"category"}
                          isOpen={activeIndex === 1}
                          onClick={() => handleItemClick(1)}
                          onCancel={handleCancel}
                          onSubmit={handleSubmit}
                          onChange={handleChange}
                          value={formData.category}
                        />
                      </li>
                      <li>
                        <EditForm
                          title={"Note :"}
                          id={"note"}
                          isOpen={activeIndex === 2}
                          onClick={() => handleItemClick(2)}
                          onCancel={handleCancel}
                          onSubmit={handleSubmit}
                          onChange={handleChange}
                          value={formData.note}
                        />
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
