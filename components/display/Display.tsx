import "./Display.module.css";
import styles from "./Display.module.css";

export type DisplayProps = {
  value: string | number;
  style: string;
  id: string;
};

function Display({ value, style, id }: DisplayProps) {
  return (
    <div className={styles.display}>
      <div className={styles[style]}>{value}</div>
    </div>
  );
}

export default Display;
