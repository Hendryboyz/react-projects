import {useEffect, useState} from "react";
import {fetchMeals} from '../utils/fetch.js';
import MealItem from "./MealItem.jsx";

export default function Menu() {
  const [mealItems, setMealItems] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchMealItems() {
      try {
        const meals = await fetchMeals();
        setMealItems(meals);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      }
    }
    fetchMealItems();
  }, []);
  return (
    <div id="meals">
      {!error && mealItems.length > 0 && (mealItems.map((mealItem) => (
        <MealItem
          key={mealItem.id}
          id={mealItem.id}
          name={mealItem.name}
          description={mealItem.description}
          price={mealItem.price}
          itemImageUrl={mealItem.image}
        />
      )))}
    </div>
  );
}