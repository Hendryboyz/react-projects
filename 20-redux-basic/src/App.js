import Counter from './components/Counter';
import Header from "./components/Header";
import Auth from "./components/Auth";
import {useSelector} from "react-redux";


function App() {
  const {isLoggedIn} = useSelector(state => ({
    isLoggedIn: state.auth.isLoggedIn,
  }));
  return (
    <>
      <Header />
      {!isLoggedIn && <Auth />}
      <Counter />
    </>
  );
}

export default App;
