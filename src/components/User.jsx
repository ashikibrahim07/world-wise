import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./User.module.css";

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      <img 
        src={user.avatar} 
        alt={user.name} 
        title={user.name}
      />
      <span className={styles.welcomeText}>
        Welcome, {user.name}
      </span>
      <button 
        onClick={handleClick}
        aria-label="Logout"
      >
        Logout
      </button>
    </div>
  );
}

export default User;
