import ExploreProducts from "../../components/LandingPage/ExploreProducts";
import BestSeller from "../../components/LandingPage/BestSeller";
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
