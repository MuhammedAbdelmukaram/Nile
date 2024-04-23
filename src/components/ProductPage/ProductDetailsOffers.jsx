import ProductPageOffers from "./OfferCard";
import styles from "./ProductDetailsOffers.module.css";

const Offers = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.groupParent}>
        <img className={styles.frameChild} alt="" src="/group-48@2x.png" />
        <h3 className={styles.offers}>Offers</h3>
      </div>
      <div className={styles.frameGroup}>
        <ProductPageOffers />
        <ProductPageOffers />
        <ProductPageOffers />
        <ProductPageOffers />
      </div>
    </div>
  );
};

export default Offers;
