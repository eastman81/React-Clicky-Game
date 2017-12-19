import React from "react";
import "./CharaCards.css";

const CharaCard = props => (
  <div className="card">
    <div className="img-container">
      <span className="spanImage" onClick={() => props.removeChara(props.id)}>
        <img alt={props.name} src={props.image} />
      </span>
    </div>
  </div>
);

export default CharaCard;
