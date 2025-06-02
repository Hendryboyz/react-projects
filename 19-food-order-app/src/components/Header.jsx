import {useContext} from "react";
import Logo from '../assets/logo.jpg';
import {CartContext} from "../store/cart-context.jsx";
export default function Header() {
  const {items, openCart} = useContext(CartContext);
  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="logo"/>
        <h1>ReactFood</h1>
      </div>
      <nav id="button">
        <button
          className="text-button"
          onClick={openCart}
        >
          Cart({items.length})
        </button>
      </nav>
    </header>
  );
}