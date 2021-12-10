import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className={"header"}>
      <h1> {title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        // make the text dynamic based on whether it's clicked or not.
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

//'PropTypes is like a built-in type system for your properties
Header.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.string,
};

export default Header;
