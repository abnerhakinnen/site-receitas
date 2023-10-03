import React, { useState, useEffect } from "react";
import Card from "../../componentes/Card/Card";
import { Link } from "react-router-dom";

export const SearchIngredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredIngredients, setFilteredIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setIngredients(data.meals);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const filtered = ingredients.filter((ingredient) =>
      ingredient.strIngredient.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredIngredients(filtered);
  }, [searchTerm, ingredients]);

  useEffect(() => {
    const filtered = selectedIngredients.length
      ? recipes.filter((recipe) =>
          selectedIngredients.every((ingredient) =>
            recipe.strIngredients.includes(ingredient)
          )
        )
      : recipes;
    setFilteredRecipes(filtered);
  }, [selectedIngredients, recipes]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleIngredientClick = async (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      const updatedIngredients = selectedIngredients.filter(
        (selected) => selected !== ingredient
      );
      setSelectedIngredients(updatedIngredients);
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }

    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();

    if (data.meals) {
      setRecipes(data.meals);
    } else {
      setRecipes([]);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="p-8 pb-0">
        <h1 className="text-4xl font-bold mb-4 text-orange-500">
          Lista de Ingredientes
        </h1>
      </div>

      <div className="px-8 pb-3">
        <div className="pb-3">
          <input
            type="text"
            className="rounded border-2 bg-white border-gray-200 outline-none focus:ring-orange-600 focus:border-orange-600 w-full px-4 py-2"
            placeholder="Search for Ingredients"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="grid grid-cols-2 grid-flow-row-dense gap-2">
          {filteredIngredients.map((ingredient) => (
            <div
              key={ingredient.strIngredient}
              className={`block bg-white rounded p-3 mb-3 ${
                selectedIngredients.includes(ingredient.strIngredient)
                  ? "bg-blue-200 shadow"
                  : "shadow"
              }`}
            >
              <Link
                to={`/ingredientes/${encodeURIComponent(
                  ingredient.strIngredient
                )}`}
              >
                <h3 className="font-bold text-2xl">
                  {ingredient.strIngredient}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="px-8 pb-3">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.idMeal}>
            <Card
              key={recipe.idMeal}
              strMeal={recipe.strMeal}
              strInstructions={recipe.strInstructions}
              strMealThumb={recipe.strMealThumb}
              strYoutube={recipe.strYoutube}
              idMeal={recipe.idMeal}
            />
            <h2>{recipe.strMeal}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};