import { DUMMY_PRODUCTS } from '../dummy-products.js';
import Product from './Product.jsx';

const Shop = function () {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product}  />
          </li>
        ))}
      </ul>
    </section>
  );
}


const CompositionShop = function ({ children }) {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {children}
      </ul>
    </section>
  );
}

export default Shop;
