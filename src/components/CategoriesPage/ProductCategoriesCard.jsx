import styles from "./ProductCategoriesCard.module.css"
import { useMemo } from "react";

const ProductsCategories = ({ propLeft, propTop, propBackgroundImage }) => {
  const productStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={styles.product} style={productStyle}>
      <div className={styles.frame}>
        <div className={styles.frameParent}>
          <div className={styles.image6Parent}>
            <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
            <div className={styles.groupParent}>
              <div className={styles.rectangleParent}>
                <div className={styles.groupChild} />
                <div className={styles.div}>4.0 / 5</div>
              </div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector55@2x.png"
                />
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector56@2x.png"
                />
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector57@2x.png"
                />
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector58@2x.png"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="/vector59@2x.png"
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
                <span className={styles.getDeliveredByContainer1}>
                  <span>{`Delivery Fees : `}</span>
                  <span className={styles.span}>0.00</span>
                </span>
              </div>
            </div>
          </div>
          <button className={styles.buyNowWrapper}>
            <h2 className={styles.buyNow}>Buy Now</h2>
          </button>
        </div>
      </div>
      <img className={styles.frameIcon} alt="" src="/frame.svg" />
    </div>
  );
};

export default ProductsCategories;
