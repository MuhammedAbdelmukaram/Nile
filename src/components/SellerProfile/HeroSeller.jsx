import styles from "./HeroSeller.module.css";

const SellerHeader = () => {
  return (
    <div className={styles.image19Parent}>
      <img className={styles.image19Icon} alt="" src="/image-191@2x.png" />
      <div className={styles.frameWrapper}>
        <div className={styles.kreoTechPvtLtdParent}>
          <h1 className={styles.kreoTechPvt}>Kreo Tech PVT LTD</h1>
          <h3 className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          </h3>
          <div className={styles.frameParent}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector-10.svg" />
              <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
              <img className={styles.vectorIcon} alt="" src="/vector-12.svg" />
              <img className={styles.vectorIcon} alt="" src="/vector-13.svg" />
              <img className={styles.vectorIcon4} alt="" src="/vector-14.svg" />
            </div>
            <h3 className={styles.positiveLifetime258Total}>
              95% positive lifetime (258 total ratings)
            </h3>
          </div>
          <div className={styles.detailedSellerInformationParent}>
            <h2 className={styles.detailedSellerInformation}>
              Detailed Seller Information
            </h2>
            <div className={styles.businessNameBusinessAddressParent}>
              <h3 className={styles.businessNameBusinessContainer}>
                <ul className={styles.businessNameBusinessAddress}>
                  <li className={styles.businessName}>Business Name</li>
                  <li>{`Business Address `}</li>
                </ul>
              </h3>
              <h3 className={styles.kreoTechPvtContainer}>
                <p className={styles.blockBPark}>kreo tech pvt ltd</p>
                <p className={styles.blockBPark}>
                  2305, Block B, Park Road Building, 26 Deng Leung Road, Nanhai
                  Avenue, Nanshan Street
                </p>
                <p className={styles.blockBPark}>
                  Shenzhen, Nanshan District, Guangdong, 518000 CN
                </p>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerHeader;
