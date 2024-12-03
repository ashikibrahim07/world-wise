import Sidebar from "../components/Sidebar";
import Map from "../components/Map";

import styles from "./Applayout.module.css";
import User from "../components/User";

function Applayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default Applayout;
