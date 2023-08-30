import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Category.css";
import MealCard from "../../MealCard/MealCard";

function Category() {
  const { strCategory } = useParams();
  const [mealList, setMealList] = useState([]);
  let mounted = true;
  useEffect(() => {
    if (mounted) {
      fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
      )
        .then((response) => response.json())
        .then((response) => setMealList(response.meals));
    }
    mounted = false;
  }, [mounted]);
  console.log(mealList);
  return (
    <section className="mealList-section">
      <div className="mealList-container">
      {mealList.map((meal) => (
        <MealCard className='mealList-item' key={meal.idMeal}
          id={meal.idMeal}
          image={meal.strMealThumb}
          title={meal.strMeal}
        />
      ))}
      </div>
    </section>
  );
}

export default Category;
