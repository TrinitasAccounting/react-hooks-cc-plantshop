import React, { useState } from "react";

function PlantCard({ plantName, plantImage, plantPrice, plantId, onDeletePlant, plant }) {

  const [inStock, setInStock] = useState(true);

  function soldOut() {
    setInStock(!inStock);
  }

  // console.log(plantId);

  function onDeleteButton() {
    fetch(`http://localhost:6001/plants/${plantId}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => onDeletePlant(plantId))
  }


  return (
    <li className="card" data-testid="plant-item">
      <img src={plantImage} alt={plantName} />
      <h4>{plantName}</h4>
      <p>Price: {plantPrice}</p>
      {inStock ? (
        <button className="primary" onClick={soldOut}>In Stock</button>
      ) : (
        <button onClick={soldOut}>Out of Stock</button>
      )}
      <button onClick={onDeleteButton}>Delete</button>
    </li>
  );
}

export default PlantCard;
