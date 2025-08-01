import styles from './meals-grid.module.css';
import MealItem from "@/components/meals/meal-item";

export default function MealsGrid({ meals }) {
  return (
    <ul className={styles.meals}>
      {meals.map(meal => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}