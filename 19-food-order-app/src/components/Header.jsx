import {useContext} from "react";
import Logo from '../assets/logo.jpg';
import {CartContext} from "../store/cart-context.jsx";

export default function Header() {
  const {items} = useContext(CartContext);
  return (
    <header id="main-header">
      <h1 id="title">
        <img src={Logo} alt="logo" />
        ReactFood
      </h1>
      <button className="text-button">
        Cart({items.length})
      </button>
    </header>
  );
}