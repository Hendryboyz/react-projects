import {uiActions} from "./ui";
import {FIREBASE_FQDN} from "../utils/http";
import {cartActions} from "./cart";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    // do any asynchronous code here
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!',
    }));

    const sendRequest = async () => {
      const resp = await fetch(`${FIREBASE_FQDN}/cart.json`, {
        method: 'PUT',
        header: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          items: cart.items,
          quantity: cart.totalItem,
        })
      });

      if (!resp.ok) {
        // dispatch(actions.ui.showNotification({
        //   status: 'error',
        //   title: 'Error!',
        //   message: 'Fail to send cart data!',
        // }));
        throw new Error("Failed to send cart data!");
      }

      // const data = await resp.json();
    }

    try {
      await sendRequest();
    } catch (e) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Failed to send cart data!',
      }));
    }

    dispatch(uiActions.showNotification({
      status: 'success',
      title: 'Success!',
      message: 'Sending cart data successfully!',
    }));
  }
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const resp = await fetch(`${FIREBASE_FQDN}/cart.json`);

      if (!resp.ok) {
        throw new Error("Could not fetch the cart data!");
      }

      return await resp.json();
    }

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({
        items: cartData.items ? cartData.items : [],
        totalItem: cartData.quantity ? cartData.quantity : 0,
      }));
    } catch (e) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Fetching cart data failed!',
      }));
    }
  };
}