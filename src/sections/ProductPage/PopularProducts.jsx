import ProductCard from "../../components/ProductPage/ProductCard.jsx";
// import ProductsCardProductPage from "./products-card-product-page";
import styles from "./PopularProducts.module.css";

const PopularProductsProductsPage = () => {
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
      <div className={styles.popularProductsParent}>
        <h1 className={styles.popularProducts}>Popular Products</h1>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <a className={styles.viewAll}>View All</a>
        </div>
      </div>
    </div>
  );
};

export default PopularProductsProductsPage;
