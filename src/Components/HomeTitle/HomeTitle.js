import React from "react";
import "./HomeTitle.scss";

function HomeTitle(props) {
  return (
    <div className="title__border">
      <button
        className="title__background"
        onClick={() => props.getRandomMenu()}
      >
        <h2 className="title__text">{props.text}</h2>
      </button>
    </div>
  );
}

export default HomeTitle;
