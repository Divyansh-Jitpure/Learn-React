import PropTypes from "prop-types";

function UserGreeting(props) {
  return props.isLoggedIn ? (
    <h2>Welcome {props.userName}</h2>
  ) : (
    <h2>Login to continue</h2>
  );
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  userName: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  userName: "Guest",
};

export default UserGreeting;
