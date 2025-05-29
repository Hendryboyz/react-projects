import {createContext, useReducer, useState} from "react";

export const CartContext = createContext({
  items: [],
  isCartOpen: false,
  addToCart: ({id, name, price}) => {},
  updateItemQuantity: ({id, delta}) => {},
  openCart: () => {},
  closeCart: () => {}
});

function shoppingCartReducer(prevCartState, action) {
  if (action.type === 'ADD_ITEM') {
    const {id, name, price} = action.payload;
    const itemIndex = prevCartState.items.findIndex(i => i.id === id);
    const isItemExisting = itemIndex !== -1;
    const updatedItems = [...prevCartState.items];
    if (isItemExisting) {
      const existingItem = updatedItems[itemIndex];
      updatedItems[itemIndex] = {
        ...existingItem,
        count: existingItem.count + 1,
      };
    } else {
      updatedItems.push({
        id,
        name,
        price: +price,
        count: 1,
      });
    }
    return {
      ...prevCartState,
      items: updatedItems,
    };
  }

  if (action.type === 'UPDATE_ITEM_QUANTITY') {
    const {id, delta} = action.payload;
    const itemIndex = prevCartState.items.findIndex(i => i.id === id);
    const isItemExisting = itemIndex !== -1;
    if (!isItemExisting) {
      return prevCartState;
    }

    let updatedItems = [...prevCartState.items];
    const existingItem = updatedItems[itemIndex];
    const updatedQuantity = existingItem.count + delta;
    if (updatedQuantity === 0) {
      updatedItems = updatedItems.filter(item => item.id !== id);
    } else {
      updatedItems[itemIndex] = {
        ...existingItem,
        count: updatedQuantity,
      };
    }
    return {
      ...prevCartState,
      items: updatedItems,
    };
  }

  return prevCartState;
}

export default function CartContextProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(shoppingCartReducer, {
    items: []
  }, undefined);
  const [isCartOpen, setCartOpen] = useState(false);

  function addToCart({id, name, price}) {
    cartDispatch({
      type: 'ADD_ITEM',
      payload: { id, name, price },
    });
  }

  function updateItemQuantity({id, delta}) {
    cartDispatch({
      type: 'UPDATE_ITEM_QUANTITY',
      payload: { id, delta },
    });
  }

  const initialCart = {
    items: cartState.items,
    isCartOpen,
    addToCart,
    updateItemQuantity,
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