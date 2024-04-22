// import Footer from "../sections/Footer.jsx";
import Navbar from "../sections/Navbar.jsx";
import Header from "../sections/Header.jsx";
import Footer from "../sections/Footer.jsx";
import TopLeft from "../sections/ProductPage/TopLeft";
import TopMiddle from "../sections/ProductPage/TopMiddle";
import TopRight from "../sections/ProductPage/TopRight";
import MiddleSection  from "../sections/ProductPage/MiddleSection";
import ReviewNFaq from "../sections/ProductPage/ReviewNFaq.jsx";
import SimilarProducts from "../sections/ProductPage/SimilarProducts.jsx";
import PopularProducts from "../sections/ProductPage/PopularProducts.jsx";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
    return (
        <div className={styles.productsPage}>
<Footer />
          <main className={styles.mainContainer}>
          <header className={styles.header}>
          {/* <header className={styles.mainContent}> */}
          <Navbar />
          
        
           
          {/* </header> */}
        
        </header>
            <div className={styles.maskGroupParent}>
              <Header />
              <div
                className={styles.computersAccessories}
              >{`Computers & Accessories > Gaming > Peripherals > Gaming Keyboards`}</div>
            </div>
            <div className={styles.productDeatils}>
              <TopLeft/>
              <TopMiddle />
              <TopRight />
            </div>
            <MiddleSection />
            <ReviewNFaq />
            <SimilarProducts />
            <PopularProducts />
          </main>
        </div>
      );
    };
    
export default ProductPage;