import React, { useState, useEffect } from "react";
import Card from "../../componentes/Card/Card";
import { useParams } from "react-router-dom";

const IngredientRecipes = () => {
  const { ingredient } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setRecipes(data.meals);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [ingredient]);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="p-8 pb-0">
        <h1 className="text-4xl font-bold mb-4 text-orange-500 px-7">
          Receitas com {ingredient}
        </h1>
      </div>

      <div className="px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {recipes.map((recipe) => (
          <div key={recipe.idMeal}>
            <Card
              key={recipe.idMeal}
              strMeal={recipe.strMeal}
              strMealThumb={recipe.strMealThumb}
              strYoutube={recipe.strYoutube}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientRecipes;
