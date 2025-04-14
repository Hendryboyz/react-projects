import logo from '../assets/investment-calculator-logo.png'

export default function Header({ title }) {
  return (
    <header id='header'>
      <img src={logo} alt="Logo is a money bag" />
      <h1>{title}</h1>
    </header>
  );
}