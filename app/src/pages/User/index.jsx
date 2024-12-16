import { useState, useEffect } from "react";
import Nav from "../../components/Nav/";
import Account from "../../components/Account/";
import Footer from "../../components/Footer/";
import { accountData } from "../../data/accountData";
import { getUserProfile, updateUserProfile } from "../../utils/api/";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "./user.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  editFirstName as editFirstNameAction,
  editLastName as editLastNameAction,
} from "../../redux/userSlice";

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
        placeholder={valueFirstName}
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
        placeholder={valueLastName}
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
  const dispatch = useDispatch();
  const { firstName, lastName, isLoading, isError } = useSelector(
    (state) => state.user
  );

  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    firstName: firstName,
    lastName: lastName,
  });
  const [isInputError, setIsInputError] = useState(false);
  const [cookies, setCookies, removeCookie] = useCookies();

  const navigate = useNavigate();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsInputError(false);
    if (formData.firstName.length < 3 || formData.lastName.length < 3) {
      setIsInputError(true);
    } else {
      const token = cookies.token;
      setIsEdit(!isEdit);
      dispatch(editFirstNameAction(formData.firstName));
      dispatch(editLastNameAction(formData.lastName));
      updateUserProfile(token, formData);
    }
  };

  const handleCancel = () => {
    setIsInputError(false);
    formData.firstName = firstName;
    formData.lastName = lastName;
    setIsEdit(!isEdit);
  };

  useEffect(() => {
    const token = cookies.token;

    if (!token) {
      navigate("/sign-in");
    } else {
      dispatch(getUserProfile(token));
      formData.firstName = firstName;
      formData.lastName = lastName;
    }
  }, [cookies.token, navigate, dispatch, firstName, lastName]);

  return (
    <>
      <Nav />
      {isLoading ? (
        `Loading...`
      ) : isError ? (
        `No user...`
      ) : (
        <>
          <main className="main bg-dark user">
            <div className="header">
              <h1>
                Welcome back
                <br />
                {!isEdit ? `${firstName} ${lastName} !` : null}
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
                <button
                  className="edit-button"
                  onClick={() => setIsEdit(!isEdit)}
                >
                  Edit Name
                </button>
              ) : null}
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accountData.map(({ id, title, amount, description }) => (
              <Account
                key={id}
                id={id}
                hasBtn={true}
                title={title}
                amount={amount}
                description={description}
              />
            ))}
          </main>
        </>
      )}
      <Footer />
    </>
  );
}

export default User;
