import styles from "./Advert.module.css";



const Advert = () => {
  return (
    <div className={styles.sponsoredParent}>
      <div className={styles.sponsored}>
        <div className={styles.image19Parent}>
          <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
          <div className={styles.kreoHiveAntiGhostingContainer}>
            <span className={styles.kreoHiveAntiGhostingContainer1}>
              <p className={styles.kreoHiveAntiGhosting}>
                Kreo Hive Anti-ghosting Gaming Keyboard
              </p>
              <p className={styles.tenKeyLess}>| 75% Ten Key Less...</p>
            </span>
          </div>
          <div className={styles.groupParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.div}>4.0 / 5</div>
            </div>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                alt=""
                src="/vector22@2x.png"
              />
              <img
                className={styles.vectorIcon1}
                alt=""
                src="/vector23@2x.png"
              />
              <img
                className={styles.vectorIcon2}
                alt=""
                src="/vector24@2x.png"
              />
              <img className={styles.vectorIcon3} alt="" src="/vector-13.svg" />
              <img className={styles.vectorIcon4} alt="" src="/vector-14.svg" />
            </div>
          </div>
          <div className={styles.groupContainer}>
            <div className={styles.solParent}>
              <div className={styles.sol}>3.54 SOL</div>
              <div className={styles.sol1}>4.50 SOL</div>
              <div className={styles.off}>(34% off)</div>
            </div>
            <img className={styles.frameChild} alt="" src="/group-281.svg" />
          </div>
        </div>
      </div>
      <div className={styles.sponsoredGroup}>
        <div className={styles.sponsored1}>sponsored</div>
        <img className={styles.vectorIcon5} alt="" src="/vector41.svg" />
      </div>
    </div>
  );
};

export default Advert;
