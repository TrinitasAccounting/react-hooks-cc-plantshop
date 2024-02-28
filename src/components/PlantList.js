import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsToShow }) {

  const renderPlantsToPage =
    plantsToShow.map((plant) => {
      return (
        <PlantCard key={plant.id} plantName={plant.name} plantImage={plant.image} plantPrice={plant.price} />
      )
    })



  return (
    <ul className="cards">{renderPlantsToPage}</ul>
  );
}

export default PlantList;
