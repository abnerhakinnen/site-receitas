import React, { useEffect, useState } from "react";
import Card from "../Card/Card"; 
import './Feed.css'

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
    <div>
      <h1 className="flex justify-start text-orange-500 font-bold text-3xl px-40 m-2 ">
        Receitas Aleatórias
      </h1>
      <div className="flex flex-wrap justify-center">
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
