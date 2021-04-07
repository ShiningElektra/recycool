import Head from "next/head";
import Display from "../components/display/Display";
import GamePage from "../components/game/GamePage";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";

export default function Home() {
  const [showHighscore, setShowHighscore] = useState(false);

  setTimeout(() => {
    setShowHighscore(true);
  }, 5000);

  return (
    <>
      <Head>
        <title>Recycool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <GamePage />
        {showHighscore && <div>HighScore</div>}
        <div className={styles.display}>
          <Display id="time" value="30" style="time" />
          <Display id="score" value="0" style="score" />
        </div>
      </main>
    </>
  );
}
