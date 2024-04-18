import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.mainContent}>
        <div className={styles.photo202403301404221Parent}>
          <img
            className={styles.photo202403301404221Icon}
            alt=""
            src="/photo-20240330-140422-1@2x.png"
          />
          <div className={styles.location}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <div className={styles.deliveringToXxxxxxxx00000Parent}>
              <div className={styles.deliveringToXxxxxxxx}>
                Delivering to xxxxxxxx 00000
              </div>
              <h3 className={styles.updateLocation}>Update Location</h3>
            </div>
          </div>
        </div>
        <div className={styles.searchBar}>
          <div className={styles.searchBarChild} />
          <button className={styles.ellipseParent}>
            <div className={styles.groupChild} />
            <img className={styles.layer3Icon} alt="" src="/layer-3.svg" />
          </button>
          <div
            className={styles.searchProducts}
            placeholder="Search products"
          />
        </div>
        <div className={styles.groupParent}>
          <button className={styles.vectorParent}>
            <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
            <b className={styles.b}>0</b>
          </button>
          <div className={styles.rectangleParent}>
            <button className={styles.groupItem} />
            <h2 className={styles.connectWallet}>Connect Wallet</h2>
          </div>
        </div>
      </div>
      <div className={styles.subHeader}>
        <div className={styles.subHeaderChild} />
        <div className={styles.frameParent}>
          <nav className={styles.groupContainer}>
            <div className={styles.categoryParent}>
              <div className={styles.category}>Category</div>
              <img
                className={styles.vectorIcon2}
                alt=""
                src="/vector2@2x.png"
              />
            </div>
            <div className={styles.categoryParent}>
              <div className={styles.category}>Category</div>
              <img className={styles.vectorIcon3} alt="" src="/vector-2.svg"/>
            </div>
            <div className={styles.categoryParent}>
              <div className={styles.category}>Category</div>
              <img className={styles.vectorIcon3} alt="" src="/vector-2.svg" />
            </div>
            <div className={styles.categoryParent}>
              <div className={styles.category}>Category</div>
              <img className={styles.vectorIcon3} alt="" src="/vector-2.svg" />
            </div>
            <div className={styles.categoryParent}>
              <div className={styles.category}>Category</div>
              <img className={styles.vectorIcon3} alt="" src="/vector-2.svg" />
            </div>
            <div className={styles.categoryParent}>
              <div className={styles.category}>Category</div>
              <img className={styles.vectorIcon3} alt="" src="/vector-2.svg" />
            </div>
            <div className={styles.categoryParent}>
              <div className={styles.category}>Category</div>
              <img className={styles.vectorIcon3} alt="" src="/vector-2.svg" />
            </div>
            <div className={styles.categoryParent}>
              <div className={styles.category}>Category</div>
              <img className={styles.vectorIcon3} alt="" src="/vector-2.svg" />
            </div>
          </nav>
          <img
            className={styles.clipPathGroup}
            alt=""
            src="/clip-path-group.svg"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
