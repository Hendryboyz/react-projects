import { useState } from 'react';
import { styled } from 'styled-components';
import AuthButton from "./Button.jsx";
import InputGroup from "./Input.jsx";

const ControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
`

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className="w-full max-w-sm p-8 rounded shadow-md mx-auto bg-gradient-to-b from-stone-700 to-stone-800">
      <div className="flex flex-col mb-6 gap-2">
        <InputGroup
          type="email"
          label="email"
          // className={emailNotValid ? 'invalid' : undefined}
          invalid={emailNotValid}
          // style={{
          //   backgroundColor: emailNotValid ? "#fed2d2": "#d1d5db",
          // }}
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
        <InputGroup
          type="password"
          label="password"
          // className={emailNotValid ? 'invalid' : undefined}
          invalid={passwordNotValid}
          // style={{
          //   backgroundColor: emailNotValid ? "#fed2d2": "#d1d5db",
          // }}
          onChange={(event) => handleInputChange('password', event.target.value)}
        />
      </div>
      <div className="flex justify-end gap-4" style={{ marginTop: '2rem' }}>
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <AuthButton onClick={handleLogin}>Sign In</AuthButton>
      </div>
    </div>
  );
}
