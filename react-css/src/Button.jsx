// import styles from "./Button.module.css";

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
