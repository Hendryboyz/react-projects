import {createContext, useState} from "react";

export const CartContext = createContext({
  items: [],
  isCartOpen: false,
  addToCart: ({id, name, price}) => {},
  openCart: () => {},
  closeCart: () => {}
});

export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  function addToCart({id, name, price}) {
    setCartItems((prevCartState) => {
      const itemIndex = prevCartState.findIndex(i => i.id === id);
      const existingItem = itemIndex !== -1;
      const newCartState = [...prevCartState];
      if (existingItem) {
        newCartState[itemIndex].count += 1;
      } else {
        newCartState.push({
          id,
          name,
          price,
          count: 0,
        });
      }
      return newCartState;
    });
  }

  const initialCart = {
    items: cartItems,
    isCartOpen,
    addToCart,
    openCart: () => {
      setCartOpen(true);
    },
    closeCart: () => {
      setCartOpen(false);
    },
  };
  return (
    <CartContext.Provider value={initialCart}>
      {children}
    </CartContext.Provider>
  );
}