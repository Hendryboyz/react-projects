import {useEffect, useState} from "react";
import {fetchMeals} from '../utils/fetch.js';
import MealItem from "./MealItem.jsx";

export default function MealsMenu() {
  const [mealItems, setMealItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMealItems() {
      try {
        setLoading(true);
        const meals = await fetchMeals();
        setMealItems(meals);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMealItems();
  }, []);
  return (
    <div id="meals">
      {!error && !loading && mealItems.length > 0 && (mealItems.map((mealItem) => (
        <MealItem
          key={mealItem.id}
          meal={mealItem}
        />
      )))}
    </div>
  );
}