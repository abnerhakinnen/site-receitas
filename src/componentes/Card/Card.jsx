import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({
  strMeal,
  strInstructions,
  strYoutube,
  strMealThumb,
  idMeal,
}) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <section className="rounded-md shadow-md bg-white w-96 m-4 hover:scale-110 duration-300">
        <Link to={`/recipe/${idMeal}`} className="card-link">
          <img
            className="rounded-t-lg h-40"
            src={strMealThumb}
            alt=""
            style={{ width: "100%", maxHeight: "50%", objectFit: "cover" }}
          />
          <h3 className="m-2 font-bold line-clamp-2">{strMeal}</h3>
          <p className="m-2 mt-1 mb-2 text-sm h-16 overflow-hidden">
            {strInstructions && strInstructions.length > 120
              ? strInstructions.substring(0, 120) + "..."
              : strInstructions}
          </p>
        </Link>
        <a
          href={strYoutube}
          target="_blank"
          className="flex justify-center mt-auto m-2 bg-orange-500 text-white p-2 rounded-md border-solid border-2 border-orange-600 w-20 hover:bg-orange-600"
        >
          YouTube
        </a>
      </section>
    </div>
  );
};

export default Card;
