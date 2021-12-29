import HomeTitle from "../../Components/HomeTitle/HomeTitle";
import { Link } from "react-router-dom";
import "./HomePage.scss";

import React from "react";

function HomePage() {
  return (
    <main className="home-background">
      <div className="home-title">
        <Link to="/customized-menu">
          <HomeTitle text="Customized Menu" />
        </Link>
        <Link to="/random-menu">
          <HomeTitle text="Random Menu" />
        </Link>
      </div>
    </main>
  );
}

export default HomePage;
