import PropTypes from "prop-types";
function List(props) {
  const category = props.category;
  const itemList = props.items;

  //   Original Array
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3>{category}</h3>
      <ol>{listItems}</ol>
    </>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;

//   sorting methods by properies of array of objects
//   fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical
//   fruits.sort((a, b) => b.name.localeCompare(a.name)); //Reverse Alphabetical
//   fruits.sort((a, b) => a.calories - b.calories); //Ascending
//   fruits.sort((a, b) => b.calories - a.calories); //Descending

//   Array of Low cal fruits
//   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

//   const listItems = lowCalFruits.map((lowCalFruit) => (
//     <li key={lowCalFruit.id}>
//       {lowCalFruit.name}: <b>{lowCalFruit.calories}</b>
//     </li>
//   ));

//   Array of High cal fruits
//   const highCalFruits = fruits.filter((fruit) => fruit.calories < 100);

//   const listItems = highCalFruits.map((highCalFruit) => (
//     <li key={highCalFruit.id}>
//       {highCalFruit.name}: <b>{highCalFruit.calories}</b>
//     </li>
//   ));
