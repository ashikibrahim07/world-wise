import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

const PageNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Logo />
      </div>
      
      <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
        <span className={styles.hamburger}></span>
      </button>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''}`}>
        {/* <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li> */}
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
