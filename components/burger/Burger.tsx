import { ButtonHTMLAttributes } from "react";
import styles from "../burger/Burger.module.css";

export type BurgerProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Burger = (props: BurgerProps) => {
  return (
    <button className={styles.burger} {...props}>
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};
export default Burger;
