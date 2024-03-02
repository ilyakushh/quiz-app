import styles from "./Header.module.scss";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(resetCorrectAnswers());
  };
  return (
    <header className={styles.headerContainer}>
      <Link to="/" onClick={handleReset}>
        <img src={logo} alt="" />
      </Link>
      <Link to="/login" onClick={handleReset}>
        <button className="button">login</button>
      </Link>
    </header>
  );
};

export default Header;
