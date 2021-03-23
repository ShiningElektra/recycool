import styles from "../menu/Menu.module.css";
import React from "react";
import { bool } from "prop-types";

const Menu = ({ open }) => {
  const className = "menu";
  if (open) {
    className += " open";
  }

  return (
    <nav open={open} className={className}>
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
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
