import Modal from "./Modal.jsx";
import {useContext, useActionState} from "react";
import {CartContext} from "../store/cart-context.jsx";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import {currencyFormatter} from "../utils/formatting.js";
import Submit from "./UI/Submit.jsx";
import {orderSchema} from "../utils/validate.js";
import {checkoutOrder, checkoutOrderUrl} from "../utils/fetch.js";
import {UserProgressContext} from "../store/user-progress-context.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "../components/Error.jsx";

const checkoutOrderConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
}

export default function Checkout() {
  const {items, itemsTotals: cartTotals, clearCart} = useContext(CartContext);
  const {progress, stopCheckout} = useContext(UserProgressContext);

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

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    reset: resetHttp
  } = useHttp(checkoutOrderUrl, checkoutOrderConfig, {
    name: '',
    email: '',
    street: '',
    'postal-code': '',
    city: '',
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const inputs = new FormData(event.target);
    const formData = Object.fromEntries(inputs);
    const parseFormData = orderSchema.safeParse(formData);

    const errors = [];

    if (!parseFormData.success) {
      for (const iss of parseFormData.error.issues) {
        errors.push(iss.message);
      }
      // return {errors, enteredValue: formData};
    } else {
      await sendRequest(JSON.stringify({
        order: {
          customer: formData,
          items,
        }
      }));
      // await checkoutOrder(formData, items);
      // return {errors: null};
    }
  }

  let actions = (<>
    <Button
      type="button"
      textOnly={true}
      onClick={stopCheckout}
    >
      Close
    </Button>
    {/*<Submit>*/}
    {/*  Submit Order*/}
    {/*</Submit>*/}
    <Button type="submit">
      Submit Order
    </Button>
  </>);

  if (isSending) {
    actions = (<span>Sending order data...</span>);
  }

  if (data && !error) {
    return (
      <Modal
        open={progress === 'checkout'}
        onClose={stopCheckout}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully</p>
        <p>We will get back to you with more details via email within the next few minutes.</p>
        <div className="modal-actions">
          <Button onClick={() => {
            stopCheckout();
            clearCart();
            resetHttp();
          }}>Okay</Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      open={progress === 'checkout'}
      onClose={stopCheckout}
    >
      <div>
        <h2>Checkout</h2>
        <div style={{margin: "25px 0px 25px 0px"}}>
          Total Amount: {currencyFormatter.format(cartTotals)}
        </div>
        {/*<form action={formAction}>*/}
        <form onSubmit={handleSubmit}>
          <Input label="Full Name" type="text" name="name" defaultValue={formState.enteredValue?.name} />
          <Input label="E-Mail Address" type="email" name="email" defaultValue={formState.enteredValue?.email}/>
          <Input label="Street" type="text" name="street" defaultValue={formState.enteredValue?.street}/>
          <div className="control-row">
            <Input label="Postal Code" type="text" name="postal-code" defaultValue={formState.enteredValue?.["postal-code"]} />
            <Input label="City" type="text" name="city" defaultValue={formState.enteredValue?.city}/>
          </div>
          {error && <Error title="Failed to submit order" message={error} />}
          <div className="modal-actions" style={{
            margin: "25px 0px 25px 0px"
          }}>
            {actions}
          </div>
        </form>
      </div>
    </Modal>
  );
}