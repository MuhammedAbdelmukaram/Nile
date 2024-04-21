import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar, Dropdown, DropdownButton } from "react-bootstrap";
import Reviews from "./Review.jsx";
import styles from "./CustomerReview.module.css";

const CutomersReviewSection = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.customerReviewsParent}>
          <h1 className={styles.customerReviews}>Customer Reviews</h1>
          <div className={styles.groupParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.div}>4.0 / 5</div>
            </div>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                alt=""
                src="/vector26@2x.png"
              />
              <img
                className={styles.vectorIcon1}
                alt=""
                src="/vector27@2x.png"
              />
              <img
                className={styles.vectorIcon2}
                alt=""
                src="/vector28@2x.png"
              />
              <img
                className={styles.vectorIcon3}
                alt=""
                src="/vector29@2x.png"
              />
              <img
                className={styles.vectorIcon4}
                alt=""
                src="/vector30@2x.png"
              />
            </div>
          </div>
        </div>
        <h3 className={styles.globalRatings}>177 global ratings</h3>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.starParent}>
            <h3 className={styles.star}>5 Star</h3>
            <ProgressBar
              className={styles.frameChild}
              variant="warning"
              now={65}
              min={0}
              max={100}
            />
            <div className={styles.div1}>65%</div>
          </div>
          <div className={styles.starGroup}>
            <h3 className={styles.star1}>4 Star</h3>
            <ProgressBar
              className={styles.frameItem}
              variant="warning"
              now={30}
            />
            <div className={styles.div2}>15%</div>
          </div>
          <div className={styles.starContainer}>
            <h3 className={styles.star2}>3 Star</h3>
            <ProgressBar
              className={styles.frameInner}
              variant="warning"
              now={6}
              min={0}
              max={100}
            />
            <div className={styles.div3}>5%</div>
          </div>
          <div className={styles.starParent1}>
            <h3 className={styles.star3}>2 Star</h3>
            <ProgressBar
              className={styles.frameProgressbar}
              variant="warning"
              now={10}
              min={0}
              max={100}
            />
            <div className={styles.div4}>10%</div>
          </div>
          <div className={styles.starParent2}>
            <h3 className={styles.star4}>1 Star</h3>
            <ProgressBar className={styles.frameChild1} />
            <div className={styles.div5}>0%</div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.whatCustomersSayParent}>
            <h1 className={styles.whatCustomersSay}>What customers say</h1>
            <div className={styles.customersLikeTheCustomizatiParent}>
              <div className={styles.customersLikeThe}>
                Customers like the customization and quality of the keyboard.
                They mention that it has the best mechanical keys and RGBs that
                are customizable. They also appreciate the size and value for
                money. Customers also like the sound quality. However, some
                disagree on appearance, lighting, and switch.
              </div>
              <div className={styles.aiGeneratedFromThe}>
                AI-generated from the text of customer reviews
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameParent3}>
              <div className={styles.qualityWrapper}>
                <div className={styles.quality}>Quality</div>
              </div>
              <div className={styles.valueWrapper}>
                <div className={styles.value}>Value</div>
              </div>
              <label className={styles.lightingWrapper}>
                <div className={styles.lighting}>Lighting</div>
              </label>
              <div className={styles.sizeWrapper}>
                <div className={styles.size}>Size</div>
              </div>
              <label className={styles.appearanceWrapper}>
                <div className={styles.appearance}>Appearance</div>
              </label>
            </div>
            <div className={styles.frameParent4}>
              <label className={styles.connectivityWrapper}>
                <div className={styles.connectivity}>Connectivity</div>
              </label>
              <div className={styles.soundWrapper}>
                <div className={styles.sound}>Sound</div>
              </div>
              <label className={styles.softwareWrapper}>
                <div className={styles.software}>Software</div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent5}>
        <div className={styles.reviewsWithImagesParent}>
          <h1 className={styles.reviewsWithImages}>Reviews with Images</h1>
          <button className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
            <div className={styles.viewAll}>View All</div>
          </button>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleContainer}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-31@2x.png"
            />
            <img
              className={styles.frameChild2}
              alt=""
              src="/rectangle-31@2x.png"
            />
            <img
              className={styles.frameChild3}
              alt=""
              src="/rectangle-31@2x.png"
            />
            <img
              className={styles.frameChild4}
              alt=""
              src="/rectangle-31@2x.png"
            />
            <img
              className={styles.frameChild5}
              alt=""
              src="/rectangle-31@2x.png"
            />
            <img
              className={styles.frameChild6}
              alt=""
              src="/rectangle-31@2x.png"
            />
            <img
              className={styles.frameChild7}
              alt=""
              src="/rectangle-31@2x.png"
            />
            <img
              className={styles.frameChild8}
              alt=""
              src="/rectangle-31@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameParent6}>
        <div className={styles.frameWrapper1}>
          <div className={styles.frameParent7}>
            <div className={styles.topReviewsParent}>
              <h1 className={styles.topReviews}>Top Reviews</h1>
              <DropdownButton
                className={styles.groupDropdownbutton}
                title="Top Reviews"
                variant="light"
              >{` `}</DropdownButton>
            </div>
            <button className={styles.groupButton}>
              <div className={styles.groupInner} />
              <div className={styles.viewAll1}>View All</div>
            </button>
          </div>
        </div>
        <div className={styles.frameParent8}>
          <div className={styles.frameParent9}>
            <div className={styles.frameParent10}>
              <div className={styles.wrapperEllipse23Parent}>
                <div className={styles.wrapperEllipse23}>
                  <img
                    className={styles.wrapperEllipse23Child}
                    alt=""
                    src="/ellipse-23@2x.png"
                  />
                </div>
                <div className={styles.johnDoe}>John Doe</div>
              </div>
              <div className={styles.vectorGroup}>
                <img
                  className={styles.vectorIcon5}
                  alt=""
                  src="/vector32@2x.png"
                />
                <img
                  className={styles.vectorIcon6}
                  alt=""
                  src="/vector33@2x.png"
                />
                <img
                  className={styles.vectorIcon7}
                  alt=""
                  src="/vector34@2x.png"
                />
                <img
                  className={styles.vectorIcon8}
                  alt=""
                  src="/vector35@2x.png"
                />
                <img
                  className={styles.vectorIcon9}
                  alt=""
                  src="/vector36@2x.png"
                />
              </div>
            </div>
            <div className={styles.purchasedOn4thMarch2024Parent}>
              <div className={styles.purchasedOn4th}>
                Purchased on 4th March 2024 | Reviewed on 10th March 2024
              </div>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </div>
            </div>
            <div className={styles.rectangleParent1}>
              <img
                className={styles.frameChild9}
                alt=""
                src="/rectangle-39@2x.png"
              />
              <div className={styles.loremIpsumDolorSitAmetCoParent}>
                <div className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className={styles.vectorContainer}>
                  <img
                    className={styles.vectorIcon10}
                    alt=""
                    src="/vector37@2x.png"
                  />
                  <img
                    className={styles.vectorIcon11}
                    alt=""
                    src="/vector38@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <Reviews />
          <Reviews />
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default CutomersReviewSection;
