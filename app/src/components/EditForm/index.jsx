import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./editForm.scss";

function EditForm({
  title,
  id,
  isOpen,
  onClick,
  onCancel,
  onSubmit,
  onChange,
  value,
}) {
  return (
    <form onSubmit={onSubmit} noValidate className="edit-form">
      <div className="input-wrapper">
        <label htmlFor={title}>{title}</label>
        {!isOpen ? (
          <>
            {value && <p>{value}</p>}
            <i onClick={onClick}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </i>
          </>
        ) : null}
        {isOpen ? (
          <>
            <input
              type="text"
              id={id}
              name={id}
              value={value}
              onChange={onChange}
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
