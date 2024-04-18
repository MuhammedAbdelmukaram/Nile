import styles from "./ProductCard.module.css";

const ProductCard = ({ vector, vector1, vector2, vector3 }) => {
  return (
    <div className={styles.productTile1}>
      <div className={styles.frameParent}>
        <div className={styles.image6Parent}>
          <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
          <div className={styles.groupParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.div}>4.0 / 5</div>
            </div>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src={vector} />
              <img className={styles.vectorIcon} alt="" src={vector1} />
              <img className={styles.vectorIcon} alt="" src={vector2} />
              <img className={styles.vectorIcon} alt="" src={vector3} />
              <img className={styles.vectorIcon4} alt="" src="/vector-14.svg" />
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
              <span className={styles.getDeliveredByContainer1}>
                <span>{`Delivery Fees : `}</span>
                <span className={styles.span}>0.00</span>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <button className={styles.buyNow}>Buy Now</button>
        </div>
      </div>
      <img className={styles.productTile1Child} alt="" src="/group-28-1.svg" />
    </div>
  );
};

export default ProductCard;
