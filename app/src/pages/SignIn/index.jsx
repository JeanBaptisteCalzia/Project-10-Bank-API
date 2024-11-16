import Nav from "../../components/Nav/";
import SignInForm from "../../components/SignInForm/";
import Footer from "../../components/Footer/";
import "./signIn.scss";

function SignIn() {
  return (
    <>
      <Nav />
      <main className="main bg-dark">
        <SignInForm />
      </main>
      <Footer />
    </>
  );
}

export default SignIn;
