import React from "react";
import MenuCard from "../../Components/MenuCard/MenuCard";
import "./CustomizedMenu.scss";
import { useState, useEffect } from "react";
import homeButton from "../../assets/home-rv.png";
import { Link } from "react-router-dom";

function CustomizedMenu() {
  const [category, setCategory] = useState(null);
  const [area, setArea] = useState(null);
  const [customizedMenu, setConstomizedMenu] = useState(null);

  useEffect(() => {
    getCategory();
    getArea();
  }, []);

  // function to get category
  const getCategory = () => {
    var axios = require("axios").default;
    var options = {
      method: "GET",
      url: "https://themealdb.p.rapidapi.com/categories.php",
      headers: {
        "x-rapidapi-host": "themealdb.p.rapidapi.com",
        "x-rapidapi-key": "f65e988bd0mshb2ab3c2deee2465p15e63bjsn92fd3b3df995"
      }
    };

    axios
      .request(options)
      .then(function (response) {
        setCategory(response.data.categories);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // function to get area
  const getArea = () => {
    var axios = require("axios").default;

    var options = {
      method: "GET",
      url: "https://themealdb.p.rapidapi.com/list.php",
      params: { a: "list" },
      headers: {
        "x-rapidapi-host": "themealdb.p.rapidapi.com",
        "x-rapidapi-key": "f65e988bd0mshb2ab3c2deee2465p15e63bjsn92fd3b3df995"
      }
    };

    axios
      .request(options)
      .then(function (response) {
        setArea(response.data.meals);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // function to get menu by category
  const filteredByCategory = (category) => {
    var axios = require("axios").default;

    var options = {
      method: "GET",
      url: "https://themealdb.p.rapidapi.com/filter.php",
      params: {
        c: category
      },
      headers: {
        "x-rapidapi-host": "themealdb.p.rapidapi.com",
        "x-rapidapi-key": "f65e988bd0mshb2ab3c2deee2465p15e63bjsn92fd3b3df995"
      }
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.meals);
        setConstomizedMenu(response.data.meals);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // function to get menu by area
  const filteredByArea = (area) => {
    var axios = require("axios").default;

    var options = {
      method: "GET",
      url: "https://themealdb.p.rapidapi.com/filter.php",
      params: { a: area },
      headers: {
        "x-rapidapi-host": "themealdb.p.rapidapi.com",
        "x-rapidapi-key": "f65e988bd0mshb2ab3c2deee2465p15e63bjsn92fd3b3df995"
      }
    };

    axios
      .request(options)
      .then(function (response) {
        setConstomizedMenu(response.data.meals);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleCategorySubmit = (event) => {
    event.preventDefault();
    const selectedCategory = event.target[0].value;
    filteredByCategory(selectedCategory);
  };

  const handleAreaSubmit = (event) => {
    event.preventDefault();
    const selectedArea = event.target[0].value;
    filteredByArea(selectedArea);
  };

  if (category === null || area === null) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <nav className="customized-navigation">
        <Link to="/">
          <img src={homeButton} alt="home" className="home-button"></img>
        </Link>
        <div className="form__container">
          <form onSubmit={handleCategorySubmit} className="form">
            <label htmlFor="category" className="form__label">
              Filter By Category
            </label>
            <select name="category" id="category" className="form__dropdown">
              {category.map((item) => {
                return (
                  <option value={item.strCategory} key={item.idCategory}>
                    {item.strCategory}
                  </option>
                );
              })}
            </select>
            <button className="form__button">Get Menu</button>
          </form>

          <form onSubmit={handleAreaSubmit} className="form">
            <label htmlFor="area" className="form__label">
              Filter By Area
            </label>
            <select name="area" id="area" className="form__dropdown">
              {area.map((item, index) => {
                return (
                  <option value={item.strArea} key={index}>
                    {item.strArea}
                  </option>
                );
              })}
            </select>
            <button className="form__button">Get Menu</button>
          </form>
        </div>
      </nav>

      {customizedMenu ? (
        <section className="menu-container">
          {customizedMenu.map((menu) => (
            <MenuCard menuData={menu} key={menu.idMeal} />
          ))}
        </section>
      ) : (
        <div className="main-text__container">
          <p className="main-text">Filter Your Menu by Category or Area!</p>
        </div>
      )}
    </div>
  );
}

export default CustomizedMenu;
