import React from "react";
import "./Recipe.scss";

function Recipe(props) {
  const { strMeal, strArea, strCategory, strInstructions } =
    props.location.state.menuData;
  const menuData = props.location.state.menuData;

  const ingredientData = Object.keys(menuData)
    .filter((key) => key.includes("strIngredient") && menuData[key] !== "") //menuData.strIngredient1
    .map((key) => menuData[key]);
  const measureData = Object.keys(menuData)
    .filter((key) => key.includes("strMeasure") && menuData[key] !== "")
    .map((key) => menuData[key]);

  return (
    <main className="recipe">
      <div className="recipe__container">
        <h2 className="recipe__title">{strMeal}</h2>
        <div className="recipe__tag">
          <div className="recipe__category-container">
            <p className="recipe__category">{strCategory}</p>
          </div>
          <div className="recipe__area-container">
            <p className="recipe__area">{strArea}</p>
          </div>
        </div>
        <div className="recipe__ingredient">
          <p className="recipe__ingredient-title">Ingredients</p>
          <ul className="recipe__ingredient-list">
            {ingredientData.map((ingredient, index) => (
              <li className="recipe__ingredient-item">
                {ingredient} - {measureData[index]}
              </li>
            ))}
          </ul>
        </div>
        <div className="recipe__instruction-container">
          <p className="recipe__instruction">{strInstructions}</p>
        </div>
      </div>
    </main>
  );
}

export default Recipe;
