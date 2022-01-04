import React, { useEffect, useState } from "react";
import "./RandomMenu.scss";
import MenuCard from "../../Components/MenuCard/MenuCard";
import HomeTitle from "../../Components/HomeTitle/HomeTitle";
import homeButton from "../../assets/home-rv.png";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <img src={homeButton} alt="home" className="home-button"></img>
        </Link>
        <div className="go-random-contatiner">
          <HomeTitle text="Go Random" getRandomMenu={getRandomMenu} />
        </div>
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
