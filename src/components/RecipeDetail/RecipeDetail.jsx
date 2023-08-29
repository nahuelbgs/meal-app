import React, { useEffect, useState } from "react";
import "./RecipeDetail.css";

function RecipeDetail({ id }) {
  const [meal, setMeal] = useState({});
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => setMeal(data.meals[0]))
      .catch((error) => console.log(error));
  }, [id]);
  console.log(meal);

  const measure = [];
  for (let i = 1; i <= 20; i++) {
    if (meal["strMeasure" + i] && meal["strMeasure" + i].trim() !== "") {
      measure.push(meal["strMeasure" + i]);
    } else {
      break;
    }
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal["strIngredient" + i] && meal["strIngredient" + i].trim() !== "") {
      ingredients.push(meal["strIngredient" + i]);
    } else {
      break;
    }
  }

  const combinedList = [];

  for (let i = 0; i < measure.length && i < ingredients.length; i++) {
    const measureItem = measure[i];
    const ingredientItem = ingredients[i];
    const combinedItem = `${measureItem} - ${ingredientItem}`;
    combinedList.push(combinedItem);
  }

  console.log(combinedList);

  return (
    <div className="recipeDetail-container">
      <div className="recipeDetail-image-container">
        <img className="recipeDetail-image" src={meal.strMealThumb} />
      </div>
      <h1>{meal.strMeal}</h1>
      <div>
        <h2>Ingredients</h2>
        {combinedList.map((ingredient) => (
          <div key={ingredient}>
            <p>{ingredient}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeDetail;
