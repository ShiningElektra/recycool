import Cans from "../cans/Cans";
import Field from "../field/Field";
import styles from "./GamePage.module.css";

const GamePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cans}>
        <Cans />
      </div>
      <div className={styles.fields}>
        <Field />
        <Field />
        <Field />
      </div>
    </div>
  );
};

export default GamePage;
