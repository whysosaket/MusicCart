import React from "react";

const SignupForm = () => {
  return (
    <div className="authform">
      <h1>Create Account</h1>
      <label>Your name</label>
      <input type="text" placeholder="" />
      <label>Mobile Number</label>
      <input type="text" placeholder="" />
      <label>Email Id</label>
      <input type="text" placeholder="" />
      <label>Password</label>
      <input type="password" placeholder="" />
      <p className="message">
        By enrolling your mobile phone number, you consent to receive automated
        security notifications via text message from Musicart. Message and data
        rates may apply.
      </p>
      <button>Continue</button>
      <p className="terms">
        By continuing, you agree to Musicart privacy notice and conditions of
        use.
      </p>
    </div>
  );
};

export default SignupForm;
