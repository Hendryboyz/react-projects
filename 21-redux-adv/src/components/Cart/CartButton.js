import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../store";

const CartButton = (props) => {
  const {isShowCart, totalItem} = useSelector((state) => ({
    isShowCart: state.ui.isShowCart,
    totalItem: state.cart.totalItem
  }));
  const dispatch = useDispatch();

  function handleShowCart() {
    dispatch(actions.ui.toggleCart());
  }

  return (
    <button className={classes.button} onClick={handleShowCart} disabled={!isShowCart && totalItem === 0}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItem}</span>
    </button>
  );
};

export default CartButton;
