import styles from "../menu/Menu.module.css";
import React from "react";
export type MenuProps = { open: boolean; onClick };

const Menu = ({ open, onClick }: MenuProps) => {
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
      <a href="#" onClick={() => onClick("highscore")}>
        <div>HighScore</div>
      </a>
      <a href="#" onClick={() => onClick("credits")}>
        <div>Credits</div>
      </a>
    </nav>
  );
};

export default Menu;
