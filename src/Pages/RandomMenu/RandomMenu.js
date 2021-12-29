import React, { useEffect } from "react";
import "./RandomMenu.scss";
import MenuCard from "../../Components/MenuCard/MenuCard";
import HomeTitle from "../../Components/HomeTitle/HomeTitle";
import { useState } from "react";
import axios from "axios";

function RandomMenu() {
  const [randomMenu, setRandomMenu] = useState(null);

  useEffect(() => {
    getRandomMenu();
  }, []);

  const getRandomMenu = () => {
    var axios = require("axios").default;

    var options = {
      method: "GET",
      url: "https://themealdb.p.rapidapi.com/randomselection.php",
      headers: {
        "x-rapidapi-host": "themealdb.p.rapidapi.com",
        "x-rapidapi-key": "f65e988bd0mshb2ab3c2deee2465p15e63bjsn92fd3b3df995"
      }
    };

    axios
      .request(options)
      .then(function (response) {
        setRandomMenu(response.data.meals);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  if (randomMenu === null) {
    return <div>Loading menu...</div>;
  }

  return (
    <div>
      <nav className="random-navigation">
        <HomeTitle text="Go Random" getRandomMenu={getRandomMenu} />
      </nav>
      <section className="menu-container">
        {randomMenu.map((menu) => (
          <MenuCard menuData={menu} key={menu.idMeal} />
        ))}
      </section>
    </div>
  );
}

export default RandomMenu;
