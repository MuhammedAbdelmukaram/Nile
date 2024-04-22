import styles from './MainScreenCat.module.css'

import HeroCategories from "../../components/CategoriesPage/HeroCat";
import UpperMainSection from "../../components/CategoriesPage/UpperProductCat";
import BridgeICategories from "../../components/CategoriesPage/BridgeI";
import MainScreenCategoriesBottom from "../../components/CategoriesPage/LowerProductCat";
import BridgeIICategories from "../../components/CategoriesPage/BridgeII";

const MainScreenCategories = () => {
  return (
    <section className={styles.image23Parent}>
      <HeroCategories />
      <UpperMainSection />
      <BridgeICategories />
      <MainScreenCategoriesBottom />
      <BridgeIICategories />
    </section>
  );
};

export default MainScreenCategories;
