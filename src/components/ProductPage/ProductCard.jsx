import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.productTile1}>
      <div className={styles.frameParent}>
        <div className={styles.image6Parent}>
          <img className={styles.image6Icon} alt="" src="/image-61@2x.png" />
          <div className={styles.groupParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.div}>4.0 / 5</div>
            </div>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                alt=""
                src="/vector43@2x.png"
              />
              <img
                className={styles.vectorIcon1}
                alt=""
                src="/vector44@2x.png"
              />
              <img
                className={styles.vectorIcon2}
                alt=""
                src="/vector45@2x.png"
              />
              <img
                className={styles.vectorIcon3}
                alt=""
                src="/vector46@2x.png"
              />
              <img
                className={styles.vectorIcon4}
                alt=""
                src="/vector47@2x.png"
              />
            </div>
          </div>
          <div className={styles.solParent}>
            <div className={styles.sol}>3.54 SOL</div>
            <div className={styles.solGroup}>
              <div className={styles.sol1}>4.50 SOL</div>
              <div className={styles.off}>(34% off)</div>
            </div>
          </div>
          <div className={styles.getDeliveredByMonday1stApParent}>
            <div className={styles.getDeliveredByContainer}>
              <span className={styles.getDeliveredByContainer1}>
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
              </span>
            </div>
            <div className={styles.deliveryFeesContainer}>
              <span className={styles.deliveryFeesContainer1}>
                <span>{`Delivery Fees : `}</span>
                <span className={styles.span}>0.00</span>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <h2 className={styles.buyNow}>Buy Now</h2>
        </div>
      </div>
      <img
        className={styles.productTile1Child}
        alt=""
        src="/group-282@2x.png"
      />
    </div>
  );
};

export default ProductCard;
