import {createContext, useMemo, useReducer, useState} from "react";

export const CartContext = createContext({
  items: [],
  itemsTotals: 0,
  isCartOpen: false,
  isCheckoutCart: false,
  addToCart: ({id, name, price}) => {},
  updateItemQuantity: ({id, delta}) => {},
  openCart: () => {},
  closeCart: () => {},
  startCheckout: () => {},
  stopCheckout: () => {},
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
      // updatedItems = updatedItems.filter(item => item.id !== id);
      updatedItems.splice(itemIndex, 1);
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
  const [isCheckoutCart, setCheckoutCart] = useState(false);

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

  const cartTotals = useMemo(() => {
    return cartState.items.reduce((totals, i) => i.price * i.count + totals, 0);
  }, [cartState]);

  const initialCart = {
    items: cartState.items,
    itemsTotals: cartTotals,
    isCartOpen,
    isCheckoutCart,
    addToCart,
    updateItemQuantity,
    openCart: () => {
      setCartOpen(true);
    },
    closeCart: () => {
      setCartOpen(false);
    },
    startCheckout: () => {
      setCartOpen(false);
      setCheckoutCart(true);
    },
    stopCheckout: () => {
      setCheckoutCart(false);
    },
  };
  return (
    <CartContext.Provider value={initialCart}>
      {children}
    </CartContext.Provider>
  );
}