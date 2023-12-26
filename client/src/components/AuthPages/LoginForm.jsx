import React from "react";

const LoginForm = () => {
  return (
    <div className="authform">
      <h1>Sign in</h1>
      <label>Enter your email or mobile number</label>
      <input type="text" placeholder="" />
      <label>Password</label>
      <input type="password" placeholder="" />
      <button>Continue</button>
      <p>
        By continuing, you agree to Musicart privacy notice and conditions of
        use.
      </p>
    </div>
  );
};

export default LoginForm;
