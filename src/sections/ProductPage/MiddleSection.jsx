import styles from "./MiddleSection.module.css";

const MiddleSection = () => {
  return (
    <div className={styles.featuredImages}>
      <img className={styles.image20Icon} alt="" src="/image-20@2x.png" />
      <img className={styles.image21Icon} alt="" src="/image-21@2x.png" />
      <img className={styles.image22Icon} alt="" src="/image-22@2x.png" />
    </div>
  );
};

export default MiddleSection;
