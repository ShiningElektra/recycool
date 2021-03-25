import { ButtonHTMLAttributes } from "react";
import styles from "../burger/Burger.module.css";
import React from "react";

export type BurgerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  open: boolean;
  handleClick: () => void;
};

const Burger = ({ open, handleClick }: BurgerProps) => {
  let className = styles.burger;
  if (open) {
    className += " " + styles.open;
  }
  return (
    <button className={className} onClick={() => handleClick()}>
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};

export default Burger;
