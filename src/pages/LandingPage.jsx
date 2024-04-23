import Navbar from "../sections/Navbar.jsx";
import Categories from "../sections/LandingPage/Categories.jsx";
import OfferBanner from "../sections/LandingPage/OfferBanner.jsx";
import FeaturedProduct from "../sections/LandingPage/FeaturedProduct.jsx";
import TopPicks from "../sections/LandingPage/TopPicks.jsx";
import Footer from "../sections/Footer.jsx";
import ExploreMoreBestSellers from "../sections/LandingPage/ExploreMoreBestSellers.jsx";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <main className={styles.mainContainer}>
        <Navbar />

        <section className={styles.heroBanner}>
          <img className={styles.heroBgIcon} alt="" src="/hero-bg.svg" />
          <div className={styles.featuredBanner}>
            <img
              className={styles.icon}
              alt=""
              src="/12980762-5096160-1@2x.png"
            />
            <h1 className={styles.loremIpsumDolor}>
              Lorem Ipsum Dolor Sit Amet
            </h1>
            <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
          </div>
          <img className={styles.navIcon} alt="" src="/nav.svg" />
        </section>
        <section className={styles.categories}>
          <div className={styles.title}>
            <img className={styles.titleChild} alt="" src="/group-17.svg" />
            <h1 className={styles.categories1}>Categories</h1>
          </div>
          <Categories />
        </section>
        <OfferBanner />
        <FeaturedProduct />
        <TopPicks />
        <ExploreMoreBestSellers />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
