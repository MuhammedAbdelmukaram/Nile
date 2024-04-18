import Category from "../components/Category";
import styles from "./Categories.module.css";

const Categories = () => {
  return (
    <div className={styles.groupParent}>
      <button className={styles.ellipseParent}>
        <div className={styles.groupChild} />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </button>
      <div className={styles.frameParent}>
        <Category />
        <Category propLeft="unset" propTop="unset" />
        <Category propLeft="unset" propTop="unset" />
        <Category propLeft="unset" propTop="unset" />
        <Category propLeft="unset" propTop="unset" />
        <Category propLeft="unset" propTop="unset" />
        <Category propLeft="unset" propTop="unset" />
        <Category propLeft="unset" propTop="unset" />
        <Category propLeft="unset" propTop="unset" />
        <Category propLeft="unset" propTop="unset" />
        <Category propLeft="unset" propTop="unset" />
        <Category propLeft="unset" propTop="unset" />
      </div>
      <img className={styles.frameChild} alt="" src="/group-21.svg" />
    </div>
  );
};

export default Categories;
