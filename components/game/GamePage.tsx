import Field from "../fieldX/Field";
import styles from "./GamePage.module.css";

const GamePage = () => {
  return (
    <div className={styles.container}>
      {/* <Can /> */}
      <form className={styles.form}>
        <Field />
      </form>
    </div>
  );
};

export default GamePage;
