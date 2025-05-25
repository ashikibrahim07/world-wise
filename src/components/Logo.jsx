import { useNavigate } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  const navigate = useNavigate();
  function hanldeNavigate() {
    navigate("/");
  }
  return (
    <img
      src="/logo.png"
      alt="WorldWise logo"
      className={styles.logo}
      onClick={hanldeNavigate}
    />
  );
}

export default Logo;
