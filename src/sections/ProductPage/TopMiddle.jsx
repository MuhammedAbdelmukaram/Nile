import ProductsDetailsHeader from "../../components/ProductPage/ProductDetailHeader";
import ProductsDetailsMiddle from "../../components/ProductPage/ProductDetailMiddle";
import AboutProductsPage from "./../../components/ProductPage/ProductDetailsAbout";
import Offers from "../../components/ProductPage/ProductDetailsOffers";
import styles from "./TopMiddle.module.css";

const TopMiddle = () => {
  return (
    <div className={styles.details}>
      <ProductsDetailsHeader />
      <div className={styles.detailsChild} />
      <div className={styles.detailsItem} />
      <div className={styles.detailsInner} />
      <ProductsDetailsMiddle />
      <AboutProductsPage />
      <div className={styles.frameParent}>
        <Offers />
        <button className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <button className={styles.ellipseParent}>
            <div className={styles.groupItem} />
            <img className={styles.vectorIcon} alt="" src="/vector17.svg" />
          </button>
        </button>
      </div>
    </div>
  );
};

export default TopMiddle;
