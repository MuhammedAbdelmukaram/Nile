import ProductCard from "../../components/ProductPage/ProductCard.jsx";
// import ProductsCardProductPage from "./products-card-product-page";
import styles from "./SimilarProducts.module.css";

const SimilarProductsProductsPage = () => {
  return (
    <div className={styles.topPicks}>
      <div className={styles.productTile1Parent}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        {/* <ProductsCardProductPage /> */}
      </div>
      <div className={styles.similarProductsParent}>
        <h1 className={styles.similarProducts}>Similar Products</h1>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <h3 className={styles.viewAll}>View All</h3>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductsProductsPage;
