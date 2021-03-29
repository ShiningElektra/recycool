import "./Display.module.css";
import styles from "./Display.module.css";

export type DisplayProps = {
  primary: boolean;
  value: string | number;
};

function Display({ primary, value }: DisplayProps) {
  return (
    <div
      className={`${styles.display} ${primary ? styles.score : ""} ${
        !primary ? styles.time : ""
      }`}
    >
      {value}
    </div>
  );
}

export default Display;
