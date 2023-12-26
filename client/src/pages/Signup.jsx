import React from "react";
import Logo from "../components/Logo";
import "../css/Auth.css";
import SignupForm from "../components/AuthPages/SingupForm";

const Signup = () => {
  return (
    <div className="login">
      <div className="logincontainer">
        <Logo />
        <SignupForm />
        <div className="alreadyhaveanaccount">
          Already have an account? <span className="signin"> Sign in</span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
