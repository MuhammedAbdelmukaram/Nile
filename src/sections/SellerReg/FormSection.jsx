import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import styles from "./FormSection.module.css";

const FormSellerReg = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frame}>
        <h1 className={styles.startSelling}>Start Selling</h1>
        <div className={styles.frame1}>
          <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
          <input
            className={styles.companyName}
            placeholder="Company Name"
            type="text"
          />
        </div>
      </div>
      <div className={styles.frame2}>
        <div className={styles.frame1}>
          <img className={styles.frameIcon} alt="" src="/frame1@2x.png" />
          <input
            className={styles.companyEmail}
            placeholder="Company Email"
            type="text"
          />
        </div>
        <div className={styles.frame1}>
          <img className={styles.frameIcon} alt="" src="/frame2@2x.png" />
          <input
            className={styles.companyEmail}
            placeholder="Website Link"
            type="text"
          />
        </div>
      </div>
      <div className={styles.frame5}>
        <div className={styles.frame6}>
          <textarea
            className={styles.frame7}
            placeholder="About your company..."
          />
          <DropdownButton
            className={styles.frame8}
            title="Other platforms you are listed on"
            variant="light"
            align="start"
            size="sm"
          >{` `}</DropdownButton>
        </div>
        <button className={styles.frame9}>
          <h1 className={styles.submit}>Submit</h1>
        </button>
      </div>
    </div>
  );
};

export default FormSellerReg;
