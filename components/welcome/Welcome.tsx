import styles from "./Welcome.module.css";
import Link from "next/link";

const Welcome = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src="/welcomeLogo.png" />
      <form className={styles.form}>
        <input placeholder="Dein Name" />
        <Link href="/game">
          <input type="submit" value="Spielen" />
        </Link>
      </form>
    </div>
  );
};

export default Welcome;
