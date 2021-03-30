import styles from "./Cans.module.css";

const Cans = () => {
  return (
    <div className={styles.container}>
      <div className={styles.canresidual}></div>
      <div className={styles.canrecycling}> </div>
      <div className={styles.canpaper}></div>
    </div>
  );
};
export default Cans;
