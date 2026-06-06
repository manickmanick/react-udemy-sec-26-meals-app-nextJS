import MealItem from "./meal-item";
import cs from "./meals-grid.module.css";

export default function MealsGrid({ meals }) {
  return (
    <>
      <ul className={cs.meals}>
        {meals.map((meal) => (
          <li key={meal.id}>
            <MealItem {...meal}/>
          </li>
        ))}
      </ul>
    </>
  );
}
