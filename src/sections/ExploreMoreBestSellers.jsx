import ExploreProducts from "../components/ExploreProducts";
import BestSeller from "../components/BestSeller";
import styles from "./ExploreMoreBestSellers.module.css";

const ExploreMoreBestSellers = () => {
  return (
    <section className={styles.exploreProductsParent}>
      <ExploreProducts />
      <BestSeller />
    </section>
  );
};

export default ExploreMoreBestSellers;
