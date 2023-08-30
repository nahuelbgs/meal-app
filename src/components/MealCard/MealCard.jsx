import React from "react";
import { Link } from "react-router-dom";
import "./MealCard.css";

function MealCard({ id, image, title }) {
  return (
    <div class="mealCard">
      <div class="mealCard-image-container">
        <img className="mealCard-image" src={image} />
      </div>
      <div class="mealCard-title-container">
        <h1 class="mealCard-title">{title}</h1>
      </div>
      <div className="mealCard-seeRecipe-container">
        <Link className="mealCard-seeRecipe" to={`/recipe/${id}`}>
          See meal
        </Link>
        </div>
    </div>
  );
  {
    /* <div className="mealCard" key={id}>
          <img className="mealCard-image" src={image} />
          <h1 className="mealCard-title">{title}</h1>
          <Link className="mealCard-seeRecipe" to={`/recipe/${id}`}>
            See meal
          </Link>
        </div> */
  }
}

export default MealCard;
