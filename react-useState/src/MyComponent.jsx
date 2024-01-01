import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isStudent, setIsStudent] = useState(false);

  const updateName = () => {
    setName("DJ");
    // name = "DJ"; this wont work but it can be seen in consol
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleStudentStatus = () => {
    setIsStudent(!isStudent);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is Student: {isStudent ? "Yes" : "No"}</p>
      <button onClick={toggleStudentStatus}>Toggle Status</button>
    </div>
  );
}

export default MyComponent;
