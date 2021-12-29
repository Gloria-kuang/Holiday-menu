import React, { useState, useEffect } from "react";
import "./Recipe.scss";
import { Link } from "react-router-dom";

function Recipe(props) {
  const recipeId = props.match.params.id;

  const [menuData, setMenuData] = useState(null);
  const [ingredientData, setIngredientData] = useState([]);
  const [measureData, setMeasureData] = useState([]);

  useEffect(() => {
    getRecipe(recipeId);
  }, [recipeId]);

  const getRecipe = (id) => {
    var axios = require("axios").default;

    var options = {
      method: "GET",
      url: "https://themealdb.p.rapidapi.com/lookup.php",
      params: { i: id },
      headers: {
        "x-rapidapi-host": "themealdb.p.rapidapi.com",
        "x-rapidapi-key": "f65e988bd0mshb2ab3c2deee2465p15e63bjsn92fd3b3df995"
      }
    };

    axios
      .request(options)
      .then(function (response) {
        const menuDetail = response.data.meals[0];
        setMenuData(response.data.meals[0]);

        const ingredientData = Object.keys(menuDetail)
          .filter(
            (key) => key.includes("strIngredient") && menuDetail[key] !== ""
          )
          .map((key) => menuDetail[key]);
        const measureData = Object.keys(menuDetail)
          .filter((key) => key.includes("strMeasure") && menuDetail[key] !== "")
          .map((key) => menuDetail[key]);

        setIngredientData(ingredientData);
        setMeasureData(measureData);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  if (!menuData) {
    return <div>Loading...</div>;
  }

  return (
    <main className="recipe">
      <div className="recipe__container">
        <h2 className="recipe__title">{menuData.strMeal}</h2>
        <div className="recipe__tag">
          <div className="recipe__category-container">
            <p className="recipe__category">{menuData.strCategory}</p>
          </div>
          <div className="recipe__area-container">
            <p className="recipe__area">{menuData.strArea}</p>
          </div>
        </div>
        <img className="recipe__image" src={menuData.strMealThumb} alt=""></img>
        <div className="recipe__ingredient">
          <p className="recipe__ingredient-title">Ingredients</p>
          <ul className="recipe__ingredient-list">
            {ingredientData.map((ingredient, index) => (
              <li key={ingredient} className="recipe__ingredient-item">
                {ingredient} - {measureData[index]}
              </li>
            ))}
          </ul>
        </div>
        <div className="recipe__instruction-container">
          <p className="recipe__instruction">{menuData.strInstructions}</p>
        </div>

        <Link to="/" className="back-home">
          <p>BACK</p>
        </Link>
      </div>
    </main>
  );
}

export default Recipe;
