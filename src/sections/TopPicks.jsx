import ProductCard from "../components/ProductCard";
import styles from "./TopPicks.module.css";

const TopPicks = () => {
  return (
    <section className={styles.topPicks}>
      <div className={styles.topPicksJustForYouParent}>
        <h1 className={styles.topPicksJust}>Top picks just for you</h1>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <button className={styles.viewAll}>View All</button>
        </div>
      </div>
      <div className={styles.productTile1Parent}>
        <ProductCard
          vector="/vector3@2x.png"
          vector1="/vector11@2x.png"
          vector2="/vector21@2x.png"
          vector3="/vector31@2x.png"
        />
        <ProductCard
          vector="/vector-10.svg"
          vector1="/vector-11.svg"
          vector2="/vector-12.svg"
          vector3="/vector-13.svg"
        />
        <ProductCard
          vector="/vector-10.svg"
          vector1="/vector-11.svg"
          vector2="/vector-12.svg"
          vector3="/vector-13.svg"
        />
        <ProductCard
          vector="/vector-10.svg"
          vector1="/vector-11.svg"
          vector2="/vector-12.svg"
          vector3="/vector-13.svg"
        />
        <ProductCard
          vector="/vector-10.svg"
          vector1="/vector-11.svg"
          vector2="/vector-12.svg"
          vector3="/vector-13.svg"
        />
        <ProductCard
          vector="/vector-10.svg"
          vector1="/vector-11.svg"
          vector2="/vector-12.svg"
          vector3="/vector-13.svg"
        />
      </div>
    </section>
  );
};

export default TopPicks;
