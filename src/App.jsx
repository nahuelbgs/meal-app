import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandomRecipe from "./components/RandomRecipe/RandomRecipe";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";
import Categories from "./components/Categories/Categories";
import Category from "./components/Categories/Category/Category";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Categories/>}/>
        <Route path="/recipe/:idMeal" element={<RecipeDetail />}/>
        <Route path="/category/:strCategory" element={<Category />}/>
        <Route path="/random" element={<RandomRecipe />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
