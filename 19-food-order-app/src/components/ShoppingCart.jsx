import {createPortal} from "react-dom";
import {useContext, useMemo} from "react";
import {CartContext} from "../store/cart-context.jsx";
import Modal from "./Modal.jsx";


export default function ShoppingCart() {
  const {items, isCartOpen, closeCart, updateItemQuantity} = useContext(CartContext);

  const cartTotals = useMemo(() => {
    return items.reduce((totals, i) => i.price * i.count + totals, 0);
  }, [items]);

  return createPortal((
    <Modal open={isCartOpen} onClose={closeCart}>
      <h2></h2>
      <ul>
        {items.map((item) => {
          return (
            <li className="cart-item" key={item.id}>
              <p>{item.name} - {item.count} x ${item.price}</p>
              <div className="cart-item-actions">
                <button onClick={() => updateItemQuantity({id: item.id, delta: -1})}>-</button>
                <span>{item.count}</span>
                <button onClick={() => updateItemQuantity({id: item.id, delta: 1})}>+</button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="cart-total">${cartTotals}</div>
      <div className="modal-actions">
        <button
          className="text-button"
          onClick={closeCart}
        >
          Close
        </button>
        <button className="button" disabled={items.length === 0}>Go to Checkout</button>
      </div>
    </Modal>
  ), document.getElementById('modal'));
};