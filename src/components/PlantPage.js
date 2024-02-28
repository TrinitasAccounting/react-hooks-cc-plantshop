import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantsToShow, setPlantsToShow] = useState([]);
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(data => setPlantsToShow(data))
  }, [])


  function onAddPlant(newPlant) {
    const newPlantsArray = [...plantsToShow, newPlant];
    setPlantsToShow(newPlantsArray);
  }



  //Searching Pets___________________________
  function updateSearchText(event) {
    setSearchText(event.target.value)
  };

  const filteredPlantsList = plantsToShow.filter((plant) => {
    return plant.name.toLowerCase().includes(searchText.toLowerCase())
  });


  function handleDeletePlant(deletedPlantId) {
    const updatedPlantsList = plantsToShow.filter((plant) => {
      return (plant.id !== deletedPlantId)
    })
    setPlantsToShow(updatedPlantsList);
  }








  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search updateSearchText={updateSearchText} />
      <PlantList plantsToShow={filteredPlantsList} onDeletePlant={handleDeletePlant} />
    </main>
  );
}

export default PlantPage;
