import "./Button.module.css";
import styles from "./Button.module.css";

export type ButtonProps = {
  primary: boolean;
  label: string;
};

function Button({ primary, label, ...props }: ButtonProps) {
  return (
    <button
      className={`${styles.btn}  ${primary ? styles.primary : ""} ${
        primary ? styles.gloss : ""
      } ${!primary ? styles.secondary : ""}`}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
