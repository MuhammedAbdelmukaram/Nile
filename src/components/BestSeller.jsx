import FeaturedProductBestSellers from "./FeaturedPBS";
import styles from "../components/BestSeller.module.css";

const BestSeller = () => {
  return (
    <div className={styles.bestSeller}>
      <div className={styles.bestSellersParent}>
        <h1 className={styles.bestSellers}>Best Sellers</h1>
        <FeaturedProductBestSellers />
        <div className={styles.frameParent}>
          <div className={styles.image14Wrapper}>
            <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
          </div>
          <div className={styles.image14Container}>
            <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
          </div>
          <div className={styles.image14Container}>
            <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
          </div>
          <div className={styles.image14Container}>
            <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
          </div>
          <div className={styles.image14Container}>
            <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
