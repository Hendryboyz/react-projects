import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage, {productDetailParams} from "./pages/ProductDetail";

const routeElements = createRoutesFromElements(
  <Route
    errorElement={<ErrorPage/>}
  >
    <Route
      path="/"
      element={<RootLayout/>}
    >
      <Route path="" element={<HomePage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path={`products/:${productDetailParams.id}`} element={<ProductDetailPage />} />
    </Route>

  </Route>
);

const elementsRouters = createBrowserRouter(routeElements);

function App() {
  return <RouterProvider router={elementsRouters} />;
}

export default App;
