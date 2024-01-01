// props =  read-only properties that are shared between components. A parent component can send data to a child component.
// key=value

// propTypes = a mechanism that ensures that the passed value is of the correct datatype.
// age: PropTypes.number

// defaultProps = default values for props in case they are not passed from the parent component
// name: "Guest"

import Student from "./student.jsx";

function App() {
  return (
    <>
      <Student name="DJ" age={21} isStudent={true} />
      <Student name="PJ" age={22} isStudent={false} />
      <Student name="AJ" age={23} isStudent={false} />
      <Student age={10} />
    </>
  );
}

export default App;
 