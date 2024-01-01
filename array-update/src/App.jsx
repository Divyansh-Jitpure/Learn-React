import { useState } from "react";

function App() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods((f) => [...f, newFood]);
  }
  function handleRemoveFood(index) {
    setFoods((f) => f.filter((_, i) => i !== index));
  }

  return (
    <>
      <h2>List of Food</h2>

      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Enter food name" id="foodInput" />
      <button onClick={handleAddFood}>Add Food</button>
    </>
  );
}

export default App;
