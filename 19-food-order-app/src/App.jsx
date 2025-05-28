import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import CartContextProvider from "./store/cart-context.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";

function App() {
  return (
    <CartContextProvider>
      <Header/>
      <Menu />
      <ShoppingCart />
    </CartContextProvider>
  );
}

export default App;
