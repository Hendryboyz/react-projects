import {useContext, useMemo} from "react";
import {CartContext} from "../store/cart-context.jsx";
import Modal from "./Modal.jsx";
import Button from "./UI/Button.jsx";


export default function ShoppingCart() {
  const {items, isCartOpen, closeCart, updateItemQuantity} = useContext(CartContext);

  const cartTotals = useMemo(() => {
    return items.reduce((totals, i) => i.price * i.count + totals, 0);
  }, [items]);

  return (
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
        <Button
          textOnly={true}
          onClick={closeCart}
        >
          Close
        </Button>
        <Button
          disabled={items.length === 0}
          onClick={() => {}}
        >
          Go to Checkout
        </Button>
      </div>
    </Modal>
  );
};