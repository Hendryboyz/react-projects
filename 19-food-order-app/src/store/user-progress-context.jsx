import {createContext, useState} from "react";

export const UserProgressContext = createContext({
  isCartOpen: false,
  isCheckout: false,
  showCart: () => {},
  closeCart: () => {},
  startCheckout: () => {},
  stopCheckout: () => {},
});

export default function UserProgressContextProvider({ children }) {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isCheckout, setCheckoutOpen] = useState(false);

  function showCart() {
    setCartOpen(true);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function startCheckout() {
    setCartOpen(false);
    setCheckoutOpen(true);
  }

  function stopCheckout() {
    setCheckoutOpen(false);
  }

  const userProgressState = {
    isCartOpen,
    isCheckout,
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