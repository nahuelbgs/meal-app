import React, { useEffect, useState } from "react";
import "./RecipeDetail.css";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const {idMeal} = useParams()
  const [meal, setMeal] = useState({});
  console.log(idMeal)
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => response.json())
      .then((data) => setMeal(data.meals[0]))
      .catch((error) => console.log(error));
  }, [idMeal]);
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
    <section className="recipeDetail-section">
      <img className="recipeDetail-image" src={meal.strMealThumb} />
      <h1 className="recipeDetail-title">{meal.strMeal}</h1>
      <div className="recipeDetail-container">
        <div className="recipeDetail-ingredients">
          <h2>Ingredients</h2>
          {combinedList.map((ingredient) => (
            <ul key={ingredient}>
              <li>{ingredient}</li>
            </ul>
          ))}
        </div>
        <div className="recipeDetail-instructions">
          <h2>Instructions</h2>
          <p>{meal.strInstructions}</p>
        </div>
        <p className="recipeDetail-video">
          For more information about the preparation, you can watch this{" "}
          <a href={meal.strYoutube} target="_blank">
            video
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default RecipeDetail;
