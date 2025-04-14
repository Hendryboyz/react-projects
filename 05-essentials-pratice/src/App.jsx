import {Fragment, useState} from 'react';
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import { z } from 'zod';
const Investment = z.object({
  initialInvestment: z.number().positive('investment must greater than 0'),
  annualInvestment: z.number().positive('investment must greater than 0'),
  expectedReturn: z.number().positive('expected return must greater than 0'),
  duration: z.number().positive('duration must greater than 1').min(1),
});

const initialInvestments = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 8,
  duration: 12,
};

function App() {
  const [investments, setInvestments] = useState(initialInvestments);
  const handleChange = (inputIdentifier, newValue) => {
    setInvestments((prevValue) => {
      // input value always be string
      return { ...prevValue, [inputIdentifier]: +newValue };
    })
  };

  const { success: isValidInput, error} = Investment.safeParse(investments);
  const errors = !isValidInput && error.errors;

  return (
    <Fragment>
      <Header title="Investment Caculator"/>
      <UserInput inputs={investments} handleChange={handleChange} />
      { isValidInput ? (<Result investments={investments} />) : (
        errors.map((eachError => (<p className="center error-message">{eachError.message}</p>)))
      ) }
    </Fragment>
  )
}

export default App
