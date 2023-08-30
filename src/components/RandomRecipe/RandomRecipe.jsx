import { useState, useEffect } from "react";
import "./RandomRecipe.css";
import MealCard from "../MealCard/MealCard";

function RandomRecipe() {
  const [randomMeal, setRandomMeal] = useState([]);
  const [newMeal, setNewMeal] = useState(false);
  let loading = true;
  useEffect(() => {
    if (loading) {
      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((response) => response.json())
        .then((data) => setRandomMeal([data.meals[0]]));
    }
    loading = false;
  }, [newMeal]);

  const handleRandomMeal = () => {
    setNewMeal(!newMeal);
  };

  return (
    <>
      <section className="home">
        <div>
          <h1>Delicious foods for you</h1>
          <div className="searchBarContainer">
            <span className="searchBarIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 56 56"
                fill="currentcolor"
              >
                <path d="M 23.9570 41.7695 C 27.8476 41.7695 31.4804 40.5039 34.4336 38.3945 L 45.5429 49.5039 C 46.0585 50.0195 46.7382 50.2774 47.4414 50.2774 C 48.9648 50.2774 50.0664 49.1055 50.0664 47.6055 C 50.0664 46.9023 49.8322 46.2461 49.3162 45.7305 L 38.2773 34.6679 C 40.5976 31.6211 41.9804 27.8476 41.9804 23.7461 C 41.9804 13.8320 33.8710 5.7226 23.9570 5.7226 C 14.0195 5.7226 5.9336 13.8320 5.9336 23.7461 C 5.9336 33.6601 14.0195 41.7695 23.9570 41.7695 Z M 23.9570 37.8789 C 16.1992 37.8789 9.8242 31.4805 9.8242 23.7461 C 9.8242 16.0117 16.1992 9.6133 23.9570 9.6133 C 31.6914 9.6133 38.0898 16.0117 38.0898 23.7461 C 38.0898 31.4805 31.6914 37.8789 23.9570 37.8789 Z"></path>
              </svg>
            </span>
            <input className="searchBar" placeholder="Search" />
          </div>
        </div>
        {randomMeal.map((meal) => (
          <MealCard
            id={meal.idMeal}
            image={meal.strMealThumb}
            title={meal.strMeal}
          />
        ))}
        <button onClick={handleRandomMeal}>Random recipe</button>
      </section>
    </>
  );
}

export default RandomRecipe;
