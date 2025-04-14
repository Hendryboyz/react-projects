import {Fragment, useState} from 'react';
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

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
      return { ...prevValue, [inputIdentifier]: +newValue };
    })
  };

  return (
    <Fragment>
      <Header title="Investment Caculator"/>
      <UserInput inputs={investments} handleChange={handleChange} />
      <Result investments={investments} />
    </Fragment>
  )
}

export default App
