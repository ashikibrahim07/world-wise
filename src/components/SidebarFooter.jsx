import styles from "./SidebarFooter.module.css";

function SidebarFooter() {
  return (
    <>
      <footer className={styles.footer}>
        <a className={styles.copyright} href="https://ashik-ibrahim.vercel.app/" target="_blank" rel="noopener noreferrer">
          Made with ❤️ by Ashik Ibrahim S.
        </a>
      </footer>
    </>
  );
}

export default SidebarFooter;
