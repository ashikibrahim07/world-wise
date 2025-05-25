import styles from "./SidebarFooter.module.css";

function SidebarFooter() {
  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.copyright} href="https://ashik-ibrahim.vercel.app/" target="_blank" rel="noopener noreferrer">
          Made with ❤️ by Ashik Ibrahim S.
        </p>
      </footer>
    </>
  );
}

export default SidebarFooter;
