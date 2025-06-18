import classes from './CartButton.module.css';
import {useDispatch} from "react-redux";
import {actions} from "../../store";

const CartButton = (props) => {
  const dispatch = useDispatch();

  function handleShowCart() {
    dispatch(actions.ui.toggleCart());
  }

  return (
    <button className={classes.button} onClick={handleShowCart}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
