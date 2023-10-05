import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Feed.css";

const Feed = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const buscarComidaAleatoria = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );

        if (!response.ok) {
          throw new Error("Erro na requisição à API");
        }

        const data = await response.json();

        if (data.meals && data.meals.length > 0) {
          const novaComida = data.meals[0];
          setMeals((prevMeals) => [...prevMeals, novaComida]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const buscar12ComidasAleatorias = async () => {
      for (let i = 0; i < 12; i++) {
        await buscarComidaAleatoria();
      }
    };

    buscar12ComidasAleatorias();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="p-10 pb-0 text-orange-500">
        <h1 className="text-4xl font-bold text-center ml-4 md:text-left">
          TESTANDO
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
        {meals.map((meal, index) => (
          <Card
            key={meal.idMeal}
            strMeal={meal.strMeal}
            strInstructions={meal.strInstructions}
            strMealThumb={meal.strMealThumb}
            strYoutube={meal.strYoutube}
            idMeal={meal.idMeal}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
