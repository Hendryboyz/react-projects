import {createContext, useState} from "react";

export const UserProgressContext = createContext({
  progress: '',
  showCart: () => {},
  closeCart: () => {},
  startCheckout: () => {},
  stopCheckout: () => {},
});

export default function UserProgressContextProvider({ children }) {
  // const [isCartOpen, setCartOpen] = useState(false);
  // const [isCheckout, setCheckoutOpen] = useState(false);
  const [userProgress, setUserProgress] = useState('');

  function showCart() {
    setUserProgress('cart');
  }

  function closeCart() {
    setUserProgress(prevState => prevState === 'cart' ? '' : prevState);
  }

  function startCheckout() {
    setUserProgress('checkout');
  }

  function stopCheckout() {
    setUserProgress(prevState => prevState === 'checkout' ? '' : prevState);
  }

  const userProgressState = {
    progress: userProgress,
    showCart: showCart,
    closeCart: closeCart,
    startCheckout: startCheckout,
    stopCheckout: stopCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProgressState}>
      {children}
    </UserProgressContext.Provider>
  );
}