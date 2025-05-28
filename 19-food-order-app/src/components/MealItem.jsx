import {BACKEND_URL} from "../utils/fetch.js";
import {useContext} from "react";
import {CartContext} from "../store/cart-context.jsx";

export default function MealItem({id, itemImageUrl, name, price, description}) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="meal-item">
      <img src={`${BACKEND_URL}/${itemImageUrl}`} alt={name} />
      <h3>{name}</h3>
      <span className="meal-item-price">{price}</span>
      <p className="meal-item-description">{description}</p>
      <button
        className="button meal-item-actions"
        onClick={() => addToCart({id, name, price})}
      >
        Add to Cart
      </button>
    </div>
  );
}