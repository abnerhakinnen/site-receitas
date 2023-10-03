import React, { useState, useEffect } from "react";
import Card from "../../componentes/Card/Card";

function SearchLetter() {
  const [letraSelecionada, setLetraSelecionada] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${letraSelecionada}`
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

    if (letraSelecionada) {
      fetchRecipes();
    }
  }, [letraSelecionada]);

  const handleLetterClick = (letra) => {
    setLetraSelecionada(letra);
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="p-8 pb-0">
        <h1 className="text-4xl font-bold mb-4 text-orange-500">
          Receitas por Letra
        </h1>
        <div className="flex gap-2 justify-center">
          {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((letra) => (
            <button
              className="text-base hover:text-orange-500 hover:scale-150 transition-all"
              key={letra}
              onClick={() => handleLetterClick(letra)}
            >
              {letra}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center  p-8">
          {recipes.length === 0 ? (
            <p className="text-gray-600">Receitas não encontradas</p>
          ) : (
            recipes.map((meal) => (
              <Card
                key={meal.idMeal}
                strMeal={meal.strMeal}
                strInstructions={meal.strInstructions}
                strMealThumb={meal.strMealThumb}
                strYoutube={meal.strYoutube}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchLetter;
