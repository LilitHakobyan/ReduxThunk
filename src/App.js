import { Fragment } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions'

let isInit = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const notifStatus = useSelector(state => state.ui.notification);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  },
    [dispatch]);

  useEffect(() => {

    if (isInit) {
      isInit = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }


  }, [cart, dispatch]);

  return (
    <Fragment>
      {notifStatus && <Notification status={notifStatus.status} title={notifStatus.title} message={notifStatus.messages} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
