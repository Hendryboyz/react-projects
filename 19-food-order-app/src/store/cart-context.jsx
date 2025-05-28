import {createContext, useState} from "react";

export const CartContext = createContext({
  items: [],
  addToCart: ({id, name, price}) => {},
});

export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  function addToCart({id, name, price}) {
    console.log(id, name, price);
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
    addToCart
  };
  return (
    <CartContext.Provider value={initialCart}>
      {children}
    </CartContext.Provider>
  );
}