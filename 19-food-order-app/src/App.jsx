import Header from "./components/Header.jsx";
import MealsMenu from "./components/MealsMenu.jsx";
import CartContextProvider from "./store/cart-context.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {
  return (
    <CartContextProvider>
      <Header/>
      <MealsMenu />
      <ShoppingCart />
      <Checkout />
    </CartContextProvider>
  );
}

export default App;
