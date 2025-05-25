import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Worldwise, an interactive map-based application that allows users to
            explore countries around the world and discover their key
            demographics. This platform is designed to provide users with
            valuable insights into different nations, helping them understand
            the global landscape in a fun and engaging way.
          </p>
          <p>
            Worldwise is not just a map; it&apos;s a gateway to understanding the
            diverse and rich cultures that make up our world. Explore, learn,
            and get to know the globe like never before! 🌎
          </p>
        </div>
      </section>
    </main>
  );
}
