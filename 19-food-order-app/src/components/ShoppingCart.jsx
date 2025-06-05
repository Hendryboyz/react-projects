import {useContext} from "react";
import {CartContext} from "../store/cart-context.jsx";
import Modal from "./Modal.jsx";
import Button from "./UI/Button.jsx";
import {currencyFormatter} from "../utils/formatting.js";
import {UserProgressContext} from "../store/user-progress-context.jsx";


export default function ShoppingCart() {
  const {
    items,
    itemsTotals: cartTotals,
    updateItemQuantity,
  } = useContext(CartContext);
  const {progress, closeCart, startCheckout} = useContext(UserProgressContext);
  return (
    <Modal open={progress === 'cart'} onClose={closeCart} className="cart">
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => {
          return (
            <li className="cart-item" key={item.id}>
              <p>{item.name} - {item.count} x {currencyFormatter.format(item.price)}</p>
              <div className="cart-item-actions">
                <button onClick={() => updateItemQuantity({id: item.id, delta: -1})}>-</button>
                <span>{item.count}</span>
                <button onClick={() => updateItemQuantity({id: item.id, delta: 1})}>+</button>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="cart-total">Total Amount: {currencyFormatter.format(cartTotals)}</p>
      <div className="modal-actions">
        <Button
          textOnly={true}
          onClick={closeCart}
        >
          Close
        </Button>
        <Button
          disabled={items.length === 0}
          onClick={startCheckout}
        >
          Go to Checkout
        </Button>
      </div>
    </Modal>
  );
};