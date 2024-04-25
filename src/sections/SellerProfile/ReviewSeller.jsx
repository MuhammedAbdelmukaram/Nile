import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar, Dropdown, DropdownButton } from "react-bootstrap";
import ReviewCardSeller from "../../components/SellerProfile/ReviewCardSeller";
import styles from "./ReviewSeller.module.css";

const LeftSidebarReviewSeller = () => {
  return (  
     <div className={styles.frameWrapper}>

    <div className={styles.frameParent}>
      <div className={styles.reviewsWrapper}>
        <h1 className={styles.reviews}>Reviews</h1>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.starParent}>
          <h3 className={styles.star}>5 Star</h3>
          <ProgressBar
            className={styles.frameChild}
            variant="warning"
            now={65}
            min={0}
            max={100}
          />
          <div className={styles.div}>65%</div>
        </div>
        <div className={styles.starParent}>
          <h3 className={styles.star}>4 Star</h3>
          <ProgressBar
            className={styles.frameChild}
            variant="warning"
            now={15}
            min={0}
            max={100}
          />
          <div className={styles.div}>15%</div>
        </div>
        <div className={styles.starParent}>
          <h3 className={styles.star}>3 Star</h3>
          <ProgressBar
            className={styles.frameChild}
            variant="warning"
            now={5}
            min={0}
            max={100}
          />
          <div className={styles.div}>5%</div>
        </div>
        <div className={styles.starParent}>
          <h3 className={styles.star}>2 Star</h3>
          <ProgressBar
            className={styles.frameChild}
            variant="warning"
            now={10}
            min={0}
            max={100}
          />
          <div className={styles.div}>10%</div>
        </div>
        <div className={styles.starParent}>
          <h3 className={styles.star}>1 Star</h3>
          <ProgressBar
            className={styles.frameChild}
            variant="warning"
            now={0}
            min={0}
            max={100}
          />
          <div className={styles.div}>0%</div>
        </div>
      </div>
      <div className={styles.groupParent}>
        <DropdownButton
          className={styles.groupDropdownbutton}
          title="Top Reviews"
          variant="light"
          size="sm"
        >{` `}</DropdownButton>
        <button className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.viewAll}>View All</div>
        </button>
      </div>
      <ReviewCardSeller />
      <ReviewCardSeller />
      <ReviewCardSeller />
      <ReviewCardSeller />
      <ReviewCardSeller />
    </div>
  </div>

  );
};

export default LeftSidebarReviewSeller;
