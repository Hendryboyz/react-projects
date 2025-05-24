import {useRef, useState} from "react";
import Input from "./Input.jsx";
import {hasMinLength, isEmail, isNotEmpty} from '../util/validation.js';
import useInput from "../hooks/useInput.js";

const INITIAL_FORM_STATE = {
  email: "",
  password: "",
};

const INITIAL_EDIT_STATE = {
  email: false,
  password: false,
}

function StateLogin() {
  const {
    value: email,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: hasEmailError,
  } = useInput('', (value) => (isEmail(value) && isNotEmpty(value)));
  const {
    value: password,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: hasPasswordError,
  } = useInput('', (value) => (hasMinLength(value, 6)));

  function handleSubmit(event) {
    event.preventDefault();
    if (hasEmailError || hasPasswordError) {
      return;
    }
    console.log(email, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          value={email}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          error={hasEmailError && 'Please enter a valid email!'}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={password}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          error={hasPasswordError && 'Please enter a valid password!'}
        />
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button type='submit' className="button">Login</button>
      </p>
    </form>
  );
}

function RefLogin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(emailRef.current?.value, passwordRef.current?.value);
    const enteredEmail = emailRef.current?.value;
    const enteredPassword = passwordRef.current?.value;

    const isEmailValid = enteredEmail.includes('@');
    if (!isEmailValid) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);
    console.log('Sending HTTP request...');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={emailRef}
          />
          {emailIsInvalid && <div className="control-error">Please enter a valid email address</div>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type='submit' className="button">Login</button>
      </p>
    </form>
  );

}

export default StateLogin;