import Modal from "./Modal.jsx";
import {useContext, useActionState} from "react";
import {CartContext} from "../store/cart-context.jsx";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import {currencyFormatter} from "../utils/formatting.js";
import Submit from "./UI/Submit.jsx";
import {orderSchema} from "../utils/validate.js";
// import {checkoutOrder} from "../utils/fetch.js";
import {UserProgressContext} from "../store/user-progress-context.jsx";

export default function Checkout() {
  const {itemsTotals: cartTotals} = useContext(CartContext);
  const {isCheckout, stopCheckout} = useContext(UserProgressContext);

  const handleOrderSubmit = async (_, orderState) => {
    const formData = {
      email: orderState.get('email'),
      name: orderState.get('name'),
      street: orderState.get('street'),
      'postal-code': orderState.get('postalCode'),
      city: orderState.get('city'),
    }

    const parseFormData = orderSchema.safeParse(formData);

    const errors = [];

    if (!parseFormData.success) {
      for (const iss of parseFormData.error.issues) {
        errors.push(iss.message);
      }
      return {errors, enteredValue: formData};
    } else {
      // await checkoutOrder(formData);
      return {errors: null};
    }
  }

  // pending will be `true` if form is submitting
  const [
    formState,
    formAction,
    pending
  ] = useActionState(handleOrderSubmit, {})

  return (
    <Modal
      open={isCheckout}
      onClose={stopCheckout}
    >
      <div>
        <h2>Checkout</h2>
        <div style={{margin: "25px 0px 25px 0px"}}>
          Total Amount: {currencyFormatter.format(cartTotals)}
        </div>
        <form action={formAction}>
          <Input label="Full Name" type="text" name="name" defaultValue={formState.enteredValue?.name} />
          <Input label="E-Mail Address" type="email" name="email" defaultValue={formState.enteredValue?.email}/>
          <Input label="Street" type="text" name="street" defaultValue={formState.enteredValue?.street}/>
          <div className="control-row">
            <Input label="Postal Code" type="text" name="postalCode" defaultValue={formState.enteredValue?.["postal-code"]} />
            <Input label="City" type="text" name="city" defaultValue={formState.enteredValue?.city}/>
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
            <Submit>
              Submit Order
            </Submit>
          </div>
        </form>
      </div>
    </Modal>
  );
}