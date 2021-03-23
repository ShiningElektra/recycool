import { ButtonHTMLAttributes, useState } from "react";
import styles from "../burger/Burger.module.css";
import React from "react";

export type BurgerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  open: boolean;
};

const Burger = ({ open }: BurgerProps) => {
  let className = styles.burger;
  if (open) {
    className += " " + styles.open;
  }
  const [buttonOpen, setButtonOpen] = useState(true);
  return (
    <button className={className} onClick={() => setButtonOpen(!buttonOpen)}>
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};

export default Burger;
