import React from "react";
import MenuCard from "../../Components/MenuCard/MenuCard";
import "./CustomizedMenu.scss";

function CustomizedMenu() {
  return (
    <div>
      <nav className="customized-navigation"></nav>
      <section className="menu-container">
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </section>
    </div>
  );
}

export default CustomizedMenu;
