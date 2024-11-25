import { useState } from "react";
import Nav from "../../components/Nav/";
import Account from "../../components/Account/";
import Footer from "../../components/Footer/";
import "./user.scss";

function User() {
  const [isEdit, setIsEdit] = useState(false);
  const [firstName, setFirstName] = useState("Tony");
  const [lastName, setLastName] = useState("Jarvis");
  const [isInputError, setIsInputError] = useState(false);

  function handleChangeFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleChangeLastName(e) {
    setLastName(e.target.value);
  }

  function cancel() {
    setIsEdit(!isEdit);
    setFirstName(firstName);
    setLastName(lastName);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (firstName.length < 3 || lastName.length < 3) {
      setIsInputError(true);
    } else {
      setFirstName(firstName);
      setLastName(lastName);
      setIsEdit(!isEdit);
    }
  }

  return (
    <>
      <Nav />
      <main className="main bg-dark user">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {!isEdit ? `${firstName} ${lastName} !` : null}
          </h1>
          {isEdit ? (
            <form onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="firstName">
                First name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Tony"
                // minLength={3}
                value={firstName}
                onChange={handleChangeFirstName}
              />
              <label className="sr-only" htmlFor="lastName">
                Last name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Jarvis"
                // minLength={3}
                value={lastName}
                onChange={handleChangeLastName}
              />
              <br />
              {isInputError && (
                <p>Firstname and Name must be greater than 2 characters</p>
              )}
              <br />
              <button type="submit" className="button is--save">
                Save
              </button>
              <button className="button" onClick={cancel}>
                Cancel
              </button>
            </form>
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
