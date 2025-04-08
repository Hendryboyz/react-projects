import { Fragment } from "react";
import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';
import Examples from "./components/Examples";

function App() {
  return (
    // <> == <Fragment>
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
