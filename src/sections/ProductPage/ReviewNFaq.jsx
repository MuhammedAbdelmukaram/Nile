import CutomersReviews from "../../components/ProductPage/CutomersReviews.jsx";
import FAQ from "../../components/ProductPage/FAQ";
import styles from "./ReviewNFaq.module.css";

const BottomProductsPage = () => {
  return (
    <div className={styles.frameParent}>
      <CutomersReviews />
      <div className={styles.faq}>
        <FAQ />
      </div>
    </div>
  );
};

export default BottomProductsPage;
