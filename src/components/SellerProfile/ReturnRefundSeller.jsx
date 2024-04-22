import styles from "./ReturnRefundSeller.module.css";

const ReturnRefundPolicySeller = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.returnAndRefundPolicyParent}>
        <h1 className={styles.returnAndRefund}>Return and Refund Policy</h1>
        <h1 className={styles.returnAndRefund}>Shipping Policy</h1>
        <h1 className={styles.returnAndRefund}>Others</h1>
      </div>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.haveAQuestionForKreoTechParent}>
          <h1 className={styles.haveAQuestion}>
            Have a question for Kreo Tech?
          </h1>
          <div className={styles.customerServicePhone86152}>
            Customer Service Phone:+8615218745031
          </div>
          <div className={styles.frameGroup}>
            <button className={styles.askAQuestionWrapper}>
              <div className={styles.askAQuestion}>Ask a Question</div>
            </button>
            <button className={styles.askAQuestionWrapper}>
              <div className={styles.askAQuestion}>Help</div>
            </button>
          </div>
          <h3 className={styles.shareYourThoughts}>
            Share your thoughts with other customers
          </h3>
          <button className={styles.askAQuestionWrapper}>
            <div className={styles.askAQuestion}>Leave a Feedback</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReturnRefundPolicySeller;
