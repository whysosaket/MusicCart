import React, { useContext } from "react";
import Logo from "../components/Logo";
import "../css/Auth.css";
import SignupForm from "../components/AuthPages/SingupForm";
import GlobalContext from "../context/GlobalContext";

const Signup = () => {

  const context = useContext(GlobalContext);
  const {signup} = context;

  return (
    <div className="login">
      <div className="logincontainer">
        <Logo />
        <SignupForm meth={signup} />
        <div className="alreadyhaveanaccount">
          Already have an account? <span className="signin"> Sign in</span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
