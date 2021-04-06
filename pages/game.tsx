import Head from "next/head";
import Display from "../components/display/Display";
import GamePage from "../components/game/GamePage";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Recycool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <GamePage />
        <div className={styles.display}>
          <Display id="time" value="30" style="time" />
          <Display id="score" value="0" style="score" />
        </div>
      </main>
    </>
  );
}
