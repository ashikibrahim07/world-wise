import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";

import styles from "./AppLayout.module.css";
import User from "../components/User";

function Applayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.app}>
      <button 
        className={`${styles.mobileMenuBtn} ${isSidebarOpen ? styles.active : ''}`}
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <span className={styles.hamburger}></span>
      </button>

      <div className={`${styles.sidebarContainer} ${isSidebarOpen ? styles.open : ''}`}>
        <Sidebar />
      </div>

      <div className={styles.mainContent}>
        <Map />
        <User />
      </div>

      {isSidebarOpen && (
        <div className={styles.overlay} onClick={toggleSidebar} />
      )}
    </div>
  );
}

export default Applayout;
