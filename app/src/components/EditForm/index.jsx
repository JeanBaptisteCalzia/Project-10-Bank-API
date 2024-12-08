import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./editForm.scss";

function EditForm({ title, isOpen, onClick, onCancel, onSubmit }) {
  const [formInput, setFormInput] = useState("");

  const handleChange = (e) => {
    setFormInput(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="edit-form">
      <div className="input-wrapper">
        <label htmlFor={title}>{title}</label>
        {!isOpen ? (
          <>
            {formInput && <p>{formInput}</p>}
            <i onClick={onClick}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </i>
          </>
        ) : null}
        {isOpen ? (
          <>
            <input
              type="text"
              id={title}
              name={title}
              value={formInput}
              onChange={handleChange}
            />
            <br />
            <button className="button is--cancel" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="button is--save">
              Save
            </button>
          </>
        ) : null}
      </div>
    </form>
  );
}

export default EditForm;
