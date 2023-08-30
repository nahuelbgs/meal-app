import React, { useEffect, useState } from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);
  let mounted = true;
  useEffect(() => {
    if (mounted) {
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((response) => response.json())
        .then((data) => setCategories(data.categories));
    }
    mounted = false;
  }, [mounted]);

  return (
    <section className="categories-section">
      {categories.map((category) => (
        <Link to={`/category/${category.strCategory}`} className="category-container" key={category.idCategory}>
          <div className="category-image-container">
            <img
              className="category-image"
              alt={category.strCategory}
              src={category.strCategoryThumb}
            />
          </div>
          <h1 className="category-title">{category.strCategory.toUpperCase()}</h1>
        </Link>
      ))}
    </section>
  );
}

export default Categories;
