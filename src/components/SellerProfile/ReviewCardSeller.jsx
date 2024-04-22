import styles from "./ReviewCardSeller.module.css";

const SellerSingelReview = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.ellipseParent}>
          <img className={styles.frameChild} alt="" src="/ellipse-231@2x.png" />
          <div className={styles.johnDoe}>John Doe</div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/vector-10.svg" />
          <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
          <img className={styles.vectorIcon} alt="" src="/vector-12.svg" />
          <img className={styles.vectorIcon} alt="" src="/vector-13.svg" />
          <img className={styles.vectorIcon4} alt="" src="/vector-14.svg" />
        </div>
      </div>
      <div className={styles.purchasedOn4thMarch2024Parent}>
        <div className={styles.purchasedOn4th}>
          Purchased on 4th March 2024 | Reviewed on 10th March 2024
        </div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipis
        </div>
      </div>
      <div className={styles.loremIpsumDolorSitAmetCoWrapper}>
        <div className={styles.loremIpsumDolor1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ...
        </div>
      </div>
    </div>
  );
};

export default SellerSingelReview;
