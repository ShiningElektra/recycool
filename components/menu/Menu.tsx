import styles from "../menu/Menu.module.css";
import React from "react";
export type MenuProps = { open: boolean };

const Menu = ({ open }: MenuProps) => {
  let className = styles.menu;
  if (open) {
    className += " " + styles.open;
  }

  return (
    <nav className={className}>
      <div className={styles.logoNav}>
        <img className={styles.logoImg} src="/logo.png" />
        <img className={styles.logoImg} src="/recycool.png" />
      </div>
      <a href="/">
        <div>Verlassen</div>
      </a>
      <a href="/">
        <div>HighScore</div>
      </a>
      <a href="/">
        <div>Credits</div>
      </a>
    </nav>
  );
};

export default Menu;
