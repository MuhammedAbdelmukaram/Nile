import { useMemo } from "react";
import styles from "./Category.module.css";

const Category = ({ propLeft, propTop }) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      </div>
      <h2 className={styles.appliances}>Appliances</h2>
    </div>
  );
};

export default Category;
