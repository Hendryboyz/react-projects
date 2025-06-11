import {fetchMealURL} from '../utils/fetch.js';
import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";

const fetchMealsConfig = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
};

export default function MealsMenu() {
  const {
    data: mealItems,
    isLoading,
    error
  } = useHttp(fetchMealURL, fetchMealsConfig, []);

  if (isLoading) {
    return (<p className="center">Fetching meals...</p>)
  }

  if (error) {
    return (<Error title="Failed to fetch meals." message={error} />);
  }

  return (
    <div id="meals">
      {!error && !isLoading && mealItems.length > 0 && (mealItems.map((mealItem) => (
        <MealItem
          key={mealItem.id}
          meal={mealItem}
        />
      )))}
    </div>
  );
}