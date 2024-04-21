import styles from "./Review.module.css";

const Reviews = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.wrapperEllipse23Parent}>
          <div className={styles.wrapperEllipse23}>
            <img
              className={styles.wrapperEllipse23Child}
              alt=""
              src="/ellipse-23@2x.png"
            />
          </div>
          <div className={styles.johnDoe}>John Doe</div>
        </div>
        <div className={styles.vectorParent}>
          {/* <img className={styles.vectorIcon} alt="" src="/vector39@2x.png" />
          <img className={styles.vectorIcon1} alt="" src="/vector40@2x.png" />
          <img className={styles.vectorIcon2} alt="" src="/vector42@2x.png" /> */}
          <img className={styles.vectorIcon3} alt="" src="/vector-13.svg" />
          <img className={styles.vectorIcon3} alt="" src="/vector-13.svg" />
          <img className={styles.vectorIcon3} alt="" src="/vector-13.svg" />
          <img className={styles.vectorIcon3} alt="" src="/vector-13.svg" />
          <img className={styles.vectorIcon4} alt="" src="/vector-14.svg" />
        </div>
      </div>
      <div className={styles.purchasedOn4thMarch2024Parent}>
        <div className={styles.purchasedOn4th}>
          Purchased on 4th March 2024 | Reviewed on 10th March 2024
        </div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.loremIpsumDolorSitAmetCoParent}>
          <div className={styles.loremIpsumDolor1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </div>
          <div className={styles.vectorGroup}>
            <img className={styles.vectorIcon5} alt="" src="/vector101.svg" />
            <img className={styles.vectorIcon6} alt="" src="/vector111.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
