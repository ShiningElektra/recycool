import { ButtonHTMLAttributes } from "react";
import styles from "../burger/Burger.module.css";
import React from "react";
import { bool, func } from "prop-types";

export type BurgerProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Burger = ({ open, setOpen }, props: BurgerProps) => {
  return (
    <button
      className={styles.burger}
      {...props}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;
