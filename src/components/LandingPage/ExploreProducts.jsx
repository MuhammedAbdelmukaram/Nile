import styles from "./ExploreProducts.module.css";

const ExploreProducts = () => {
  return (
    <div className={styles.exploreProducts}>
      <div className={styles.frameParent}>
        <div className={styles.exploreMoreParent}>
          <h1 className={styles.exploreMore}>Explore More</h1>
          <div className={styles.image7Parent}>
            <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
            <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
            <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
            <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
            <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
            <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <button className={styles.viewAll}>View All</button>
        </div>
      </div>
    </div>
  );
};

export default ExploreProducts;
