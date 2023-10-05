import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        if (!response.ok) {
          throw new Error("Erro na requisição à API");
        }
        const data = await response.json();
        if (data.meals && data.meals.length > 0) {
          setRecipe(data.meals[0]);
        } else {
          setRecipe(null);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipe) {
    return (
      <div className="container grid place-items-center font-bold text-lg text-orange-500">
        Carregando...
      </div>
    );
  }

  const {
    strMeal,
    strCategory,
    strArea,
    strTags,
    strInstructions,
    strMealThumb,
    strYoutube,
    strSource,
  } = recipe;

  const ingredients = [];
  const measures = [];
  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;
    if (recipe[ingredientKey]) {
      ingredients.push(recipe[ingredientKey]);
      measures.push(recipe[measureKey]);
    } else {
      break;
    }
  }

  return (
    <>
    <div className="flex flex-col justify-center items-center lg:flex-col justify-left mx-auto p-8">
      <h1 className="text-4xl font-bold mb-5 text-orange-500">{strMeal}</h1>
      <div className="lg:w-1/2 lg:mr-4">
        <img
          src={strMealThumb}
          alt={strMeal}
          className="rounded-md max-w-full"
        />
      </div>
      <div className="lg:w-1/2">
        <div className="flex flex-col justify-center p-5 lg:flex-row gap-10 text-lg mb-5">
          <p className="font-bold">
            Categoria: <span className="font-normal">{strCategory}</span>
          </p>
          <p className="font-bold">
            Área: <span className="font-normal">{strArea}</span>
          </p>
          <p className="font-bold">
            Tags: <span className="font-normal">{strTags}</span>
          </p>
        </div>
        <div className="my-3">{strInstructions}</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-bold mb-2">Ingredientes</h2>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>
                  {index + 1}. {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Medidas</h2>
            <ul>
              {measures.map((measure, index) => (
                <li key={index}>
                  {index + 1}. {measure}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-evenly mt-4">
          <a
            href={strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors"
          >
            YouTube
          </a>
          <a
            href={strSource}
            className={`px-3 py-2 rounded border-2 text-white border-orange-600 ${
              strSource ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-500"
            } transition-colors`}
            style={{
              backgroundColor: strSource ? "" : "#ccc",
              border: "1px solid",
              pointerEvents: strSource ? "auto" : "none",
              cursor: strSource ? "pointer" : "not-allowed",
            }}
          >
            Fonte original
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default RecipeDetails;
