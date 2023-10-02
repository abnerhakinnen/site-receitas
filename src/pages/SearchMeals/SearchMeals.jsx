import React, { useState } from "react";
import Card from "../../componentes/Card/Card";

export const SearchMeals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearchChange = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
      );

      if (!response.ok) {
        throw new Error("Erro na requisição à API");
      }

      const data = await response.json();

      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setRecipes([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="p-8 pb-0">
        <h1 className="text-4xl font-bold mb-4 text-orange-500">
          Search Meals by Name
        </h1>
      </div>
      <div className="px-8 pb-3">
        <input
          type="text"
          className="rounded border-2 bg-white border-gray-200 outline-none focus:ring-orange-600 focus:border-orange-600 w-full px-4 py-2"
          placeholder="Search for Meals"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="flex flex-wrap justify-center text-gray-600 p-8">
        {recipes.length === 0
          ? "Receitas não encontradas"
          : recipes.map((meal) => (
              <Card
                key={meal.idMeal}
                strMeal={meal.strMeal}
                strInstructions={meal.strInstructions}
                strMealThumb={meal.strMealThumb}
                strYoutube={meal.strYoutube}
              />
            ))}
      </div>
    </div>
  );
};
