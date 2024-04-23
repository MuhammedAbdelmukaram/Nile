import styles from "./TopLeft.module.css";

const TopLeft = () => {
  return (
    <div className={styles.images}>
      <div className={styles.image12Parent}>
        <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
        <img className={styles.image13Icon} alt="" src="/image-12@2x.png" />
        <img className={styles.image14Icon} alt="" src="/image-12@2x.png" />
        <img className={styles.image15Icon} alt="" src="/image-12@2x.png" />
        <img className={styles.image16Icon} alt="" src="/image-12@2x.png" />
        <img className={styles.image17Icon} alt="" src="/image-12@2x.png" />
      </div>
      <img className={styles.image18Icon} alt="" src="/image-18@2x.png" />
    </div>
  );
};

export default TopLeft;
