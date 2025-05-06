import {createContext, useReducer, useState} from 'react';
import {DUMMY_PRODUCTS} from "../dummy-products.js";

export const CartContext = createContext({
  items: [],
  addItemToCart: (id) => {},
  updateCartItemQuantity: (productId, amount) => {},
});

// reducer function should not be recreated
function shoppingCartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload.id
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload.id);
      updatedItems.push({
        id: action.payload.id,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state, // not needed here because we have only one value
      items: updatedItems,
    };
  }

  if (action.type === 'UPDATE_ITEM_QUANTITY') {
    const updatedItems = [...state.items];
    const { productId, amount } = action.payload;
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state, // not needed here because we have only one value
      items: updatedItems,
    };
  }

  return state;
}

export default function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {
    items: [],
  }, undefined);
  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: 'ADD_ITEM',
      payload: { id },
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: 'UPDATE_ITEM_QUANTITY',
      payload: { productId, amount },
    });
  }

  const ctxValues = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateCartItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    // .Provider is only required when using React version < 19
    <CartContext.Provider value={ctxValues}>
      {children}
    </CartContext.Provider>
  );
}

