// React hook = Special function that allows functional components to use react features without writing class components it was added in react from v16.8
// useState, useEffect, useContext, useReducer, useCallback etc.

// UseState() = A React Hook that allows you to create a stateful variable to your component. And a setter function to update it's value in the vertual DOM.
// Ex. import React, { useState } from "react";
// [name, setName] = useState()

import MyComponent from "./MyComponent";

function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

export default App;
