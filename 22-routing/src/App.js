import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

const routeElements = createRoutesFromElements(
  <Route>
    <Route
      path="/"
      element={<RootLayout/>}
    >
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
    </Route>
  </Route>
);

const elementsRouters = createBrowserRouter(routeElements);

function App() {
  return <RouterProvider router={elementsRouters} />;
}

export default App;
