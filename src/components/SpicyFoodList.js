import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");
 
  const foodsToDisplay = foods.filter((food)=>
  {
    if (filterBy === "All")
    {
      return true;
    }else {
      return food.cuisine === filterBy;
    }
  });
//A function to handle the filter change in the selected DOM element
function handleFilterChange(event){
  setFilterBy(event.target.value)
}
  //A function to add food to our state when a button is clicked
  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    const newFoodArray = [...foods, newFood]
    setFoods(newFoodArray)   
  }
  //A function to remove elements from arrays in state
 
  function handleLiClick(id){
    
  
//A function to update elements in an array in state
    const newFoodArray = foods.map(food=> {
      if(food.id === id){
        return {
          ...food,
          heatLevel : food.heatLevel + 1
        };}
        else{
          return food;
        }
    })
      setFoods(newFoodArray)
  }

  // Iterating through our array to give list of foods
 
  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name = "filter" onChange={handleFilterChange}>
        <option value ="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
    </div>
  );
}

export default SpicyFoodList;