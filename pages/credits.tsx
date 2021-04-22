import Head from "next/head";
import Display from "../components/display/Display";
import GamePage from "../components/game/GamePage";
import styles from "../styles/Home.module.css";
import React from "react";
import Credits from "../components/credits/Credits";

export default function CreditsPage() {
  return (
    <>
      <Head>
        <title>Recycool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <GamePage />
        <div className={styles.display}>
          <Display value="30" style="time" />
          <Display value="0" style="score" />
        </div>
        <Credits />
      </main>
    </>
  );
}
