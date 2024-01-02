// import styles from "./Button.module.css"; this is used if a .module.css format is used to include css styling

function Button() {
  const styles = {
    backgroundColor: "#d35f5f",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return <button style={styles}>Click me</button>;
  // return <button className="button">Click me</button>;
}

export default Button;
