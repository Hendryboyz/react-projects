import {BACKEND_URL} from "../utils/fetch.js";
import {useContext} from "react";
import {CartContext} from "../store/cart-context.jsx";
import {currencyFormatter} from "../utils/formatting.js";
import Button from "./UI/Button.jsx";

export default function MealItem({meal}) {
  const { addToCart } = useContext(CartContext);
  const {id, image: itemImageUrl, name, price, description} = meal;
  return (
    <div className="meal-item">
      <article>
        <img src={`${BACKEND_URL}/${itemImageUrl}`} alt={name}/>
        <div>
          <h3>{name}</h3>
          <span className="meal-item-price">{currencyFormatter.format(price)}</span>
          <p className="meal-item-description">{description}</p>
        </div>
        <div className="meal-item-actions">
          <Button
            onClick={() => addToCart({id, name, price})}
          >
            Add to Cart
          </Button>
        </div>
      </article>
    </div>
  );
}