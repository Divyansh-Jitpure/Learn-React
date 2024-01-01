import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];
  const veggies = [
    { id: 1, name: "potatoes", calories: 110 },
    { id: 2, name: "celery", calories: 15 },
    { id: 3, name: "carrots", calories: 25 },
    { id: 4, name: "corn", calories: 63 },
    { id: 5, name: "broccoli", calories: 50 },
  ];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {veggies.length > 0 && <List items={veggies} category="Vegetables" />}
    </>
  );
}

export default App;
