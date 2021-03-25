import React, { useEffect, useState } from "react";
import image1 from "./img/lime-salmon.jpeg";
import RecipeBox from "./recipeBoxs";
import { BiSearchAlt } from "react-icons/bi";

const Recipe = () => {
  const APP_ID = "3ce0b77b";
  const APP_KEY = "0612908fab0b3d078ba4852e9864b833";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="recipe">
      <div className="header-recipe">
        <img src={image1} alt="" />
        <h1>Recipe App</h1>
        <form onSubmit={getSearch} className="search-form">
          <input
            type="text"
            className="serac-recipe"
            value={search}
            onChange={updateSearch}
          />
          <button type="submit" className="search-button-recipe">
            <BiSearchAlt />
          </button>
        </form>
      </div>
      <div className="container recipe-details">
        <div className="row">
          {recipes.map((recipe) => (
            <RecipeBox
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredientLines={recipe.recipe.ingredientLines}
              calories={recipe.recipe.calories}
              cautions={recipe.recipe.cautions}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
