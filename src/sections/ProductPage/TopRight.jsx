import InStockBuyAddCart from "../../components/ProductPage/InStockAddCard";
import Advert from "../../components/ProductPage/Advert";
import AdvertII from "../../components/ProductPage/AdvertII";
import styles from "./TopRight.module.css";

const TopRight = () => {
  return (
    <div className={styles.sidebar}>
      <InStockBuyAddCart />
      <Advert />
      <div className={styles.image23Parent}>
        <AdvertII />
        <div className={styles.sponsoredParent}>
          <div className={styles.sponsored}>sponsored</div>
          <img className={styles.vectorIcon} alt="" src="/vector25@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default TopRight;
