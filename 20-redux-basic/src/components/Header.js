import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authActions} from '../store';

const Header = () => {
  const {isLoggedIn} = useSelector(state => ({
    isLoggedIn: state.auth.isLoggedIn,
  }));

  const dispatch = useDispatch();
  function logoutHandler() {
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLoggedIn && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
