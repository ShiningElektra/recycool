import styles from "../menu/Menu.module.css";

const Menu = () => {
  return (
    <nav className={`${styles.menu}`}>
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
