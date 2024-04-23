import styles from "./FeaturedPBS.module.css";

const FeaturedProductBestSellers = () => {
  return (
    <div className={styles.featuredProduct2}>
      <img className={styles.image13Icon} alt="" src="/image-13-1@2x.png" />
      <div className={styles.kreoHiveAntiGhostingGamingParent}>
        <h1 className={styles.kreoHiveAntiGhosting}>
          Kreo Hive Anti-ghosting Gaming Keyboard | 75% Tenkeyless Wired
          Mechanical Keyboard with...
        </h1>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.div}>4.0 / 5</div>
          </div>
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon} alt="" src="/vector-10.svg" />
            <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
            <img className={styles.vectorIcon} alt="" src="/vector-12.svg" />
            <img className={styles.vectorIcon} alt="" src="/vector-13.svg" />
            <img className={styles.vectorIcon4} alt="" src="/vector-14.svg" />
          </div>
        </div>
        <div className={styles.solParent}>
          <div className={styles.sol}>3.54 SOL</div>
          <div className={styles.sol1}>4.50 SOL</div>
          <div className={styles.off}>(34% off)</div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.getDeliveredByMonday1stApParent}>
              <div className={styles.getDeliveredByContainer}>
                <span>
                  <span className={styles.getDeliveredBy}>
                    Get delivered by
                  </span>
                  <span>{` `}</span>
                </span>
                <span>
                  <span className={styles.monday1stApril}>
                    Monday 1st April
                  </span>
                </span>
              </div>
              <div className={styles.deliveryFeesContainer}>
                <span>{`Delivery Fees : `}</span>
                <span className={styles.span}>0.00</span>
              </div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupItem} />
              <div className={styles.parent}>
                <div className={styles.div1}>3.54</div>
                <img
                  className={styles.clipPathGroup}
                  alt=""
                  src="/clip-path-group1@2x.png"
                />
              </div>
              <button className={styles.ellipseParent}>
                <div className={styles.groupInner} />
                <img className={styles.vectorIcon5} alt="" src="/vector4.svg" />
              </button>
            </div>
          </div>
          <img className={styles.frameChild} alt="" src="/group-28.svg" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductBestSellers;
