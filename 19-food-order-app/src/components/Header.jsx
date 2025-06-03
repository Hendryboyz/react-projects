import {useContext} from "react";
import Logo from '../assets/logo.jpg';
import {CartContext} from "../store/cart-context.jsx";
import Button from "./UI/Button.jsx";
export default function Header() {
  const {items, openCart} = useContext(CartContext);
  const totalCartItems = items.reduce((acc, item) => acc + item.count, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="logo"/>
        <h1>ReactFood</h1>
      </div>
      <nav id="button">
        <Button
          textOnly={true}
          onClick={openCart}
        >
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}