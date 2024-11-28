import { useState } from "react";
import Nav from "../../components/Nav/";
import Account from "../../components/Account/";
import Footer from "../../components/Footer/";
import "./user.scss";

function Form({
  onChange,
  onSubmit,
  onCancel,
  errorMessage,
  valueFirstName,
  valueLastName,
}) {
  return (
    <form onSubmit={onSubmit}>
      <label className="sr-only" htmlFor="firstName">
        First name:
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="Tony"
        value={valueFirstName}
        onChange={onChange}
      />
      <label className="sr-only" htmlFor="lastName">
        Last name:
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Jarvis"
        value={valueLastName}
        onChange={onChange}
      />
      <br />
      {errorMessage && (
        <p>Firstname and Name must be greater than 2 characters</p>
      )}
      <br />
      <button type="submit" className="button is--save">
        Save
      </button>
      <button className="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

function User() {
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Tony",
    lastName: "Jarvis",
  });
  const [isInputError, setIsInputError] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((data) => ({
      ...data,
      [name]: value,
    }));

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.firstName.length < 3 || formData.lastName.length < 3) {
      setIsInputError(true);
    } else {
      setFormData(formData);
      setIsEdit(!isEdit);
    }
  }

  function handleCancel() {
    setIsEdit(!isEdit);
  }

  return (
    <>
      <Nav />
      <main className="main bg-dark user">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {!isEdit ? `${formData.firstName} ${formData.lastName} !` : null}
          </h1>
          {isEdit ? (
            <Form
              onChange={handleChange}
              onSubmit={handleSubmit}
              onCancel={handleCancel}
              errorMessage={isInputError}
              valueFirstName={formData.firstName}
              valueLastName={formData.lastName}
            />
          ) : null}

          {!isEdit ? (
            <button className="edit-button" onClick={() => setIsEdit(!isEdit)}>
              Edit Name
            </button>
          ) : null}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account hasBtn={true} />
      </main>
      <Footer />
    </>
  );
}

export default User;
