import styles from "./OfferBanner.module.css";

const OfferBanner = () => {
  return (
    <section className={styles.offerBaner}>
      <img className={styles.blobBgIcon} alt="" src="/blob-bg.svg" />
      <div className={styles.offerBanerChild} />
      <div className={styles.groupParent}>
        <img className={styles.frameChild} alt="" src="/group-23@2x.png" />
        <div className={styles.upTo40OffOnAllApplianceParent}>
          <h1 className={styles.upTo40}>Up to 40% off on all appliances</h1>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.days121530Parent}>
              <div className={styles.days12}>2 days 12 : 15 : 30</div>
              <h3 className={styles.saleStartsIn}>Sale Starts In :</h3>
            </div>
          </div>
        </div>
        <img className={styles.frameItem} alt="" src="/group-22.svg" />
      </div>
    </section>
  );
};

export default OfferBanner;
