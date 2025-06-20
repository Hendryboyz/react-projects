import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {FIREBASE_FQDN} from "./utils/http";
import {actions} from "./store";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const {isCartShow, cartItems, notification} = useSelector((state) => ({
    isCartShow: state.ui.isShowCart,
    cartItems: state.cart.items,
    notification: state.ui.notification,
  }));

  useEffect(() => {
    async function updateCart() {
      dispatch(actions.ui.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      }));
      const resp = await fetch(`${FIREBASE_FQDN}/cart.json`, {
        method: 'PUT',
        header: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartItems)
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
      dispatch(actions.ui.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sending cart data successfully!',
      }));
    }

    if (isInitial) {
      isInitial = false;
      return;
    }
    updateCart().catch((error) => {
      dispatch(actions.ui.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Failed to send cart data!',
      }));
    });
  }, [cartItems, dispatch]);

  return (
    <>
      {notification && <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />}
      <Layout>
        {isCartShow && <Cart/>}
        <Products />
      </Layout>
    </>
  );
}

export default App;
