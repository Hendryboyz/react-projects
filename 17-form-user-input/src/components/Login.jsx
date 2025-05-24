import {useRef, useState} from "react";
import Input from "./Input.jsx";

const INITIAL_FORM_STATE = {
  email: "",
  password: "",
};

const INITIAL_EDIT_STATE = {
  email: false,
  password: false,
}

function StateLogin() {
  const [data, setData] = useState(INITIAL_FORM_STATE);
  const [didEdit, setDidEdit] = useState(INITIAL_EDIT_STATE);
  const isEmailInvalid = didEdit.email && !data.email.includes("@");
  const isPasswordInvalid = didEdit.password && data.password.trim().length < 6;

  function handleSubmit(event) {
    event.preventDefault();
    if (isEmailInvalid || isPasswordInvalid) {
      return;
    }
    console.log(data);
    // reset
    console.log('reset', INITIAL_FORM_STATE);
    setData(INITIAL_FORM_STATE);
    setDidEdit(INITIAL_EDIT_STATE);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setData(prevValues => ({
      ...prevValues,
      [name]: value,
    }))
    setDidEdit(prevValues => ({
      ...prevValues,
      [name]: false,
    }));
  }

  function handleInputBlur(event) {
    const { name, value } = event.target;
    setDidEdit(prevValues => ({
      ...prevValues,
      [name]: true,
    }));

    if (name === "email") {}

    if (name === "password") {}
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
          value={data.email}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          error={isEmailInvalid && 'Please enter a valid email!'}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={data.password}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          error={isPasswordInvalid && 'Please enter a valid password!'}
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