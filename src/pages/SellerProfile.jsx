import Navbar from "../sections/Navbar.jsx";
import Header from "../sections/Header.jsx";
import Footer from "../sections/Footer.jsx";
import SellerReviews from "../sections/SellerProfile/ReviewSeller.jsx";
import HeroSeller from "../components/SellerProfile/HeroSeller.jsx";
import AboutSeller from "../components/SellerProfile/AboutSeller.jsx";
import ReturnRefundSeller from "../components/SellerProfile/ReturnRefundSeller.jsx";
import ProductSeller from "../sections/SellerProfile/ProductSeller.jsx";

import styles from './SellerProfile.module.css'

const SellerProfile = () => {
    return (
        <div className={styles.sellerProfile}>
          <Footer />
          <main className={styles.mainContainer}>
            <Navbar />
            <div className={styles.maskGroupParent}>
              <Header />
              <div
                className={styles.deliveringToXxxxxxxx}
              >{`Computers & Accessories > Gaming > Peripherals > Gaming Keyboards`}</div>
            </div>
            <main className={styles.frameGroup}>
              <SellerReviews />
              <section className={styles.frameWrapper}>
                <div className={styles.frameContainer}>
                  <HeroSeller />
                  <AboutSeller />
                  <ReturnRefundSeller />
                  <ProductSeller />
                </div>
              </section>
            </main>
          </main>
        </div>
      );
};

export default SellerProfile;