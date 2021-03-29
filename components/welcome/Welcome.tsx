import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src="/welcomeLogo.png" />
      {/* Schatten und Logo und Weißraum mit einbauen, umbenennen */}
      <form className={styles.form}>
        <input placeholder="Dein Name" />
        <input type="submit" value="Spielen" />
      </form>
    </div>
  );
};

export default Welcome;
