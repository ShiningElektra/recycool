import styles from "../indexHG/IndexHG.module.css";

const IndexHG = () => {
  return (
    <div className={styles.hg}>
      {/* <img className={styles.hgpic} src="/indexpic.png" /> */}
      <div className={styles.logo}>
        <img className={styles.pic} src="/Logo.png" />
        <img className={styles.text} src="/Schrift.png" />
      </div>
    </div>
  );
};
export default IndexHG;
