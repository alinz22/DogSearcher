import React from "react";
import "../App.css";

function Card({ dog, addBan }) {
    return (
      <div className="card">
        <img src={dog.image} alt={dog.breed} className="dog-image"/>
        <h2 className="dog-breed">{dog.breed}</h2>
        <p className="temperament">
          <span className="label">Temperament:</span> {dog.temperament}
          <button onClick={() => addBan(dog.temperament)} className="ban-btn">Ban</button>
        </p>
        <p className="life-span">
          <span className="label">Life Span:</span> {dog.life_span}
          <button onClick={() => addBan(dog.life_span)} className="ban-btn">Ban</button>
        </p>
      </div>
    );
}

export default Card;
