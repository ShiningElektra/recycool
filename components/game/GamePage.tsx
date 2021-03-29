import Field from "../field/Field";
import styles from "./GamePage.module.css";

const GamePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.fields}>
        <Field />
        <Field />
        <Field />
      </div>
    </div>
  );
};

export default GamePage;
