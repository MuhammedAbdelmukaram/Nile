import Navbar from "../sections/Navbar.jsx"; 
import Header from "../sections/Header.jsx";
import Footer from "../sections/Footer.jsx";
import LeftSidebarCategories from "../sections/CategoriesPage/LeftSideCat.jsx";
import MainScreenCategories from "../sections/CategoriesPage/MainScreenCat.jsx";
import styles from "./CategoriesPage.module.css";

const CategoriesPage = () => {
  return (
    <div className={styles.categoriesPage}>
          <Footer/> 
      <main className={styles.mainContainer}>
        <Navbar />
        <div className={styles.maskGroupParent}>
          <Header />
          <div
            className={styles.computersAccessories}
            >{`Computers & Accessories > Gaming > Peripherals > Gaming Keyboards`}</div>
        </div>
        <main className={styles.frameParent}>
          <LeftSidebarCategories />
          <MainScreenCategories />
        </main>
      </main>
    </div>
  );
};

export default CategoriesPage;
