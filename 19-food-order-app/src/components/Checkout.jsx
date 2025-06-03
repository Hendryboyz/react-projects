import Modal from "./Modal.jsx";
import {useContext, useMemo} from "react";
import {CartContext} from "../store/cart-context.jsx";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import {currencyFormatter} from "../utils/formatting.js";

export default function Checkout() {
  const {items, isCheckoutCart, stopCheckout} = useContext(CartContext);
  const cartTotals = useMemo(() => {
    return items.reduce((totals, i) => i.price * i.count + totals, 0);
  }, [items]);
  return (
    <Modal
      open={isCheckoutCart}
      onClose={stopCheckout}
    >
      <div>
        <h2>Checkout</h2>
        <div style={{margin: "25px 0px 25px 0px"}}>
          Total Amount: {currencyFormatter.format(cartTotals)}
        </div>
        <form>
          <Input label="Full Name" type="text" name="name"/>
          <Input label="E-Mail Address" type="email" name="email"/>
          <Input label="Street" type="text" name="street"/>
          <div className="control-row">
            <Input label="Postal Code" type="text" name="postalCode"/>
            <Input label="City" type="text" name="city"/>
          </div>
          <div className="modal-actions" style={{
            margin: "25px 0px 25px 0px"
          }}>
            <Button
              textOnly={true}
              onClick={stopCheckout}
            >
              Close
            </Button>
            <Button
              onClick={() => {
              }}
            >
              Submit Order
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}