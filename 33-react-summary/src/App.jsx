import {Fragment} from "react";
import './App.css'
import Post from "./components/Post.jsx";

// the function that return JXS code is React function component
function App() {
  return (
    <Fragment>
      <h1>Hello World!</h1>
      <Post author='henry' content='good posts' />
    </Fragment>
  );
}

export default App
