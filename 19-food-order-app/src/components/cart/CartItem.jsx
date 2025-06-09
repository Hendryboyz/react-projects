import {currencyFormatter} from "../../utils/formatting.js";

export default function CartItem({item, onIncrease, onDecrease}) {
  const {id, name, price, count} = item;
  return (
    <li className="cart-item" key={id}>
      <p>{name} - {count} x {currencyFormatter.format(price)}</p>
      <div className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{count}</span>
        <button onClick={onIncrease}>+</button>
      </div>
    </li>
  )
}