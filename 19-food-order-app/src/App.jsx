import Header from "./components/Header.jsx";
import MealsMenu from "./components/MealsMenu.jsx";
import CartContextProvider from "./store/cart-context.jsx";
import ShoppingCart from "./components/cart/ShoppingCart.jsx";
import Checkout from "./components/Checkout.jsx";
import UserProgressContextProvider from "./store/user-progress-context.jsx";

function App() {
  return (
    <CartContextProvider>
      <UserProgressContextProvider>
        <Header/>
        <MealsMenu />
        <ShoppingCart />
        <Checkout />
      </UserProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;
