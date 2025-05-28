import {createContext} from "react";

export const CartContext = createContext({
  items: [],
});

export default function CartContextProvider({ children }) {
  const initialCart = {
    items: [],
  };
  return (
    <CartContext.Provider value={initialCart}>
      {children}
    </CartContext.Provider>
  );
}