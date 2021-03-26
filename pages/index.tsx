import Head from "next/head";
import Button from "../components/buttons/Button";
import IndexHG from "../components/indexHG/IndexHG";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recycool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <IndexHG />
        <Button primary={true} label="Spielen" />
      </main>
    </div>
  );
}
