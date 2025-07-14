import {Outlet, useLoaderData, useSubmit} from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import {useEffect} from "react";
import {TOKEN_EXPIRED_SIGNAL} from "../utils";
import {getTokenDuration} from "../utils/auth";

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();
  // const navigation = useNavigation();
  useEffect(() => {
    if (!token) return;

    if (token === TOKEN_EXPIRED_SIGNAL) {
      submit(null, {action: '/logout', method: 'post'})
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);
    setTimeout(() => {
      submit(null, {action: '/logout', method: 'post'})
    }, tokenDuration);
  }, [token]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
