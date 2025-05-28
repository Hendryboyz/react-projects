import {BACKEND_URL} from "../utils/fetch.js";

export default function MealItem({itemImageUrl, name, price, description}) {
  return (
    <div className="meal-item">
      <img src={`${BACKEND_URL}/${itemImageUrl}`} alt={name} />
      <h3>{name}</h3>
      <span className="meal-item-price">{price}</span>
      <p className="meal-item-description">{description}</p>
      <button className="button meal-item-actions">Add to Cart</button>
    </div>
  );
}