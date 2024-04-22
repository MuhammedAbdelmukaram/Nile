import styles from "./FilerCategories.module.css";

const FilterCategories = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.filterParent}>
        <h1 className={styles.filter}>Filter</h1>
        <div className={styles.clearAll}>Clear All</div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.deliveryTimeParent}>
          <div className={styles.deliveryTime}>Delivery Time</div>
          <img className={styles.vectorIcon} alt="" src="/vector53@2x.png" />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleParent}>
            <input className={styles.rectangleInput} type="checkbox" />
            <div className={styles.getItBy}>Get it by tomorrow</div>
          </div>
          <div className={styles.getItIn2DaysParent}>
            <div className={styles.getItIn}>Get it in 2 days</div>
            <input className={styles.rectangleInput1} type="checkbox" />
          </div>
          <div className={styles.getItBy57DaysStandardParent}>
            <div className={styles.getItBy1}>
              Get it by 5 - 7 days (standard delivery)
            </div>
            <input className={styles.rectangleInput1} type="checkbox" />
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.deliveryTimeParent}>
          <div className={styles.deliveryTime}>Customer Ratings</div>
          <img className={styles.vectorIcon} alt="" src="/vector53@2x.png" />
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.rectangleGroup}>
            <input className={styles.rectangleInput} type="checkbox" />
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon2}
                alt=""
                src="/vector-121.svg"
              />
              <img
                className={styles.vectorIcon2}
                alt=""
                src="/vector-121.svg"
              />
              <img
                className={styles.vectorIcon2}
                alt=""
                src="/vector-121.svg"
              />
              <img
                className={styles.vectorIcon2}
                alt=""
                src="/vector-121.svg"
              />
              <img className={styles.vectorIcon2} alt="" src="/vector-16.svg" />
            </div>
            <div className={styles.getItBy}>{`& up`}</div>
          </div>
          <div className={styles.rectangleGroup}>
            <input className={styles.rectangleInput} type="checkbox" />
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon2}
                alt=""
                src="/vector-121.svg"
              />
              <img
                className={styles.vectorIcon2}
                alt=""
                src="/vector-121.svg"
              />
              <img
                className={styles.vectorIcon2}
                alt=""
                src="/vector-121.svg"
              />
              <img className={styles.vectorIcon2} alt="" src="/vector-16.svg" />
              <img className={styles.vectorIcon2} alt="" src="/vector-16.svg" />
            </div>
            <div className={styles.getItBy}>{`& up`}</div>
          </div>
          <div className={styles.rectangleGroup}>
            <input className={styles.rectangleInput} type="checkbox" />
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon2}
                alt=""
                src="/vector-121.svg"
              />
              <img
                className={styles.vectorIcon2}
                alt=""
                src="/vector-121.svg"
              />
              <img className={styles.vectorIcon2} alt="" src="/vector-16.svg" />
              <img className={styles.vectorIcon2} alt="" src="/vector-16.svg" />
              <img className={styles.vectorIcon2} alt="" src="/vector-16.svg" />
            </div>
            <div className={styles.getItBy}>{`& up`}</div>
          </div>
          <div className={styles.rectangleGroup}>
            <input className={styles.rectangleInput} type="checkbox" />
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon2}
                alt=""
                src="/vector-121.svg"
              />
              <img className={styles.vectorIcon2} alt="" src="/vector-16.svg" />
              <img className={styles.vectorIcon2} alt="" src="/vector-16.svg" />
              <img className={styles.vectorIcon2} alt="" src="/vector-16.svg" />
              <img className={styles.vectorIcon2} alt="" src="/vector-16.svg" />
            </div>
            <div className={styles.getItBy}>{`& up`}</div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.priceRangeParent}>
          <div className={styles.deliveryTime}>Price Range</div>
          <img className={styles.vectorIcon22} alt="" src="/vector-101.svg" />
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.rectangleGroup}>
            <input className={styles.rectangleInput} type="checkbox" />
            <div className={styles.getItBy}>0.05 SOL - 0.10 SOL</div>
          </div>
          <div className={styles.rectangleGroup}>
            <input className={styles.rectangleInput} type="checkbox" />
            <div className={styles.getItBy}>1.00 SOL - 5.00 SOL</div>
          </div>
          <div className={styles.rectangleGroup}>
            <input className={styles.rectangleInput} type="checkbox" />
            <div className={styles.getItBy}>10.00 SOL - 50.00 SOL</div>
          </div>
          <div className={styles.rectangleGroup}>
            <input className={styles.rectangleInput} type="checkbox" />
            <div className={styles.getItBy}>{`100.00 SOL & above`}</div>
          </div>
        </div>
        <div className={styles.groupParent}>
          <input
            className={styles.frameChild}
            placeholder="Min. Price (SOL)"
            type="text"
          />
          <div className={styles.div}>--</div>
          <input
            className={styles.frameItem}
            placeholder="Max. Price (SOL)"
            type="text"
          />
          <img className={styles.frameInner} alt="" src="/frame-67.svg" />
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.deliveryTimeParent}>
          <div className={styles.deliveryTime}>Brands</div>
          <img className={styles.vectorIcon22} alt="" src="/vector-101.svg" />
        </div>
        <input
          className={styles.groupInput}
          placeholder="Search for brand"
          type="text"
        />
        <div className={styles.frameParent5}>
          <div className={styles.rectangleGroup}>
            <input className={styles.rectangleInput} type="checkbox" />
            <div className={styles.getItBy}>Brand 1</div>
          </div>
          <div className={styles.rectangleGroup}>
            <input className={styles.rectangleInput} type="checkbox" />
            <div className={styles.getItBy}>Brand 2</div>
          </div>
          <div className={styles.rectangleGroup}>
            <input className={styles.rectangleInput} type="checkbox" />
            <div className={styles.getItBy}>Brand 3</div>
          </div>
          <div className={styles.rectangleGroup}>
            <input className={styles.rectangleInput} type="checkbox" />
            <div className={styles.getItBy}>Brand 4</div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.deliveryTimeParent}>
          <div className={styles.deliveryTime}>Offers</div>
          <img className={styles.vectorIcon22} alt="" src="/vector-101.svg" />
        </div>
        <div className={styles.frameParent5}>
          <div className={styles.rectangleGroup}>
            <input className={styles.rectangleInput} type="checkbox" />
            <div className={styles.getItBy}>Discount up to 10% off</div>
          </div>
          <div className={styles.rectangleGroup}>
            <input className={styles.rectangleInput} type="checkbox" />
            <div className={styles.getItBy}>Discount up to 20% off</div>
          </div>
          <div className={styles.rectangleGroup}>
            <input className={styles.rectangleInput} type="checkbox" />
            <div className={styles.getItBy}>Discount up to 30% off</div>
          </div>
          <div className={styles.rectangleGroup}>
            <input className={styles.rectangleInput} type="checkbox" />
            <div className={styles.getItBy}>Discount up to 40% off</div>
          </div>
          <div className={styles.rectangleGroup}>
            <input className={styles.rectangleInput} type="checkbox" />
            <div className={styles.getItBy}>Discount up to 50% off</div>
          </div>
          <div className={styles.rectangleGroup}>
            <input className={styles.rectangleInput} type="checkbox" />
            <div className={styles.getItBy}>Discount up to 60% off</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCategories;
