import styles from "../menu/Menu.module.css";
import React from "react";

export type MenuProps = { open: boolean };
// property die open heißt
const Menu = ({ open }: MenuProps) => {
  let className = styles.menu;
  if (open) {
    className += " " + styles.open;
  }

  return (
    <nav className={className}>
      <a href="/">
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        Logo
      </a>
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
