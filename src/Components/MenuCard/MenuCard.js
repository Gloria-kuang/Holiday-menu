import React from "react";
import "./MenuCard.scss";
import { Link } from "react-router-dom";

function MenuCard({ menuData }) {
  return (
    <article className="card">
      <div className="card__title-container">
        <h3 className="card__title">{menuData.strMeal}</h3>
      </div>
      <img src={menuData.strMealThumb} className="card__image" alt=""></img>
      <Link
        to={{ pathname: `/recipe/${menuData.idMeal}`, state: { menuData } }}
        className="card__link"
      >
        Recipe
      </Link>
    </article>
  );
}

export default MenuCard;
