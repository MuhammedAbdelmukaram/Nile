import styles from "./InStockAddCard.module.css";

const InStockAddCart = () => {
  return (
    <div className={styles.sidebarInner}>
      <div className={styles.frameParent}>
        <div className={styles.groupParent}>
          <div className={styles.clipPathGroupParent}>
            <img
              className={styles.clipPathGroup}
              alt=""
              src="/clip-path-group3@2x.png"
            />
            <div className={styles.sol}>3.54 SOL</div>
          </div>
          <h2 className={styles.inStock}>In Stock</h2>
        </div>
        <div className={styles.location}>
          <img className={styles.vectorIcon} alt="" src="/vector18@2x.png" />
          <div className={styles.deliveringToXxxxxxxx00000Parent}>
            <div className={styles.deliveringToXxxxxxxx}>
              Delivering to xxxxxxxx 00000
            </div>
            <h3 className={styles.updateLocation}>Update Location</h3>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.quantityParent}>
            <div className={styles.quantity}>Quantity</div>
            <div className={styles.wrapperGroup46}>
              <input
                className={styles.wrapperGroup46Child}
                placeholder="1"
                type="text"
              />
              <img
                className={styles.vectorIcon1}
                alt=""
                src="/vector19@2x.png"
              />
              <img
                className={styles.vectorIcon2}
                alt=""
                src="/vector20@2x.png"
              />
            </div>
          </div>
          <div className={styles.getDeliveredByContainer}>
            <span>
              <span className={styles.getDeliveredBy}>Get delivered by</span>
              <span>{` `}</span>
            </span>
            <span>
              <span className={styles.monday1stApril}>Monday 1st April</span>
            </span>
          </div>
          <div className={styles.deliveryFeesContainer}>
            <span>{`Delivery Fees : `}</span>
            <span className={styles.span}>0.00</span>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <button className={styles.buyNow}>Buy Now</button>
            <img className={styles.groupItem} alt="" src="/group-251@2x.png" />
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <button className={styles.addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InStockAddCart;
