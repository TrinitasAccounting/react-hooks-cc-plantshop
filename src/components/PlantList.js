import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsToShow, onDeletePlant }) {

  const renderPlantsToPage =
    plantsToShow.map((plant) => {
      return (
        <PlantCard key={plant.id} plant={plant} plantId={plant.id} plantName={plant.name} plantImage={plant.image} plantPrice={plant.price} onDeletePlant={onDeletePlant} />
      )
    })



  return (
    <ul className="cards">{renderPlantsToPage}</ul>
  );
}

export default PlantList;
