import ProductFromSellerCard from "../../components/SellerProfile/ProductSellerCard";
import styles from "./ProductSeller.module.css";

const ProductsFromSeller = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.productsFromKreoTechParent}>
        <h1 className={styles.productsFromKreo}>Products From Kreo tech</h1>
        <div className={styles.viewAllWrapper}>
          <h3 className={styles.viewAll}>View All</h3>
        </div>
      </div>
      <ProductFromSellerCard />
      <ProductFromSellerCard />
      <ProductFromSellerCard />
      <ProductFromSellerCard />
    </div>
  );
};

export default ProductsFromSeller;
