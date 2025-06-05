import {useContext} from "react";
import Logo from '../assets/logo.jpg';
import {CartContext} from "../store/cart-context.jsx";
import Button from "./UI/Button.jsx";
import {UserProgressContext} from "../store/user-progress-context.jsx";
export default function Header() {
  const {items} = useContext(CartContext);
  const {showCart} = useContext(UserProgressContext)
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
          onClick={showCart}
        >
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}