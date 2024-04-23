import styles from "./ProductDetailHeader.module.css";

const ProductsDetailsTop = () => {
  return (
    <div className={styles.kreoHiveAntiGhostingGamingParent}>
      <h1
        className={styles.kreoHiveAntiGhosting}
      >{`Kreo Hive Anti-ghosting Gaming Keyboard | 75% Tenkeyless Wired Mechanical Keyboard with RGB LED Backlight Red Switches & 3 Colour Key Caps | Detachable USB C Cable BP (RGB Backlight, Red Switch)`}</h1>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.div}>4.0 / 5</div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/vector10@2x.png" />
          <img className={styles.vectorIcon1} alt="" src="/vector13@2x.png" />
          <img className={styles.vectorIcon2} alt="" src="/vector14@2x.png" />
          <img className={styles.vectorIcon3} alt="" src="/vector15@2x.png" />
          <img className={styles.vectorIcon4} alt="" src="/vector16@2x.png" />
        </div>
      </div>
      <div className={styles.inclusiveOfAllTaxesEmiOptParent}>
        <div className={styles.inclusiveOfAllContainer}>
          <span className={styles.inclusiveOfAllContainer1}>
            <p className={styles.inclusiveOfAll}>Inclusive of all taxes</p>
            <p className={styles.emiOptionsNoCostEmiAvai}>
              <span className={styles.emiOptions}>EMI options</span>
              <span className={styles.noCostEmi}> (no cost EMI available)</span>
            </p>
          </span>
        </div>
        <div className={styles.solParent}>
          <div className={styles.sol}>3.54 SOL</div>
          <div className={styles.sol1}>4.50 SOL</div>
          <div className={styles.off}>(34% off)</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsTop;
