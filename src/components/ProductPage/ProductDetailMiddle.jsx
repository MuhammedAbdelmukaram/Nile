import styles from "./ProductDetailMiddle.module.css";

const ProductsDetailsMiddle = () => {
  return (
    <div className={styles.productDetailsParent}>
      <div className={styles.productDetails}>
        <h3 className={styles.productDetails1}>Product Details</h3>
        <div className={styles.frameParent}>
          <div className={styles.brandParent}>
            <div className={styles.brand}>Brand</div>
            <div className={styles.compatibleDevices}>Compatible devices</div>
            <div className={styles.connectivityTechnology}>
              Connectivity Technology
            </div>
            <div className={styles.description}>Description</div>
            <div className={styles.specialFeature}>Special Feature</div>
          </div>
          <div className={styles.kreoParent}>
            <div className={styles.kreo}>Kreo</div>
            <div className={styles.gamingConsoleWin}>
              Gaming Console, Win 10/11, Mac
            </div>
            <div className={styles.usbC}>USB-c</div>
            <div className={styles.gaming}>Gaming</div>
            <div className={styles.backlight}>Backlight</div>
          </div>
        </div>
      </div>
      <div className={styles.filter}>
        <h3 className={styles.type}>Type</h3>
        <div className={styles.frameGroup}>
          <label className={styles.whiteBacklightWrapper}>
            <div className={styles.whiteBacklight}>White Backlight</div>
          </label>
          <label className={styles.rgbBacklightWrapper}>
            <div className={styles.rgbBacklight}>RGB Backlight</div>
          </label>
        </div>
        <div className={styles.frameContainer}>
          <label className={styles.blueSwitchWrapper}>
            <div className={styles.blueSwitch}>Blue Switch</div>
          </label>
          <label className={styles.brownSwitchWrapper}>
            <div className={styles.brownSwitch}>Brown Switch</div>
          </label>
          <label className={styles.redSwitchWrapper}>
            <div className={styles.redSwitch}>Red Switch</div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsMiddle;
