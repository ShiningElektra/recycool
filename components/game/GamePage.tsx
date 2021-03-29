import Field from "../field/Field";
import styles from "./GamePage.module.css";

const GamePage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <Field />
      </form>
    </div>
  );
};

export default GamePage;
