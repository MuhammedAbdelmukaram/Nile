import styles from "./OfferCard.module.css";

const OfferCard = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.loremIpsumParent}>
          <div className={styles.loremIpsum}>Lorem Ipsum</div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation...
          </div>
        </div>
        <button className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.claimOffer}>Claim Offer</div>
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
