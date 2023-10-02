import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ strMeal, strInstructions, strYoutube, strMealThumb }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <section className="rounded-md shadow-md bg-white w-80 h-80 m-4 hover:scale-110 duration-300">
        <img
          className="rounded-t-lg"
          src={strMealThumb}
          alt=""
          style={{ width: "100%", maxHeight: "50%", objectFit: "cover" }}
        />
        <h3 className="m-2 font-bold">{strMeal}</h3>
        <p className="m-2 mt-1 mb-2 text-sm h-16 overflow-hidden">
          {strInstructions.length > 120
            ? strInstructions.substring(0, 120) + "..."
            : strInstructions}
        </p>
        <a
          href={strYoutube}
          className="flex justify-center mt-auto m-2 bg-orange-500 text-white p-2 rounded-md border-solid border-2 border-orange-600 w-20 hover:bg-orange-600"
        >
          YouTube
        </a>
      </section>
    </div>
  );
};

export default Card;
