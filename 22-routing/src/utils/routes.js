import HomePage from "../pages/Home";
import ProductsPage from "../pages/Products";

export const routes = [
  {
    name: 'Home',
    path: '/',
    element: <HomePage />
  },
  {
    name: 'Products',
    path: '/products',
    element: <ProductsPage />
  },
];