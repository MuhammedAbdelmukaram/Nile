import styles from './LeftSideCat.module.css'
import FilterCategories from "../../components/CategoriesPage/FilerCategories";

const LeftSidebarCategories = () => {
  return (
    <div className={styles.frameParent}>
      <FilterCategories />
      <div className={styles.frameGroup}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/vector54@2x.png" />
          <div className={styles.sponsored}>sponsored</div>
        </div>
        <img className={styles.image23Icon} alt="" src="/image-23@2x.png" />
      </div>
    </div>
  );
};

export default LeftSidebarCategories;
