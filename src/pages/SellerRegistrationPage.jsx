import Navbar from "../sections/Navbar.jsx";
import Header from "../sections/Header.jsx";
import Footer from "../sections/Footer.jsx";
import LeftSideSellerReg from "../sections/SellerReg/LeftSideSellerReg.jsx";
import FormSellerReg from "../sections/SellerReg/FormSection.jsx";
import styles from "./SellerRegistrationPage.module.css";

const SellerRegistrationPage = () => {
  return (
    <div className={styles.sellerRegistration}>
      <Footer />
      <section className={styles.mainContainer}>
        <Navbar />
        <div className={styles.maskGroupParent}>
          <Header />
          <div
            className={styles.deliveringToXxxxxxxx}
          >{`Computers & Accessories > Gaming > Peripherals > Gaming Keyboards`}</div>
        </div>
        <div className={styles.parent}>
          <LeftSideSellerReg />
          <div className={styles.frameWrapper}>
            <FormSellerReg />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellerRegistrationPage;
