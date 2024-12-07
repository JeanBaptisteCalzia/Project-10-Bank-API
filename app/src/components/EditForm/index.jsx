import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./editForm.scss";

function EditForm({ title }) {
  const [isEdit, setIsEdit] = useState(false);
  const [formInput, setFormInput] = useState("");

  const handleChange = (e) => {
    setFormInput(e.target.value);
  };

  const handleCancel = () => {
    setIsEdit(!isEdit);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setIsEdit(!isEdit);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="edit-form">
      <div className="input-wrapper">
        <label htmlFor={title}>{title}</label>
        {!isEdit ? (
          <>
            {formInput && <p>{formInput}</p>}
            <i onClick={() => setIsEdit(!isEdit)}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </i>
          </>
        ) : null}
        {isEdit ? (
          <>
            <input
              type="text"
              id={title}
              name={title}
              value={formInput}
              onChange={handleChange}
            />
            <br />
            <button className="button is--cancel" onClick={handleCancel}>
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
