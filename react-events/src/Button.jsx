//
//
//
//
//
//
//
function Button() {
  const handleClick = (e) => (e.target.textContent = "DJ here!!");

  return <button onClick={(e) => handleClick(e)}>Click Me⭐</button>;
}
export default Button;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// onClick attribute
// const handleClick = () => console.log("Ouch");
// return <button onClick={handleClick}>Click Me⭐</button>;

// onClick with parameters
//   const handleClick2 = (name) => console.log(`${name} stop clicking me`);
//   return <button onClick={() => handleClick2("DJ")}>Click Me⭐</button>;

// onClick + conditions
// let count = 0;

//   const handleClick = (name) => {
//     if (count < 3) {
//       count++;
//       console.log(`${name} you clicked me ${count} times`);
//     } else {
//       console.log(`${name} stop clicking me!`);
//     }
//   };

//   return <button onClick={() => handleClick("DJ")}>Click Me⭐</button>;

// event object + doubleclick/click
// const handleClick = (e) => (e.target.textContent = "DJ here!!");

// return <button onDoubleClick={(e) => handleClick(e)}>Click Me⭐</button>;
