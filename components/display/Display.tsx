import "./Display.module.css";
import styles from "./Display.module.css";

export type DisplayProps = {
  value: string | number;
  style: string;
};

function Display({ value, style }: DisplayProps) {
  return (
    <div className={styles.display}>
      <div className={styles[style]}>{value}</div>
    </div>
  );
}

export default Display;
