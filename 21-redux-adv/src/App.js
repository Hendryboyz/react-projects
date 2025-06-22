import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Notification from "./components/UI/Notification";
import {fetchCartData, sendCartData} from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => (state.cart));
  const ui = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (!cart.changed) {
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <>
      {ui.notification && <Notification
        status={ui.notification.status}
        title={ui.notification.title}
        message={ui.notification.message}
      />}
      <Layout>
        {ui.isShowCart && <Cart/>}
        <Products />
      </Layout>
    </>
  );
}

export default App;
