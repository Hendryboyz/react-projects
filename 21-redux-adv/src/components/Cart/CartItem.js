import classes from './CartItem.module.css';
import {useDispatch} from "react-redux";
import {actions} from "../../store";

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  const handleAddQuantity = () => {
    dispatch(actions.cart.addItem({
      item: {
        id,
        name: title,
        price
      }
    }));
  };

  const handleReduceQuantity = () => {
    dispatch(actions.cart.removeItem({
      id,
    }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleReduceQuantity}>-</button>
          <button onClick={handleAddQuantity}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
